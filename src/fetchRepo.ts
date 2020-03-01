import path from 'path'
import download from 'download-git-repo'
import { createTempDir } from './util/fs'

export interface ConverterRepo {
  root: string
  repo: string
}

export async function fetchRepo(url: string): Promise<ConverterRepo> {
  const tmpRootDir = await createTempDir()
  const tmpRepoDir = path.join(tmpRootDir, 'repo')

  return new Promise((resolve, reject) => {
    download(`direct:${url}`, tmpRepoDir, { clone: true }, err => {
      // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
      if (err) return reject(err)
      resolve({
        root: tmpRootDir,
        repo: tmpRepoDir
      })
    })
  })
}
