import mockFs from 'mock-fs'
import {
  findEditorColor,
  findTokenColorForScope,
  readCodeTheme,
  readCodeThemePackage
} from '../vscode'

describe('util/vscode', () => {
  describe('findEditorColor', () => {
    it('should be defined', () => {
      expect(findEditorColor).toBeDefined()
    })

    it('should find the requested color', () => {
      const mockEditorColors = {
        'activityBar.background': '#0A101E',
        'activityBar.foreground': '#D7DAE0',
        'activityBarBadge.background': '#a188f1',
        'activityBarBadge.foreground': '#F8FAFD'
      }

      expect(
        findEditorColor(mockEditorColors, 'activityBarBadge.background')
      ).toEqual(mockEditorColors['activityBarBadge.background'])
    })

    it('should return an empty string, if the color is not defined', () => {
      expect(findEditorColor({}, 'activityBar')).toEqual('')
    })

    it('should return an empty string, if the function is executed without parameters', () => {
      expect(findEditorColor()).toEqual('')
    })
  })

  describe('findTokenColorForScope', () => {
    it('should be defined', () => {
      expect(findTokenColorForScope).toBeDefined()
    })

    it('should return the TokenColor for that given scope', () => {
      const mockTokenColors = [
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
        }
      ]
      expect(
        findTokenColorForScope(mockTokenColors, 'punctuation.section')
      ).toEqual(mockTokenColors[1])
    })

    it('should return null, if there is no TokenColor for the given scope', () => {
      expect(
        findTokenColorForScope(
          [
            {
              settings: {
                foreground: '#6F7899'
              },
              name: 'Comments',
              scope: 'comment, punctuation.definition.comment'
            }
          ],
          'activityBar'
        )
      ).toEqual(null)
    })

    it('should return null, if there is a TokenColor without a scope', () => {
      expect(
        findTokenColorForScope(
          [
            {
              settings: {
                foreground: '#6F7899'
              },
              name: 'Comments'
            }
          ],
          'activityBar'
        )
      ).toEqual(null)
    })

    it('should return null, if the function is called without parameters', () => {
      expect(findTokenColorForScope()).toEqual(null)
    })
  })

  describe('readCodeTheme', () => {
    afterEach(() => mockFs.restore())

    it('should be defined', () => {
      expect(readCodeTheme).toBeDefined()
    })

    it('should read and return the json from the theme', async () => {
      const mockThemeDir = '/code/my-awesome-theme'
      const mockThemeName = 'awesome-theme.json'
      mockFs({
        [mockThemeDir]: {
          [mockThemeName]: `{
            name: 'Awesome Theme',
            author: 'Test'
          }`
        }
      })
      expect(await readCodeTheme(mockThemeDir, mockThemeName)).toEqual({
        author: 'Test',
        name: 'Awesome Theme'
      })
    })

    it('should throw an error, if the theme does not exist', async () => {
      expect.assertions(1)
      const mockThemeDir = 'e'
      const mockThemeName = 'awesome-theme.json'
      mockFs({})
      return expect(
        readCodeTheme(mockThemeDir, mockThemeName)
      ).rejects.toThrowError()
    })
  })

  describe('readCodeThemePackage', () => {
    afterEach(() => mockFs.restore())

    it('should be defined', () => {
      expect(readCodeThemePackage).toBeDefined()
    })

    it('should read and return the package.json from the theme', async () => {
      const mockThemeDir = '/code/my-awesome-theme'
      mockFs({
        [mockThemeDir]: {
          'package.json': `{
              "name": "pandju",
              "displayName": "Pandju",
              "description": "Raijū meets panda",
              "contributes": {
                "themes": [
                  {
                    "label": "Pandju",
                    "uiTheme": "vs-dark",
                    "path": "./themes/pandju.json"
                  },
                  {
                    "label": "Pandju - No italics",
                    "uiTheme": "vs-dark",
                    "path": "./themes/pandju-noitalic.json"
                  }
                ]
              }
          }`
        }
      })
      expect(await readCodeThemePackage(mockThemeDir)).toEqual({
        name: 'pandju',
        displayName: 'Pandju',
        description: 'Raijū meets panda',
        contributes: {
          themes: [
            {
              label: 'Pandju',
              uiTheme: 'vs-dark',
              path: './themes/pandju.json'
            },
            {
              label: 'Pandju - No italics',
              uiTheme: 'vs-dark',
              path: './themes/pandju-noitalic.json'
            }
          ]
        }
      })
    })

    it('should throw an error, if the theme does not exist', async () => {
      expect.assertions(1)
      const mockThemeDir = 'e'
      mockFs({})
      return expect(readCodeThemePackage(mockThemeDir)).rejects.toThrowError()
    })
  })
})
