import plist, { PlistObject, PlistArray } from 'plist'
import uuid from 'uuid'
import {
  CodeTheme,
  findEditorColor,
  EditorColors,
  TokenColor,
  findTokenColorForScope
} from '../util/vscode'

export function convertToSublimeColorScheme (
  vscodeTheme: CodeTheme,
  id?: string
): any {
  const { name, author = '', type, colors, tokenColors } = vscodeTheme

  const findEditorColorForFields = findEditorColor(colors)

  const sublimePlist: PlistObject = {
    name: vscodeTheme.name,
    settings: [
      {
        settings: {
          accent: findEditorColorForFields(['list.highlightForeground']),
          background: findEditorColorForFields(['editor.background']),
          caret: findEditorColorForFields([
            'editorCursor.background',
            'editor.foreground'
          ]),
          foreground: findEditorColorForFields(['editor.foreground']),
          lineHighlight: findEditorColorForFields([
            'editor.lineHighlightBackground'
          ]),
          selection: findEditorColorForFields(['editor.selectionBackground']),
          activeGuide: findEditorColorForFields([
            'editorIndentGuide.background'
          ]),
          findHighlight: findEditorColorForFields([
            'editor.findMatchHighlightBackground'
          ]),
          misspelling: findEditorColorForFields(['editorError.foreground'])
        }
      },
      ...generateGitGutterConfig(colors, tokenColors),
      ...tokenColors.map(convertTokenColorScopeForSublime)
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

function generateGitGutterConfig (
  colors: EditorColors,
  tokenColors: TokenColor[]
): GitGutterConfig {
  const findEditorColorForFields = findEditorColor(colors)
  return [
    {
      name: 'GitGutter deleted',
      scope: 'markup.deleted.git_gutter',
      settings: {
        foreground: findEditorColorForFields([
          'gitDecoration.deletedResourceForeground'
        ])
      }
    },
    {
      name: 'GitGutter inserted',
      scope: 'markup.inserted.git_gutter',
      settings: {
        foreground: findEditorColorForFields([
          'gitDecoration.addedResourceForeground'
        ])
      }
    },
    {
      name: 'GitGutter changed',
      scope: 'markup.changed.git_gutter',
      settings: {
        foreground: findEditorColorForFields([
          'gitDecoration.modifiedResourceForeground'
        ])
      }
    },
    {
      name: 'GitGutter untracked',
      scope: 'markup.untracked.git_gutter',
      settings: {
        foreground: findEditorColorForFields([
          'gitDecoration.untrackedResourceForeground'
        ])
      }
    },
    {
      name: 'GitGutter ignored',
      scope: 'markup.ignored.git_gutter',
      settings: {
        foreground: findEditorColorForFields([
          'gitDecoration.ignoredResourceForeground'
        ])
      }
    },
    {
      name: 'GitGutter comment',
      scope: 'comment.line.annotation.git_gutter',
      settings: {
        foreground: findTokenColorForScope(tokenColors)(
          'comment, punctuation.definition.comment'
        )
      }
    }
  ]
}

function convertTokenColorScopeForSublime (tokenColor: TokenColor): TokenColor {
  if (tokenColor.scope == null || tokenColor.scope === '') {
    return { ...tokenColor }
  }

  return {
    ...tokenColor,
    scope: Array.isArray(tokenColor.scope)
      ? tokenColor.scope.join(', ')
      : tokenColor.scope
  }
}
