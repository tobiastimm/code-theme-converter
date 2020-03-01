import { convertToSublimeColorScheme } from '../colorScheme'
import { CodeTheme } from 'src/util/vscode'

describe('colorScheme', () => {
  describe('convertToSublimeColorScheme', () => {
    it('should be defined', () => {
      expect(convertToSublimeColorScheme).toBeDefined()
    })

    it('should create sublime plist', () => {
      const mockCodeTheme: CodeTheme = {
        name: 'Pandju',
        author: 'Tobias Timm',
        maintainers: ['Tobias Timm <tbs.timm@gmail.com>'],
        type: 'dark',
        colors: {
          'editor.lineHighlightBackground': '#67769630',
          'editor.selectionBackground': '#67769660',
          'editor.selectionHighlightBackground': '#ffffff10',
          'editorCursor.background': '#ffffffc9',
          'gitDecoration.modifiedResourceForeground': '#a188f1',
          'gitDecoration.addedResourceForeground': '#17f9d7',
          'gitDecoration.deletedResourceForeground': '#6F7899',
          'gitDecoration.ignoredResourceForeground': '#6F7899',
          'gitDecoration.untrackedResourceForeground': '#FF75B5',
          'gitDecoration.conflictingResourceForeground': '#FF75B5',
          'editor.background': '#171D2B',
          'editor.foreground': '#e6e6e6',
          'editorCursor.foreground': '#b6bcc4',
          'sideBar.background': '#0A101E',
          'sideBar.border': '#1b2432',
          'sideBar.foreground': '#7E8C99',
          'sideBarSectionHeader.foreground': '#c0c5cd'
        },
        tokenColors: [
          {
            settings: {
              foreground: '#6F7899'
            },
            name: 'Comments',
            scope: 'comment, punctuation.definition.comment'
          },
          {
            scope: [
              'punctuation.definition',
              'punctuation.definition.annotation',
              'punctuation.definition.heading',
              'punctuation.definition.list_item',
              'punctuation.definition.thematic-break',
              'punctuation.separator',
              'punctuation.terminator',
              'punctuation.accessor',
              'punctuation.section',
              'punctuation.support.type.property-name.begin',
              'punctuation.support.type.property-name.end'
            ],
            settings: {
              foreground: '#8892aa'
            }
          },
          {
            scope: ['punctuation.definition.blockquote'],
            settings: {
              foreground: '#ffffff13',
              background: '#ffffff13'
            }
          },
          {
            scope: ['meta.separator.thematic-break'],
            settings: {
              background: '#ffffff0d'
            }
          },
          {
            scope: ['string', 'markup.inline.raw.string'],
            settings: {
              foreground: '#17f9d7'
            }
          }
        ]
      }
      expect(
        convertToSublimeColorScheme(
          mockCodeTheme,
          'c793f1b7-f404-4166-8768-472123631119'
        )
      ).toMatchInlineSnapshot(`
        "<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?>
        <!DOCTYPE plist PUBLIC \\"-//Apple//DTD PLIST 1.0//EN\\" \\"http://www.apple.com/DTDs/PropertyList-1.0.dtd\\">
        <plist version=\\"1.0\\">
          <dict>
            <key>name</key>
            <string>Pandju</string>
            <key>settings</key>
            <array>
              <dict>
                <key>background</key>
                <string>#171D2B</string>
                <key>caret</key>
                <string>#ffffffc9</string>
                <key>foreground</key>
                <string>#e6e6e6</string>
                <key>lineHighlight</key>
                <string>#67769630</string>
                <key>selection</key>
                <string>#67769660</string>
              </dict>
              <dict>
                <key>name</key>
                <string>GitGutter deleted</string>
                <key>scope</key>
                <string>markup.deleted.git_gutter</string>
                <key>settings</key>
                <dict>
                  <key>foreground</key>
                  <string>#6F7899</string>
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
                  <string>#17f9d7</string>
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
                  <string>#a188f1</string>
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
                  <string>#FF75B5</string>
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
                  <string>#6F7899</string>
                </dict>
              </dict>
              <dict>
                <key>settings</key>
                <dict>
                  <key>foreground</key>
                  <string>#6F7899</string>
                </dict>
                <key>name</key>
                <string>Comments</string>
                <key>scope</key>
                <string>comment, punctuation.definition.comment</string>
              </dict>
              <dict>
                <key>scope</key>
                <array>
                  <string>punctuation.definition</string>
                  <string>punctuation.definition.annotation</string>
                  <string>punctuation.definition.heading</string>
                  <string>punctuation.definition.list_item</string>
                  <string>punctuation.definition.thematic-break</string>
                  <string>punctuation.separator</string>
                  <string>punctuation.terminator</string>
                  <string>punctuation.accessor</string>
                  <string>punctuation.section</string>
                  <string>punctuation.support.type.property-name.begin</string>
                  <string>punctuation.support.type.property-name.end</string>
                </array>
                <key>settings</key>
                <dict>
                  <key>foreground</key>
                  <string>#8892aa</string>
                </dict>
              </dict>
              <dict>
                <key>scope</key>
                <array>
                  <string>punctuation.definition.blockquote</string>
                </array>
                <key>settings</key>
                <dict>
                  <key>foreground</key>
                  <string>#ffffff13</string>
                  <key>background</key>
                  <string>#ffffff13</string>
                </dict>
              </dict>
              <dict>
                <key>scope</key>
                <array>
                  <string>meta.separator.thematic-break</string>
                </array>
                <key>settings</key>
                <dict>
                  <key>background</key>
                  <string>#ffffff0d</string>
                </dict>
              </dict>
              <dict>
                <key>scope</key>
                <array>
                  <string>string</string>
                  <string>markup.inline.raw.string</string>
                </array>
                <key>settings</key>
                <dict>
                  <key>foreground</key>
                  <string>#17f9d7</string>
                </dict>
              </dict>
            </array>
            <key>uuid</key>
            <string>c793f1b7-f404-4166-8768-472123631119</string>
            <key>colorSpaceName</key>
            <string>sRGB</string>
            <key>semanticClass</key>
            <string>theme.dark.pandju</string>
            <key>author</key>
            <string>Tobias Timm</string>
            <key>comment</key>
            <string/>
          </dict>
        </plist>"
      `)
    })
  })
})
