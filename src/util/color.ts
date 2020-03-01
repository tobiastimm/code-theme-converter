export function hex2Rgb(hex: string): number[] | undefined {
  return hex
    .replace(
      /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
      (_m, r: string, g: string, b: string) => '#' + r + r + g + g + b + b
    )
    .substring(1)
    .match(/.{2}/g)
    ?.map(x => parseInt(x, 16))
}

export function hex2Rgba(hex: string): number[] {
  const num = parseInt(hex.slice(1), 16)
  return [(num >> 16) & 255, (num >> 8) & 255, num & 255, (num >> 24) & 255]
}

export function getAlphaFromHex(hex: string): number | undefined {
  return hex2Rgba(hex).pop()
}
