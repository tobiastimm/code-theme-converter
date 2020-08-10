import { CodeTheme, findEditorColor } from '../util/vscode'

export function createEditorTheme (
  vscodeTheme: CodeTheme,
  fileName: string
): any {
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
