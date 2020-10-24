const toNumber = (r: number) => (v: string) => parseInt(v, r)

const match = (m: RegExp) => (str: string) => str.match(m)

const splitChannels = match(/.{2}/g)

const fromHex = toNumber(16)

const toPercentage = (v: string): number => ((fromHex(v) / 255) * 1000) / 1000

export function hex2Rgb (hex: string): number[] {
  return (
    hex
      .replace(
        /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
        (_m, r: string, g: string, b: string) => '#' + r + r + g + g + b + b
      )
      .substring(1)
      .match(/.{2}/g)
      ?.map(x => parseInt(x, 16)) ?? [0, 0, 0]
  )
}

export function hex2Rgba (hex: string): number[] {
  const num = parseInt(hex.slice(1), 16)
  return [(num >> 16) & 255, (num >> 8) & 255, num & 255, (num >> 24) & 255]
}

export function getAlphaFromHex (hex: string): number | undefined {
  return hex2Rgba(hex).pop()
}

export function removeHashFromHex (hex: string): string {
  return hex.includes('#') ? hex.substr(1) : hex
}

export function eightDigitHex2Rgba (hex: string): number[] {
  const hashless = removeHashFromHex(hex)
  const c = splitChannels(hashless) ?? []
  const alpha = c[3] != null ? toPercentage(c[3]) : 1.0
  return [...c.slice(0, 3).map(fromHex), alpha]
}
