import { convertToIdea } from '../colorScheme'
import mockTheme from './data/test-theme.json'
import { CodeTheme } from 'src/util/vscode'

describe('colorScheme', () => {
  describe('convertToIdea', () => {
    it('should be defined', () => {
      expect(convertToIdea).toBeDefined()
    })

    it('should convert the theme', () => {
      expect(convertToIdea(mockTheme as CodeTheme, '1.0.0')).toMatchSnapshot()
    })
  })
})
