import os from 'os'
import fs from 'fs'

function getUsername (): string {
  return os.userInfo().username
}

export function getSublimeTextPackageDir (): string {
  const username = getUsername()
  switch (os.platform()) {
    case 'win32':
      if(fs.existsSync('%APPDATA%/Roaming/Sublime Text 3/Packages/'))
        return '%APPDATA%/Roaming/Sublime Text 3/Packages/'
      else
        return '%APPDATA%/Roaming/Sublime Text/Packages/'
    case 'darwin':
      if(fs.existsSync(`/Users/${username}/Library/Application Support/Sublime Text 3/Packages/`))
        return `/Users/${username}/Library/Application Support/Sublime Text 3/Packages/`
      else
        return `/Users/${username}/Library/Application Support/Sublime Text/Packages/`
    default:
      if(fs.existsSync(`/${username}/.config/sublime-text-3/Packages/`))
        return `/${username}/.config/sublime-text-3/Packages/`
      else
        return `/${username}/.config/sublime-text/Packages/`
  }
}
