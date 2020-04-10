import fs from 'fs-extra'
import path from 'path'
import chalk from 'chalk'
import rimraf from 'rimraf'

import { fetchRepo } from '../fetchRepo'
import { convertToSublimeColorScheme } from './colorScheme'
import { getSublimeTextPackageDir } from '../util/sublime'
import { readCodeTheme } from '../util/vscode'

export async function convertToSublime(
  vscodeThemeRepoUrl: string,
  options: {
    directory?: string
    save?: boolean
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
                    path.join(sublimeThemeDir, vscodeTheme.name + '.tmTheme'),
                    convertToSublimeColorScheme(vscodeTheme)
                  )
                  .catch(error => console.log(chalk.red(error)))
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
