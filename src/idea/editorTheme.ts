import { CodeTheme, findEditorColor } from '../util/vscode'

module.exports = function createEditorTheme (
  vscodeTheme: CodeTheme,
  fileName: string
) {
  const getColor = findEditorColor(vscodeTheme.colors)
  return {
    name: vscodeTheme.name,
    dark: vscodeTheme.type === 'dark',
    author: vscodeTheme.author,
    editorScheme: `/themes/${fileName}.xml`,
    ui: {
      '*': {
        background: getColor(['sideBar.background']),
        foreground: getColor(['sideBar.foreground'])
      }
    }
  }
}
