export function compose (...fns: Function[]) {
  return function (...x: any) {
    return fns.reduceRight((v, f) => f(v), x)
  }
}
