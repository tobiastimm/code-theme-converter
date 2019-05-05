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
    continue
  }
  return ''
}

function findScopeColor(tokenColors, scope) {
  for (let token of tokenColors) {
    const tokenScope = token.scope
    let isDefined = false
    if (typeof tokenScope === 'string') {
      isDefined = tokenScope.includes(scope)
    } else if (Array.isArray(tokenScope)) {
      isDefined =
        tokenScope.filter(element => element.includes(scope)).length > 0
    } else {
      return ''
    }
    if (isDefined) {
      return token.settings.foreground
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

function readVisualStudioCodeThemePackage(dir) {
  return new Promise((resolve, reject) => {
    fs.readFile(path.join(dir, 'package.json'), function(err, data) {
      if (!err) {
        const packageJson = JSON.parse(data.toString('utf8'))
        resolve(packageJson)
      }
      reject(err)
    })
  })
}

function hex2Rgb(hex) {
  return hex
    .replace(
      /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
      (m, r, g, b) => '#' + r + r + g + g + b + b,
    )
    .substring(1)
    .match(/.{2}/g)
    .map(x => parseInt(x, 16))
}

function hex2Rgba(str) {
  var num = parseInt(str.slice(1), 16)
  return [(num >> 16) & 255, (num >> 8) & 255, num & 255, (num >> 24) & 255]
}

function getAlphaFromHex(str) {
  return hex2Rgba(str).pop()
}

function removeLastElement(arr) {
  const result = [...arr]
  result.pop()
  return result
}

exports.createTmpDir = createTmpDir
exports.getUsername = getUsername
exports.getSublimeTextPackagesDir = getSublimeTextPackagesDir
exports.getColor = getColor
exports.findScopeColor = findScopeColor
exports.readVisualStudioCodeTheme = readVisualStudioCodeTheme
exports.readVisualStudioCodeThemePackage = readVisualStudioCodeThemePackage
exports.hex2Rgb = hex2Rgb
exports.hex2Rgba = hex2Rgba
exports.removeLastElement = removeLastElement
exports.getAlphaFromHex = getAlphaFromHex
