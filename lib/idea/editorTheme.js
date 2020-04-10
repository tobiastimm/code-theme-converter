const { getColor } = require('../util')

module.exports = function (vscodeTheme, fileName) {
  const editorTheme = {
    name: vscodeTheme.name,
    dark: vscodeTheme.type === 'dark',
    author: vscodeTheme.author,
    editorScheme: `/themes/${fileName}.xml`,
    ui: {
      '*': {
        background: getColor(vscodeTheme.colors, ['sideBar.background']),
        foreground: getColor(vscodeTheme.colors, ['sideBar.foreground'])
      }
    }
  }
  return JSON.stringify(editorTheme)
}
