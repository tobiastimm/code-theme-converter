import { CodeTheme } from 'src/util/vscode'
import { createAdaptiveTheme } from '../uiTheme'
import mockTheme from './__fixtures__/test-theme.json'

describe('uiTheme', () => {
  describe('createAdaptiveTheme', () => {
    it('should be defined', () => {
      expect(createAdaptiveTheme(mockTheme as CodeTheme)).toBeDefined()
    })
    it('should create an adaptive theme', () => {
      expect(createAdaptiveTheme(mockTheme as CodeTheme)).toMatchSnapshot()
    })
  })
})
