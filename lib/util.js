const os = require('os')
const path = require('path')
const fs = require('fs-extra')

function createTmpDir(dirName = 'vsc2subl') {
  return new Promise((resolve, reject) => {
    const tmpDir = path.join(os.tmpdir(), dirName)
    fs.remove(tmpDir)
      .then(() => resolve(tmpDir))
      .catch(err => reject(err))
  })
}

function getUsername() {
  return os.userInfo().username
}

function getSublimeTextPackagesDir() {
  switch (os.platform()) {
    case 'win32':
      return '%APPDATA%/Roaming/Sublime Text 3/Packages/'
    case 'darwin':
      return `/Users/${getUsername()}/Library/Application Support/Sublime Text 3/Packages/`
    default:
      return `/${getUsername()}/.config/sublime-text-3/Packages/`
  }
}

function getColor(colors, ...fieldNames) {
  for (let field of fieldNames) {
    if (colors.hasOwnProperty(field)) {
      return colors[field]
    }
  }
  return ''
}

exports.createTmpDir = createTmpDir
exports.getUsername = getUsername
exports.getSublimeTextPackagesDir = getSublimeTextPackagesDir
exports.getColor = getColor
