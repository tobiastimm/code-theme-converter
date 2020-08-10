import MockDate from 'mockdate'
import { convertToIdea } from '../colorScheme'
import mockTheme from './data/test-theme.json'
import { CodeTheme } from '../../util/vscode'

describe('colorScheme', () => {
  describe('convertToIdea', () => {
    it('should be defined', () => {
      expect(convertToIdea).toBeDefined()
    })

    it('should convert the theme', () => {
      MockDate.set(1597066014849)

      expect(convertToIdea(mockTheme as CodeTheme, '1.0.0')).toMatchSnapshot()
    })
  })
})
