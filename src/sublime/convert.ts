import fs from 'fs-extra'
import path from 'path'
import chalk from 'chalk'
import rimraf from 'rimraf'

import { fetchRepo } from '../fetchRepo'
import { toTmTheme } from './tmTheme'
import { getSublimeTextPackageDir } from '../util/sublime'
import { readCodeTheme } from '../util/vscode'
import { createAdaptiveTheme } from './uiTheme'
import { toSublimeColorScheme } from './colorScheme'

export async function convertToSublime (
  vscodeThemeRepoUrl: string,
  options: {
    directory?: string
    save?: boolean
    asTmTheme?: boolean
  }
): Promise<unknown> {
  try {
    console.log(chalk.cyan('Fetching repo'))
    const { repo } = await fetchRepo(vscodeThemeRepoUrl)

    const themeDir = path.join(repo, options.directory ?? '')
    const themes = await fs.readdir(themeDir)
    const themesCount = themes.length

    console.log(
      chalk.cyan(
        `Converting ${themesCount.toString()} theme${
          themesCount > 1 ? 's' : ''
        }`
      )
    )
    const promises: Array<Promise<unknown>> = []
    themes.forEach((themeName: string) => {
      readCodeTheme(themeDir, themeName)
        .then(vscodeTheme => {
          console.log(chalk.yellow(`Converting ${vscodeTheme.name}`))
          const sublimeThemeDir = path.join(
            options.save != null && options.save
              ? getSublimeTextPackageDir()
              : process.cwd(),
            vscodeTheme.name
          )
          if (fs.existsSync(sublimeThemeDir)) {
            rimraf.sync(sublimeThemeDir)
          }
          fs.mkdir(sublimeThemeDir)
            .then(() => {
              promises.push(
                fs
                  .writeFile(
                    path.join(
                      sublimeThemeDir,
                      vscodeTheme.name +
                        (options.asTmTheme ?? false
                          ? '.tmTheme'
                          : '.sublime-color-scheme')
                    ),
                    options.asTmTheme ?? false
                      ? toTmTheme(vscodeTheme)
                      : JSON.stringify(
                        toSublimeColorScheme(vscodeTheme),
                        undefined,
                        2
                      )
                  )
                  .catch(error => console.log(chalk.red(error)))
              )
              promises.push(
                fs.writeFile(
                  path.join(
                    sublimeThemeDir,
                    vscodeTheme.name + '.sublime-theme'
                  ),
                  JSON.stringify(createAdaptiveTheme(vscodeTheme), undefined, 2)
                )
              )
            })
            .catch(error => console.log(chalk.red(error)))
        })
        .catch(error => console.log(chalk.red(error)))
    })
    return Promise.all(promises)
  } catch (error) {
    console.log(chalk.red(error))
  }
}
