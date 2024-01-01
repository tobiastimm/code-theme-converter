import os from 'os'
import fs from 'fs'
import chalk from 'chalk'

function getUsername (): string {
  return os.userInfo().username
}

export function getSublimeTextPackageDir (): string {
  const username = getUsername()
  const testPaths: string[] = []
  switch (os.platform()) {
    case 'win32':
      testPaths.push(
        '%APPDATA%/Roaming/Sublime Text 3/Packages/',
        '%APPDATA%/Roaming/Sublime Text/Packages/'
      )
      break
    case 'darwin':
      testPaths.push(
        `/Users/${username}/Library/Application Support/Sublime Text 3/Packages/`,
        `/Users/${username}/Library/Application Support/Sublime Text/Packages/`
      )
      break
    default:
      testPaths.push(
        `/${username}/.config/sublime-text-3/Packages/`,
        `/${username}/.config/sublime-text/Packages/`
      )
  }

  for (const testPath of testPaths) {
    if (fs.existsSync(testPath)) return testPath
  }

  console.log(
    chalk.yellow(
      'Could not find Sublime theme dir, falling back to current working dir'
    )
  )
  return process.cwd()
}
