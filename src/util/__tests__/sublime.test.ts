import os from 'os'
import fs from 'fs'
import { getSublimeTextPackageDir } from '../sublime'

describe('util/sublime', () => {
  describe('getSublimeTextPackageDir', () => {
    it('should be defined', () => {
      expect(getSublimeTextPackageDir).toBeDefined()
    })

    it.each`
      mockOs      | username  | result
      ${'win32'}  | ${'code'} | ${'%APPDATA%/Roaming/Sublime Text 3/Packages/'}
      ${'darwin'} | ${'code'} | ${'/Users/code/Library/Application Support/Sublime Text 3/Packages/'}
      ${'linux'}  | ${'code'} | ${'/code/.config/sublime-text-3/Packages/'}
    `(
      'returns the correct path to Sublime Text 3 depending on the os',
      ({ mockOs, username, result }) => {
        const osSpy = jest
          .spyOn(os, 'platform')
          .mockImplementationOnce(() => mockOs)

        const usernameSpy = jest
          .spyOn(os, 'userInfo')
          .mockImplementationOnce(() => ({
            username,
            uid: 0,
            gid: 0,
            homedir: '',
            shell: ''
          }))

        const dirSpy = jest.spyOn(fs, 'existsSync').mockReturnValueOnce(true)

        expect(getSublimeTextPackageDir()).toEqual(result)
        expect(osSpy).toHaveBeenCalled()
        expect(usernameSpy).toHaveBeenCalled()
        expect(dirSpy).toHaveBeenCalled()
      }
    )
  })
})
