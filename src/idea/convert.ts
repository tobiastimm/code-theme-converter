import fs from 'fs-extra'
import path from 'path'
import chalk from 'chalk'
import rimraf from 'rimraf'

import { fetchRepo } from '../fetchRepo'
import { convertToIdea as convertToIdeaColorScheme } from './colorScheme'
import { readCodeTheme, readCodeThemePackage } from '../util/vscode'
import { createEditorTheme } from './editorTheme'
import { createPluginXml } from './plugin'

export async function convertToIdea (
  vscodeThemeRepoUrl: string,
  options: {
    directory?: string
  }
): Promise<unknown> {
  try {
    console.log(chalk.cyan('Fetching repo'))
    const { repo } = await fetchRepo(vscodeThemeRepoUrl)
    const themeDir = path.join(repo, options.directory ?? '')
    const themes = await fs.readdir(themeDir)
    const themePackage = await readCodeThemePackage(repo)
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
          const ideaThemeDir = path.join(process.cwd(), vscodeTheme.name)
          if (fs.existsSync(ideaThemeDir)) {
            rimraf.sync(ideaThemeDir)
          }
          fs.mkdir(ideaThemeDir)
            .then(async () => {
              const colorScheme = convertToIdeaColorScheme(
                vscodeTheme,
                themePackage.version
              )
              const themeName = vscodeTheme.name
                .replace(/\s+/g, '')
                .toLowerCase()
              const resourcesDir = path.join(ideaThemeDir + '/resources')
              const metaInfDir = path.join(resourcesDir + '/META-INF')
              const themesDir = path.join(resourcesDir + '/themes')
              const srcDir = path.join(ideaThemeDir + '/src')
              await fs.mkdir(resourcesDir)
              await fs.mkdir(metaInfDir)
              await fs.mkdir(themesDir)
              await fs.mkdir(srcDir)
              await fs.writeFile(
                path.join(srcDir, themeName + '.theme.json'),
                JSON.stringify(
                  createEditorTheme(vscodeTheme, themeName),
                  null,
                  2
                )
              )
              await fs
                .writeFile(
                  path.join(metaInfDir, 'plugin.xml'),
                  createPluginXml({
                    plugin: {
                      id: themePackage.__metadata.id ?? '',
                      name: themePackage.displayName,
                      description: themePackage.description,
                      version: themePackage.version,
                      changelog: ''
                    },
                    theme: {
                      name: vscodeTheme.name
                    },
                    vendor: {
                      name: vscodeTheme.name ?? themePackage.author,
                      email: '',
                      url: ''
                    }
                  })
                )
                .catch(error => console.trace(chalk.red(error)))
              await fs.writeFile(
                path.join(themesDir, themeName + '.xml'),
                colorScheme
              )
            })
            .catch(error => console.trace(chalk.red(error)))
        })
        .catch(error => console.trace(chalk.red(error)))
    })
    return Promise.all(promises)
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error)
    console.trace(chalk.red(message))
    if (message.includes('checkout')) {
      console.log(
        chalk.red(
          'You may need to add the branch name explicitly to the end of your URL (e.g. "#main")'
        )
      )
    }
  }
}
