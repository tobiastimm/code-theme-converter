import { CodeTheme } from 'src/util/vscode'
import { createAdaptiveTheme } from '../uiTheme'
import mockTheme from './__fixtures__/test-theme.json'

describe('uiTheme', () => {
  describe('createAdaptiveTheme', () => {
    it('should be defined', () => {
      expect(createAdaptiveTheme(mockTheme as CodeTheme)).toBeDefined()
    })
    it('should create an adaptive theme', () => {
      expect(createAdaptiveTheme(mockTheme as CodeTheme)).toEqual({
        extends: 'Adaptive.sublime-theme',
        rules: [
          { class: 'title_bar', fg: ['background', 157, 165, 180, 0] },
          {
            attributes: ['file_dark'],
            bg: ['background', 255, 255, 255, 0.15],
            class: 'title_bar',
            style: 'dark'
          },
          {
            attributes: ['file_medium_dark'],
            class: 'title_bar',
            style: 'dark'
          },
          {
            attributes: ['file_light'],
            bg: ['background', 0, 0, 0, 0.1],
            class: 'title_bar',
            fg: ['background', 0, 0, 0, 0.7],
            style: 'light'
          },
          {
            class: 'sidebar_container',
            content_margin: 0,
            'layer0.opacity': 1,
            'layer0.tint': ['background', 22, 25, 34, 0]
          }
        ],
        variables: {
          font_face: 'system',
          font_size: 12,
          font_size_lg: 13,
          font_size_sm: 11
        }
      })
    })
  })
})
