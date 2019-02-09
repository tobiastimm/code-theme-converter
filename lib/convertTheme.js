const fs = require('fs-extra')
const path = require('path')
const chalk = require('chalk')
const JSON5 = require('json5')
const plist = require('plist')
const uuid = require('uuid')
const rimraf = require('rimraf')

const { getSublimeTextPackagesDir } = require('./util')

module.exports = async function(save, themeDir, theme) {
  const content = fs.readFileSync(path.join(themeDir, theme))
  const vscodeTheme = JSON5.parse(content)
  console.log(chalk.yellow(`Converting ${vscodeTheme.name}`))
  const plistStr = render(vscodeTheme)
  const sublimeThemeDir = path.join(
    save ? getSublimeTextPackagesDir() : process.cwd(),
    vscodeTheme.name,
  )
  try {
    if (fs.existsSync(sublimeThemeDir)) {
      rimraf.sync(sublimeThemeDir)
    }
    await fs.mkdir(sublimeThemeDir)
    await fs.writeFile(
      path.join(sublimeThemeDir, vscodeTheme.name + '.tmTheme'),
      plist.build(plist.parse(plistStr)),
    )
  } catch (e) {
    console.error(chalk.red(e))
  }
}

function render(vscodeTheme) {
  return `<?xml version="1.0" encoding="UTF-8"?>
     <!DOCTYPE plist PUBLIC "-//Apple Computer//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
     <plist version="1.0">
     <dict>
        ${createKeyStringPair('name', vscodeTheme.name)}
        <key>settings</key>
        <array>
          <dict>
            <key>settings</key>
            <dict>
              ${createKeyStringPair(
                'background',
                vscodeTheme.colors['editor.background'],
              )}
              ${createKeyStringPair(
                'caret',
                vscodeTheme.colors['editor.foreground'],
              )}
              ${createKeyStringPair(
                'foreground',
                vscodeTheme.colors['editor.foreground'],
              )}
              ${createKeyStringPair(
                'lineHighlight',
                vscodeTheme.colors['editor.lineHighlightBackground'],
              )}
              ${createKeyStringPair(
                'selection',
                vscodeTheme.colors['editor.selectionBackground'],
              )}
            </dict>
          </dict>
           ${convertTokenColors(vscodeTheme.tokenColors).join('\n')}
        </array>
     ${createKeyStringPair('uuid', uuid.v4())}
     ${createKeyStringPair('colorSpaceName', 'sRGB')}
     ${createKeyStringPair(
       'semanticClass',
       `theme.${vscodeTheme.type}.${vscodeTheme.name
         .replace(/\s+/g, '-')
         .toLowerCase()}`,
     )}
    ${createKeyStringPair('author', vscodeTheme.author)}
    ${createKeyStringPair('comment', '')}
     </dict>
     </plist>
    `
}

function convertTokenColors(tokenColors) {
  return tokenColors.map(token => {
    return `
      <dict>
        ${token.name ? createKeyStringPair('name', token.name) : ''}
        ${createKeyStringPair('scope', convertScope(token.scope))}
        ${
          token.settings
            ? `<key>settings</key>
        <dict>
          ${Object.keys(token.settings).map(key => {
            return `<key>${key}</key>
            <string>${token.settings[key]}</string>`
          })}
        </dict>
        `
            : ''
        }
      </dict>
    `
  })
}

function convertScope(scope) {
  if (Array.isArray(scope)) {
    return scope.join(', ').replace('"', '')
  }
  return scope.replace('"', '')
}

function createKeyStringPair(key, value) {
  return `
    <key>${key}</key>
    <string>${value}</string>
  `
}
