import chalk from 'chalk'

import commander, { createCommand } from 'commander'

import { convertToSublime } from '../sublime/convert'
const program = createCommand()

program
  .version(require('../../package').version)
  .usage('<repo-url> [options]')
  .description('Converts a vscode-theme into the sublime-text theme syntax')
  .option('-S, --save', 'Install theme into Sublime Text', false)
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
const options = cleanArgs(program)

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

function cleanArgs(cmd: commander.Command): CommandOptions {
  const args: CommandOptions = {}
  cmd.options.forEach((option: any) => {
    const key = option.long.replace(/^--/, '')
    // if an option is not present and Command has a method with the same name
    // it should not be copied
    if (typeof cmd[key] != 'function' && typeof cmd[key] != 'undefined') {
      args[key] = cmd[key]
    }
  })
  return args
}
