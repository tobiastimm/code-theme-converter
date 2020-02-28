import fs from 'fs-extra'
import { createTempDir } from '../fs'

describe('util', () => {
  describe('createTempDir', () => {
    it('should be defined', () => {
      expect(createTempDir).toBeDefined()
    })

    it('should return the path to a temp directory', () => {
      const fsSpy = jest.spyOn(fs, 'removeSync').mockImplementation(jest.fn)
      expect(createTempDir()).toContain('code-theme-converter')
      expect(fsSpy).toHaveBeenCalled()
    })
  })
})
