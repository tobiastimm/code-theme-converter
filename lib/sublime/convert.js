const fs = require('fs-extra')
const path = require('path')
const chalk = require('chalk')
const { promisify } = require('util')

const fetchRepo = require('../fetchRepo')
const createColorScheme = require('./colorScheme')
const {
  getSublimeTextPackagesDir,
  readVisualStudioCodeTheme,
} = require('../util')

const readdir = promisify(fs.readdir)

module.exports = async function(repoUrl, options) {
  try {
    console.log(chalk.cyan('Fetching repo'))
    const { root, repo } = await fetchRepo(repoUrl)
    const themeDir = path.join(repo, options.directory)
    const themes = await readdir(themeDir)
    const themesCount = themes.length
    console.log(
      chalk.cyan(
        `Converting ${themesCount} theme${themesCount > 1 ? 's' : ''}`,
      ),
    )
    themes.forEach(async theme => {
      const vscodeTheme = await readVisualStudioCodeTheme(themeDir, theme)
      console.log(chalk.yellow(`Converting ${vscodeTheme.name}`))
      const sublimeThemeDir = path.join(
        options.save ? getSublimeTextPackagesDir() : process.cwd(),
        vscodeTheme.name,
      )
      if (fs.existsSync(sublimeThemeDir)) {
        rimraf.sync(sublimeThemeDir)
      }
      await fs.mkdir(sublimeThemeDir)
      fs.writeFile(
        path.join(sublimeThemeDir, vscodeTheme.name + '.tmTheme'),
        createColorScheme(sublimeThemeDir, vscodeTheme),
      )
    })
  } catch (e) {
    console.error(e)
  }
}
