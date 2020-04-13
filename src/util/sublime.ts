import os from 'os'

function getUsername (): string {
  return os.userInfo().username
}

export function getSublimeTextPackageDir (): string {
  const username = getUsername()
  switch (os.platform()) {
    case 'win32':
      return '%APPDATA%/Roaming/Sublime Text 3/Packages/'
    case 'darwin':
      return `/Users/${username}/Library/Application Support/Sublime Text 3/Packages/`
    default:
      return `/${username}/.config/sublime-text-3/Packages/`
  }
}
