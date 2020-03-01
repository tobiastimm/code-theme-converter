import { hex2Rgb, hex2Rgba, getAlphaFromHex } from '../color'

describe('util/color', () => {
  describe('hex2Rgb', () => {
    it('should be defined', () => {
      expect(hex2Rgb).toBeDefined()
    })

    it.each`
      hex            | result
      ${'#ffffff'}   | ${[255, 255, 255]}
      ${'#fff'}      | ${[255, 255, 255]}
      ${'#ff'}       | ${[255]}
      ${'#ffff'}     | ${[255, 255]}
      ${'#ffffffff'} | ${[255, 255, 255, 255]}
      ${''}          | ${undefined}
      ${'234235'}    | ${[52, 35]}
    `('should convert a hex string to an RGB array', ({ hex, result }) => {
      expect(hex2Rgb(hex)).toEqual(result)
    })
  })

  describe('hex2Rgba', () => {
    it('should be defined', () => {
      expect(hex2Rgba).toBeDefined()
    })

    it.each`
      hex            | result
      ${'#ffffff'}   | ${[255, 255, 255, 0]}
      ${'#ffffffff'} | ${[255, 255, 255, 255]}
      ${''}          | ${[0, 0, 0, 0]}
    `('should convert a hex string to an RGBA array', ({ hex, result }) => {
      expect(hex2Rgba(hex)).toEqual(result)
    })
  })

  describe('getAlphaFromHex', () => {
    it('should be defined', () => {
      expect(getAlphaFromHex).toBeDefined()
    })

    it.each`
      hex            | result
      ${'#ffffff'}   | ${0}
      ${'#ffffffff'} | ${255}
      ${''}          | ${0}
    `('should convert a hex string to an RGBA array', ({ hex, result }) => {
      expect(getAlphaFromHex(hex)).toEqual(result)
    })
  })
})
