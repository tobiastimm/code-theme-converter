const fs = require('fs-extra')
const path = require('path')
const chalk = require('chalk')
const rimraf = require('rimraf')
const { promisify } = require('util')
const uuid = require('uuid')

const createColorScheme = require('./colorScheme')
const createEditorTheme = require('./editorTheme')
const createColorMapping = require('./codeColorMapping')
const fetchRepo = require('../fetchRepo')
const {
  readVisualStudioCodeTheme,
  readVisualStudioCodeThemePackage
} = require('../util')

const readdir = promisify(fs.readdir)

module.exports = async function (repoUrl, options) {
  try {
    console.log(chalk.cyan('Fetching repo'))
    const { root, repo } = await fetchRepo(repoUrl)
    const themeDir = path.join(repo, options.directory)
    const themes = await readdir(themeDir)
    const themesCount = themes.length
    console.log(
      chalk.cyan(`Converting ${themesCount} theme${themesCount > 1 ? 's' : ''}`)
    )

    themes.forEach(async themePath => {
      const vscodeTheme = await readVisualStudioCodeTheme(themeDir, themePath)
      const themePackageJson = await readVisualStudioCodeThemePackage(repo)
      const fileName = path.parse(themePath).name
      console.log(chalk.yellow(`Converting ${vscodeTheme.name}`))
      const ideaThemeDir = path.join(process.cwd(), vscodeTheme.name)
      if (fs.existsSync(ideaThemeDir)) {
        rimraf.sync(ideaThemeDir)
      }
      await fs.mkdir(ideaThemeDir)

      const ideaTheme = {
        plugin: {
          id: uuid.v4(),
          name: vscodeTheme.name,
          version: themePackageJson.version,
          description: themePackageJson.description,
          changelog: ''
        },
        vendor: {
          name: vscodeTheme.author,
          email: '',
          url: themePackageJson.repository.url
        },
        theme: {
          name: fileName
        }
      }
      const colorMapping = createColorMapping(vscodeTheme)
      fs.createReadStream(path.join(repo, 'LICENSE')).pipe(
        fs.createWriteStream(path.join(ideaThemeDir, 'LICENSE'))
      )

      await fs.mkdir(path.join(ideaThemeDir, 'src'))
      fs.writeFile(
        path.join(ideaThemeDir, 'src', fileName + '.theme.json'),
        createEditorTheme(vscodeTheme, fileName)
      )

      await fs.mkdirp(path.join(ideaThemeDir, 'resources/themes'))
      fs.writeFile(
        path.join(ideaThemeDir, 'resources/themes', fileName + '.xml'),
        createColorScheme(vscodeTheme, themePackageJson, colorMapping, fileName)
      )
    })
  } catch (e) {
    console.error(e)
  }
}
