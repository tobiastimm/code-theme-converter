import { SublimeColorScheme, SublimeColorSchemeRule } from '../types/sublime'
import { CodeTheme, findEditorColor, TokenColor } from '../util/vscode'

function fromTokenColorToSublimeRule (
  tokenColor: TokenColor
): SublimeColorSchemeRule {
  const mapFontStyle = (
    fontStyle: 'italic' | 'normal' | 'bold' | 'bold italic' | undefined
  ): 'bold' | 'italic' | 'bold italic' | 0 => {
    switch (fontStyle) {
      case undefined:
      case 'normal':
        return 0
      default:
        return fontStyle
    }
  }

  return {
    name: tokenColor.name,
    foreground: tokenColor.settings?.foreground,
    background: tokenColor.settings?.background,
    font_style: mapFontStyle(tokenColor.settings?.fontStyle),
    scope: Array.isArray(tokenColor.scope)
      ? tokenColor.scope.join(', ')
      : tokenColor.scope
  }
}

export function toSublimeColorScheme (
  vscodeTheme: CodeTheme
): SublimeColorScheme {
  const { name, author = '', colors, tokenColors } = vscodeTheme

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
      gutter: findEditorColorForField(['editorGutter.background']),
      gutter_foreground: findEditorColorForField([
        'editorLineNumber.foreground'
      ]),
      line_diff_added: findEditorColorForField([
        'diffEditor.insertedTextBackground',
        'gitDecoration.addedResourceForeground'
      ]),
      line_diff_modified: findEditorColorForField([
        'diffEditor.modifiedTextBackground',
        'gitDecoration.modifiedResourceForeground'
      ]),
      line_diff_deleted: findEditorColorForField([
        'diffEditor.removedTextBackground',
        'gitDecoration.deletedResourceForeground'
      ]),
      selection: findEditorColorForField(['editor.selectionBackground']),
      inactive_selection: findEditorColorForField([
        'list.inactiveSelectionBackground'
      ]),
      inactive_selection_foreground: findEditorColorForField([
        'list.inactiveSelectionForeground'
      ]),
      highlight: findEditorColorForField([
        'editor.findMatchHighlightBackground',
        'peekViewEditor.matchHighlightBorder'
      ]),
      find_highlight: findEditorColorForField([
        'editor.findMatchHighlightBackground',
        'peekViewEditor.matchHighlightBorder'
      ]),
      find_highlight_foreground: findEditorColorForField([
        'list.highlightForeground'
      ]),
      guide: findEditorColorForField(['editorIndentGuide.background']),
      active_guide: findEditorColorForField([
        'breadcrumb.activeSelectionForeground'
      ]),
      stack_guide: findEditorColorForField(['breadcrumb.foreground']),
      brackets_foreground: findEditorColorForField(['selection.background']),
      tags_foreground: findEditorColorForField(['selection.background']),
      shadow: findEditorColorForField(['widget.shadow', 'scrollbar.shadow'])
    },
    variables: {
      black: findEditorColorForField(['terminal.ansiBlack']),
      white: findEditorColorForField(['terminal.ansiWhite']),
      red: findEditorColorForField(['terminal.ansiRed']),
      green: findEditorColorForField(['terminal.ansiGreen']),
      yellow: findEditorColorForField(['terminal.ansiYellow']),
      orange: findEditorColorForField(['terminal.ansiYellow']),
      blue: findEditorColorForField(['terminal.ansiBlue']),
      magenta: findEditorColorForField(['terminal.ansiMagenta']),
      cyan: findEditorColorForField(['terminal.ansiCyan'])
    },
    rules: tokenColors.map(fromTokenColorToSublimeRule)
  }
}
