import { SublimeColorScheme } from '../types/sublime'
import { CodeTheme, findEditorColor } from '../util/vscode'

export function toSublimeColorScheme (
  vscodeTheme: CodeTheme
): SublimeColorScheme {
  const { name, author = '', colors } = vscodeTheme

  const findEditorColorForField = findEditorColor(colors)

  return {
    name,
    author,
    globals: {
      background: findEditorColorForField(['editor.background']),
      foreground: findEditorColorForField(['editor.foreground']),
      caret: findEditorColorForField([
        'editorCursor.background',
        'editor.foreground'
      ]),
      block_caret: findEditorColorForField([
        'editorCursor.background',
        'editor.foreground'
      ]),
      line_highlight: findEditorColorForField([
        'editor.lineHighlightBackground'
      ]),
      misspelling: findEditorColorForField(['editorError.foreground']),
      fold_marker: findEditorColorForField(['list.highlightForeground']),
      accent: findEditorColorForField(['list.highlightForeground']),
      gutter: findEditorColorForField(['editorGutter.background'])
    },
    variables: {},
    rules: []
  }
}
