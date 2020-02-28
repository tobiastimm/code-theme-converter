const plist = require('plist')
const uuid = require('uuid')

const { getColor } = require('../util')

module.exports = function(vscodeTheme) {
  const plistStr = render(vscodeTheme)
  return plist.build(plist.parse(plistStr))
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
                getColor(vscodeTheme.colors, ['editor.background'])
              )}
              ${createKeyStringPair(
                'caret',
                getColor(vscodeTheme.colors, [
                  'editorCursor.background',
                  'editor.foreground'
                ])
              )}
              ${createKeyStringPair(
                'foreground',
                getColor(vscodeTheme.colors, ['editor.foreground'])
              )}
              ${createKeyStringPair(
                'lineHighlight',
                getColor(vscodeTheme.colors, ['editor.lineHighlightBackground'])
              )}
              ${createKeyStringPair(
                'selection',
                getColor(vscodeTheme.colors, ['editor.selectionBackground'])
              )}
            </dict>
          </dict>
           ${addGitGutter(vscodeTheme.colors)}
           ${convertTokenColors(vscodeTheme.tokenColors).join('\n')}
        </array>
     ${createKeyStringPair('uuid', uuid.v4())}
     ${createKeyStringPair('colorSpaceName', 'sRGB')}
     ${createKeyStringPair(
       'semanticClass',
       `theme.${vscodeTheme.type}.${vscodeTheme.name
         .replace(/\s+/g, '-')
         .toLowerCase()}`
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
        ${
          token.scope
            ? createKeyStringPair('scope', convertScope(token.scope))
            : ''
        }
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

function addGitGutter(colors) {
  return `
    <dict>
 			<key>name</key>
 			<string>GitGutter deleted</string>
 			<key>scope</key>
 			<string>markup.deleted.git_gutter</string>
 			<key>settings</key>
 			<dict>
 				<key>foreground</key>
 				<string>${getColor(colors, [
          'gitDecoration.deletedResourceForeground'
        ])}</string>
 			</dict>
 		</dict>
 		<dict>
 			<key>name</key>
 			<string>GitGutter inserted</string>
 			<key>scope</key>
 			<string>markup.inserted.git_gutter</string>
 			<key>settings</key>
 			<dict>
 				<key>foreground</key>
 				<string>${getColor(colors, ['gitDecoration.addedResourceForgeround'])}</string>
 			</dict>
 		</dict>
 		<dict>
 			<key>name</key>
 			<string>GitGutter changed</string>
 			<key>scope</key>
 			<string>markup.changed.git_gutter</string>
 			<key>settings</key>
 			<dict>
 				<key>foreground</key>
 				<string>${getColor(colors, [
          'gitDecoration.modifiedResourceForeground'
        ])}</string>
 			</dict>
 		</dict>
 		<dict>
 			<key>name</key>
 			<string>GitGutter untracked</string>
 			<key>scope</key>
 			<string>markup.untracked.git_gutter</string>
 			<key>settings</key>
 			<dict>
 				<key>foreground</key>
 				<string>${getColor(colors, [
          'gitDecoration.untrackedResourceForeground'
        ])}</string>
 			</dict>
 		</dict>
 		<dict>
 			<key>name</key>
 			<string>GitGutter ignored</string>
 			<key>scope</key>
 			<string>markup.ignored.git_gutter</string>
 			<key>settings</key>
 			<dict>
 				<key>foreground</key>
 				<string>${getColor(colors, [
          'gitDecoration.ignoredResourceForeground'
        ])}</string>
 			</dict>
 		</dict>`
}
