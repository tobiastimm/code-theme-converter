import chalk from 'chalk'

import { createCommand } from 'commander'

import { convertToSublime } from '../sublime/convert'
const program = createCommand()

program
  .storeOptionsAsProperties()
  .version(require('../../package').version)
  .usage('<repo-url> [options]')
  .description('Converts a vscode-theme into the sublime-text theme syntax')
  .option('-S, --save', 'Install theme into Sublime Text', false)
  .option(
    '-T, --as-tm-theme',
    'Convert to .tmTheme instead of .sublime-color-scheme',
    false
  )
  .option(
    '-d, --directory [name]',
    'Overwrite directory containing the themes',
    'themes'
  )
  .parse(process.argv)

if (process.argv.length < 1) {
  program.outputHelp()
}

if (program.args.length > 1) {
  console.warn(
    chalk.yellow(
      'You have provided more than one argument. Only the first argument will be used!'
    )
  )
}

const repoUrl: string = program.args[0]
const options = program as CommandOptions

if (repoUrl != '') {
  convertToSublime(repoUrl, options)
    .then(() => {
      console.log(
        chalk.green(
          '🎉 Successfully converted the vscode theme for sublime text!'
        )
      )
    })
    .catch(err => {
      console.error(chalk.red(err))
    })
}
