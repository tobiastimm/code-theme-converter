const os = require('os')
const path = require('path')
const fs = require('fs-extra')
const JSON5 = require('json5')

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

function readVisualStudioCodeTheme(themeDir, theme) {
  return new Promise((resolve, reject) => {
    fs.readFile(path.join(themeDir, theme), function(err, data) {
      if (!err) {
        const vscodeTheme = JSON5.parse(data.toString('utf8'))
        resolve(vscodeTheme)
      }
      reject(err)
    })
  })
}

function hexToRgb(hex) {
  return hex
    .replace(
      /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
      (m, r, g, b) => '#' + r + r + g + g + b + b,
    )
    .substring(1)
    .match(/.{2}/g)
    .map(x => parseInt(x, 16))
}

exports.createTmpDir = createTmpDir
exports.getUsername = getUsername
exports.getSublimeTextPackagesDir = getSublimeTextPackagesDir
exports.getColor = getColor
exports.readVisualStudioCodeTheme = readVisualStudioCodeTheme
exports.hexToRgb = hexToRgb
