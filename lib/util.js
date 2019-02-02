const os = require('os')
const path = require('path')
const fs = require('fs-extra')

exports.createTmpDir = function(dirName = 'vsc2subl') {
  return new Promise((resolve, reject) => {
    const tmpDir = path.join(os.tmpdir(), dirName)
    fs.remove(tmpDir)
      .then(() => resolve(tmpDir))
      .catch(err => reject(err))
  })
}
