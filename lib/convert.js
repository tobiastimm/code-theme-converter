const fs = require('fs-extra')
const path = require('path')
const chalk = require('chalk')
const { promisify } = require('util')

const fetchRepo = require('./fetchRepo')
const convertTheme = require('./convertTheme')

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
    themes.forEach(theme => {
      convertTheme('', themeDir, theme)
    })
  } catch (e) {
    console.error(e)
  }
}
