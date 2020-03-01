import plist, { PlistObject, PlistArray } from 'plist'
import uuid from 'uuid'
import {
  CodeTheme,
  findEditorColor,
  EditorColors,
  TokenColor
} from '../util/vscode'

export function convertToSublimeColorScheme(
  vscodeTheme: CodeTheme,
  id?: string
): any {
  const { name, author, type, colors, tokenColors } = vscodeTheme
  const sublimePlist: PlistObject = {
    name: vscodeTheme.name,
    settings: [
      {
        background: findEditorColor(colors, 'editor.background'),
        caret: findEditorColor(
          colors,
          'editorCursor.background',
          'editor.foreground'
        ),
        foreground: findEditorColor(colors, 'editor.foreground'),
        lineHighlight: findEditorColor(
          colors,
          'editor.lineHighlightBackground'
        ),
        selection: findEditorColor(colors, 'editor.selectionBackground')
      },
      ...generateGitGutterConfig(colors),
      ...tokenColors
    ] as PlistArray,
    uuid: id ?? uuid.v4(),
    colorSpaceName: 'sRGB',
    semanticClass: `theme.${type}.${name.replace(/\s+/g, '-').toLowerCase()}`,
    author,
    comment: ''
  }

  return plist.build(sublimePlist)
}

type GitGutterConfig = TokenColor[]

function generateGitGutterConfig(colors: EditorColors): GitGutterConfig {
  return [
    {
      name: 'GitGutter deleted',
      scope: 'markup.deleted.git_gutter',
      settings: {
        foreground: findEditorColor(
          colors,
          'gitDecoration.deletedResourceForeground'
        )
      }
    },
    {
      name: 'GitGutter inserted',
      scope: 'markup.inserted.git_gutter',
      settings: {
        foreground: findEditorColor(
          colors,
          'gitDecoration.addedResourceForeground'
        )
      }
    },
    {
      name: 'GitGutter changed',
      scope: 'markup.changed.git_gutter',
      settings: {
        foreground: findEditorColor(
          colors,
          'gitDecoration.modifiedResourceForeground'
        )
      }
    },
    {
      name: 'GitGutter untracked',
      scope: 'markup.untracked.git_gutter',
      settings: {
        foreground: findEditorColor(
          colors,
          'gitDecoration.untrackedResourceForeground'
        )
      }
    },
    {
      name: 'GitGutter ignored',
      scope: 'markup.ignored.git_gutter',
      settings: {
        foreground: findEditorColor(
          colors,
          'gitDecoration.ignoredResourceForeground'
        )
      }
    }
  ]
}
