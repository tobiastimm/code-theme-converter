const { createTmpDir } = require('./util')

module.exports = async function fetchRepo (url) {
  const path = require('path')
  const download = require('download-git-repo')
  const tmpRootDir = await createTmpDir()
  const tmpRepoDir = path.join(tmpRootDir, 'repo')

  return new Promise((resolve, reject) => {
    download(`direct:${url}`, tmpRepoDir, { clone: true }, err => {
      if (err) return reject(err)
      resolve({
        root: tmpRootDir,
        repo: tmpRepoDir
      })
    })
  })
}
