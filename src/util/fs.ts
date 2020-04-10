import fs from 'fs-extra'
import os from 'os'
import path from 'path'

export function createTempDir(): string {
  const dir = path.join(os.tmpdir(), 'code-theme-converter')
  try {
    fs.removeSync(dir)
  } catch (error) {
    console.error("Couldn't remove directory")
  }
  return dir
}
