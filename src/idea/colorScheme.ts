import { parse } from 'js2xmlparser'
import { compose, prop, head, keys, converge, identity } from 'ramda'
import {
  findEditorColor,
  CodeTheme,
  findTokenColorForScope
} from '../util/vscode'
import {
  IdeaColorNames,
  IdeaColor,
  IdeaAttributeNames,
  IdeaAttribute
} from '../types/idea'
import { removeHashFromHex } from '../util/color'

interface MetaInfo {
  created: string
  ide: 'idea'
  ideVersion: '2019.1.0.0'
}

export interface IdeaColorScheme {
  name: string
  version: string
  parentScheme?: string
  metaInfo: MetaInfo
  colors: {
    [key in IdeaColorNames]?: IdeaColor
  }
  attributes: {
    [key in IdeaAttributeNames]?: IdeaAttribute
  }
}

function generateIdeaColorScheme (
  vscodeTheme: CodeTheme,
  version: string
): IdeaColorScheme {
  const { name, colors, tokenColors } = vscodeTheme
  const findEditorColorForFields = compose(
    removeHashFromHex,
    findEditorColor(colors)
  )
  const findTokenColorForFields = compose(
    removeHashFromHex,
    // @ts-ignore
    prop('foreground'),
    prop('settings'),
    findTokenColorForScope(tokenColors)
  )

  return {
    name,
    metaInfo: {
      created: new Date().toISOString(),
      ide: 'idea',
      ideVersion: '2019.1.0.0'
    },
    version,
    colors: {
      ADDED_LINES_COLOR: findEditorColorForFields([
        'editorGutter.addedBackground'
      ]),
      ANNOTATIONS_COLOR: findTokenColorForFields('variable.function'),
      CARET_COLOR: findEditorColorForFields([
        'editorCursor.background',
        'editor.foreground'
      ]),
      CONSOLE_BACKGROUND_KEY: findEditorColorForFields([
        'panel.background',
        'sideBar.background'
      ]),
      DELETED_LINES_COLOR: findEditorColorForFields([
        'editorGutter.deletedBackground'
      ]),
      DIFF_SEPARATORS_BACKGROUND: findEditorColorForFields([
        'panel.background'
      ]),
      DOCUMENTATION_COLOR: findTokenColorForFields('comment'),
      ERROR_HINT: findEditorColorForFields(['editorError.foreground']),
      FILESTATUS_ADDED: findEditorColorForFields([
        'gitDecoration.addedResourceForeground'
      ]),
      FILESTATUS_COPIED: findEditorColorForFields([
        'gitDecoration.modifiedResourceForeground'
      ]),
      FILESTATUS_DELETED: findEditorColorForFields([
        'gitDecoration.deletedResourceForeground'
      ]),
      FILESTATUS_IDEA_FILESTATUS_DELETED_FROM_FILE_SYSTEM: findEditorColorForFields(
        ['gitDecoration.deletedResourceForeground']
      ),
      FILESTATUS_IDEA_FILESTATUS_IGNORED: findEditorColorForFields([
        'gitDecoration.untrackedResourceForeground'
      ]),
      FILESTATUS_MERGED: findEditorColorForFields([
        'gitDecoration.modifiedResourceForeground'
      ]),
      FILESTATUS_MODIFIED: findEditorColorForFields([
        'gitDecoration.modifiedResourceForeground'
      ]),
      FILESTATUS_RENAMED: findEditorColorForFields([
        'gitDecoration.modifiedResourceForeground'
      ]),
      FILESTATUS_UNKNOWN: findEditorColorForFields([
        'gitDecoration.untrackedResourceForeground'
      ]),
      FILESTATUS_ADDEDOUTSIDE: findEditorColorForFields([
        'gitDecoration.addedResourceForeground'
      ]),
      FOLDED_TEXT_BORDER_COLOR: findEditorColorForFields([
        'sideBar.foreground'
      ]),
      GUTTER_BACKGROUND: findEditorColorForFields(['editorGutter.background']),
      INDENT_GUIDE: findEditorColorForFields(['editorIndentGuide.background']),
      INFORMATION_HINT: findEditorColorForFields([
        'editorOverviewRuler.infoForeground'
      ]),
      LINE_NUMBERS_COLOR: findEditorColorForFields([
        'editorLineNumber.foreground'
      ]),
      LINE_NUMBER_ON_CARET_ROW_COLOR: findEditorColorForFields([
        'editorLineNumber.foreground'
      ]),
      METHOD_SEPARATORS_COLOR: findEditorColorForFields(['editor.foreground']),
      MODIFIED_LINES_COLOR: findEditorColorForFields([
        'editorOverviewRuler.modifiedForeground'
      ]),
      NOTIFICATION_BACKGROUND: findEditorColorForFields([
        'notifications.background'
      ]),
      QUESTION_HINT: findEditorColorForFields([
        'editorOverviewRuler.infoForeground'
      ]),
      RECENT_LOCATIONS_SELECTION: findEditorColorForFields([
        'editorOverviewRuler.infoForeground'
      ]),
      RECURSIVE_CALL_ATTRIBUTES: findEditorColorForFields([
        'editorOverviewRuler.infoForeground'
      ]),
      RIGHT_MARGIN_COLOR: findEditorColorForFields([
        'editorOverviewRuler.infoForeground'
      ]),
      SELECTED_INDENT_GUIDE: findEditorColorForFields([
        'editor.lineHighlightBackground'
      ]),
      SELECTED_TEARLINE_COLOR: findEditorColorForFields([
        'editor.lineHighlightBackground'
      ]),
      SEPARATOR_BELOW_COLOR: findEditorColorForFields([
        'editorWhitespace.foreground'
      ]),
      SOFT_WRAP_SIGN_COLOR: findEditorColorForFields([
        'editorWhitespace.foreground'
      ]),
      TEARLINE_COLOR: findEditorColorForFields(['editor.foreground']),
      VCS_ANNOTATIONS_COLOR_1: findEditorColorForFields([
        'gitDecoration.addedResourceForgeround'
      ]),
      VCS_ANNOTATIONS_COLOR_2: findEditorColorForFields([
        'gitDecoration.modifiedResourceForeground'
      ]),
      VCS_ANNOTATIONS_COLOR_3: findEditorColorForFields([
        'gitDecoration.deletedResourceForeground'
      ]),
      VCS_ANNOTATIONS_COLOR_4: findEditorColorForFields([
        'gitDecoration.untrackedResourceForeground'
      ]),
      VCS_ANNOTATIONS_COLOR_5: findEditorColorForFields([
        'gitDecoration.conflictingResourceForeground'
      ]),
      VISUAL_INDENT_GUIDE: findEditorColorForFields([
        'editorWhitespace.foreground'
      ]),
      WHITESPACES_MODIFIED_LINES_COLOR: findEditorColorForFields([
        'gitDecoration.modifiedResourceForeground'
      ]),
      WHITESPACES: findEditorColorForFields(['editorWhitespace.foreground'])
    },
    attributes: {
      ANNOTATION_ATTRIBUTE_NAME_ATTRIBUTES: {
        value: ''
      },
      ANNOTATION_NAME_ATTRIBUTES: {
        attributes: {
          baseAttributes: IdeaAttributeNames.DEFAULT_METADATA
        }
      },
      BAD_CHARACTER: {
        value: [
          {
            EFFECT_COLOR: findTokenColorForFields('markup.error')
          },
          { EFFECT_TYPE: 2 }
        ]
      },
      BOOKMARKS_ATTRIBUTES: {
        value: [{ ERROR_STRIPE_COLOR: findTokenColorForFields('invalid') }]
      },
      BREADCRUMBS_CURRENT: {
        value: [
          {
            FOREGROUND: findEditorColorForFields([
              'breadcrumb.activeSelectionForeground',
              'editor.foreground'
            ])
          }
        ]
      },
      BREADCRUMBS_DEFAULT: {
        value: [
          {
            FOREGROUND: findEditorColorForFields([
              'breadcrumb.foreground',
              'editor.foreground'
            ])
          }
        ]
      },
      BREADCRUMBS_HOVERED: {
        value: [
          {
            FOREGROUND: findEditorColorForFields([
              'breadcrumb.focusForeground',
              'editor.foreground'
            ])
          }
        ]
      },
      BREADCRUMBS_INACTIVE: {
        value: [
          {
            FOREGROUND: findEditorColorForFields([
              'breadcrumb.foreground',
              'editor.foreground'
            ])
          }
        ]
      },
      BREAKPOINT_ATTRIBUTES: {
        value: [
          {
            BACKGROUND: findTokenColorForFields('invalid')
          },
          {
            ERROR_STRIPE_COLOR: 'ffffff'
          }
        ]
      },
      CONSOLE_BLUE_BRIGHT_OUTPUT: {
        value: [
          {
            FOREGROUND: findEditorColorForFields(['terminal.ansiBrightBlue'])
          }
        ]
      },
      CONSOLE_BLUE_OUTPUT: {
        value: [
          {
            FOREGROUND: findEditorColorForFields(['terminal.ansiBlue'])
          }
        ]
      },
      CONSOLE_CYAN_BRIGHT_OUTPUT: {
        value: [
          {
            FOREGROUND: findEditorColorForFields(['terminal.ansiBrightCyan'])
          }
        ]
      },
      CONSOLE_CYAN_OUTPUT: {
        value: [
          {
            FOREGROUND: findEditorColorForFields(['terminal.ansiCyan'])
          }
        ]
      },
      CONSOLE_ERROR_OUTPUT: {
        value: [
          {
            FOREGROUND: findEditorColorForFields(['editorError.foreground'])
          }
        ]
      },
      CONSOLE_GREEN_BRIGHT_OUTPUT: {
        value: [
          {
            FOREGROUND: findEditorColorForFields(['terminal.ansiBrightGreen'])
          }
        ]
      },
      CONSOLE_GREEN_OUTPUT: {
        value: [
          {
            FOREGROUND: findEditorColorForFields(['terminal.ansiGreen'])
          }
        ]
      },
      CONSOLE_MAGENTA_BRIGHT_OUTPUT: {
        value: [
          {
            FOREGROUND: findEditorColorForFields(['terminal.ansiBrightMagenta'])
          }
        ]
      },
      CONSOLE_MAGENTA_OUTPUT: {
        value: [
          {
            FOREGROUND: findEditorColorForFields(['terminal.ansiMagenta'])
          }
        ]
      },
      CONSOLE_NORMAL_OUTPUT: {
        value: [
          {
            FOREGROUND: findEditorColorForFields(['terminal.foreground'])
          }
        ]
      },
      CONSOLE_RANGE_TO_EXECUTE: {
        value: [
          {
            EFFECT_COLOR: findEditorColorForFields(['terminal.ansiGreen'])
          }
        ]
      },
      CONSOLE_RED_BRIGHT_OUTPUT: {
        value: [
          {
            FOREGROUND: findEditorColorForFields(['terminal.ansiBrightRed'])
          }
        ]
      },
      CONSOLE_RED_OUTPUT: {
        value: [
          {
            FOREGROUND: findEditorColorForFields(['terminal.ansiRed'])
          }
        ]
      },
      CONSOLE_SYSTEM_OUTPUT: {
        value: [
          {
            FOREGROUND: findEditorColorForFields(['terminal.ansiYellow'])
          }
        ]
      },
      CONSOLE_USER_INPUT: {
        value: [
          {
            FOREGROUND: findEditorColorForFields(['terminal.foreground'])
          },
          {
            FONT_TYPE: 2
          }
        ]
      },
      CONSOLE_YELLOW_BRIGHT_OUTPUT: {
        value: [
          {
            FOREGROUND: findEditorColorForFields(['terminal.ansiBrightYellow'])
          }
        ]
      },
      CONSOLE_YELLOW_OUTPUT: {
        value: [
          {
            FOREGROUND: findEditorColorForFields(['terminal.ansiYellow'])
          }
        ]
      },
      'CSS.COLOR': {
        value: [
          {
            FOREGROUND: findTokenColorForFields(
              'support.type.custom-property.name'
            )
          }
        ]
      },
      'CSS.IMPORTANT': {
        attributes: {
          baseAttributes: IdeaAttributeNames.DEFAULT_KEYWORD
        }
      },
      'CSS.KEYWORD': {
        value: [
          {
            FOREGROUND: findTokenColorForFields('keyword.operator.word')
          }
        ]
      },
      'CSS.TAG_NAME': {
        value: [
          {
            FOREGROUND: findTokenColorForFields('support.type.property-name')
          }
        ]
      },
      'CSS.URL': {
        attributes: {
          baseAttributes: IdeaAttributeNames.HTML_ATTRIBUTE_VALUE
        }
      },
      CTRL_CLICKABLE: {
        value: [
          {
            FOREGROUND: findEditorColorForFields(['button.background'])
          },
          {
            EFFECT_COLOR: findEditorColorForFields(['button.background'])
          },
          {
            EFFECT_TYPE: 1
          }
        ]
      },
      CUSTOM_KEYWORD1_ATTRIBUTES: {
        value: [
          {
            FOREGROUND: findTokenColorForFields('entity.other.attribute-name')
          }
        ]
      },
      CUSTOM_KEYWORD2_ATTRIBUTES: {
        value: [
          {
            FOREGROUND: findTokenColorForFields(
              'entity.name.tag support.class.component'
            )
          }
        ]
      },
      CUSTOM_KEYWORD3_ATTRIBUTES: {
        value: [
          {
            FOREGROUND: findTokenColorForFields('support.variable')
          }
        ]
      },
      CUSTOM_KEYWORD4_ATTRIBUTES: {
        value: [
          {
            FOREGROUND: findTokenColorForFields('support.constant')
          }
        ]
      },
      CUSTOM_STRING_ATTRIBUTES: {
        attributes: {
          baseAttributes: IdeaAttributeNames.DEFAULT_STRING
        }
      },
      CUSTOM_VALID_STRING_ESCAPE_ATTRIBUTES: {
        attributes: {
          baseAttributes: IdeaAttributeNames.DEFAULT_VALID_STRING_ESCAPE
        }
      },
      DEBUGGER_INLINED_VALUES: {
        value: [
          {
            FOREGROUND: findTokenColorForFields('comment')
          },
          {
            FONT_TYPE: 2
          }
        ]
      },
      DEBUGGER_INLINED_VALUES_EXECUTION_LINE: {
        value: [
          {
            FOREGROUND: findEditorColorForFields([
              'editor.lineHighlightBackground'
            ])
          },
          {
            FONT_TYPE: 2
          }
        ]
      },
      DEBUGGER_INLINED_VALUES_MODIFIED: {
        value: [
          {
            FOREGROUND: findEditorColorForFields([
              'editorGutter.modifiedBackground'
            ])
          },
          {
            FONT_TYPE: 2
          }
        ]
      },
      DEFAULT_BLOCK_COMMENT: {
        value: [
          {
            FOREGROUND: findTokenColorForFields('comment')
          }
        ]
      },
      DEFAULT_CLASS_REFERENCE: {
        attributes: {
          baseAttributes: IdeaAttributeNames.DEFAULT_IDENTIFIER
        }
      },
      DEFAULT_COMMA: {
        value: [
          {
            FOREGROUND: findTokenColorForFields('punctuation.definition')
          },
          {
            FONT_TYPE: 1
          }
        ]
      },
      DEFAULT_CONSTANT: {
        value: [
          {
            FOREGROUND: findTokenColorForFields('support.constant')
          }
        ]
      },
      DEFAULT_DOC_COMMENT: {
        value: [
          {
            FOREGROUND: findTokenColorForFields('comment')
          },
          {
            FONT_TYPE: 2
          }
        ]
      },
      DEFAULT_DOC_COMMENT_TAG: {
        value: [
          {
            FOREGROUND: findTokenColorForFields('entity.name.tag')
          },
          {
            FONT_TYPE: 2
          },
          {
            EFFECT_COLOR: findEditorColorForFields([
              'entity.name.tag support.class.component'
            ])
          },
          {
            EFFECT_TYPE: 1
          }
        ]
      },
      DEFAULT_DOC_COMMENT_TAG_VALUE: {
        value: [
          {
            FOREGROUND: findEditorColorForFields(['editor.foreground'])
          }
        ]
      },
      DEFAULT_DOC_MARKUP: {
        value: [
          {
            FOREGROUND: findTokenColorForFields('entity.name.tag')
          }
        ]
      },
      DEFAULT_FUNCTION_CALL: {
        attributes: {
          baseAttributes: IdeaAttributeNames.DEFAULT_IDENTIFIER
        }
      },
      DEFAULT_FUNCTION_DECLARATION: {
        value: [
          {
            FOREGROUND: findTokenColorForFields('support.function')
          }
        ]
      },
      DEFAULT_IDENTIFIER: {
        value: [
          {
            FOREGROUND: findTokenColorForFields('variable.language')
          },
          {
            EFFECT_TYPE: 5
          }
        ]
      },
      DEFAULT_INSTANCE_FIELD: {
        value: [
          {
            FOREGROUND: findTokenColorForFields('support.type.property-name')
          }
        ]
      },
      DEFAULT_INVALID_STRING_ESCAPE: {
        value: [
          {
            FOREGROUND: findTokenColorForFields('invalid')
          },
          {
            EFFECT_COLOR: findTokenColorForFields('markup.error')
          },
          {
            EFFECT_TYPE: 2
          }
        ]
      },
      DEFAULT_KEYWORD: {
        value: [
          {
            FOREGROUND: findTokenColorForFields('keyword.operator.word')
          }
        ]
      },
      DEFAULT_LINE_COMMENT: {
        value: [
          {
            FOREGROUND: findTokenColorForFields('comment')
          }
        ]
      },
      DEFAULT_METADATA: {
        value: [
          {
            FOREGROUND: findTokenColorForFields('entity.other.attribute-name')
          }
        ]
      },
      DEFAULT_NUMBER: {
        value: [
          {
            FOREGROUND: findTokenColorForFields('constant.numeric')
          }
        ]
      },
      DEFAULT_OPERATION_SIGN: {
        value: [
          {
            FOREGROUND: findTokenColorForFields('keyword.operator')
          }
        ]
      },
      DEFAULT_REASSIGNED_LOCAL_VARIABLE: {
        value: [
          {
            FOREGROUND: findEditorColorForFields(['editor.foreground'])
          }
        ]
      },
      DEFAULT_REASSIGNED_PARAMETER: {
        value: [
          {
            FOREGROUND: findEditorColorForFields(['editor.foreground'])
          }
        ]
      },
      DEFAULT_SEMICOLON: {
        value: [
          {
            FOREGROUND: findTokenColorForFields('punctuation.definition')
          },
          {
            FONT_TYPE: 1
          }
        ]
      },
      DEFAULT_STATIC_FIELD: {
        value: [
          {
            FOREGROUND: findEditorColorForFields(['editor.foreground'])
          },
          {
            FONT_TYPE: 2
          }
        ]
      },
      DEFAULT_STATIC_METHOD: {
        value: [
          {
            FOREGROUND: findTokenColorForFields('support.function')
          },
          {
            FONT_TYPE: 2
          }
        ]
      },
      DEFAULT_STRING: {
        value: [
          {
            FOREGROUND: findTokenColorForFields('string')
          }
        ]
      },
      DEFAULT_TEMPLATE_LANGUAGE_COLOR: {
        attributes: {
          baseAttributes: IdeaAttributeNames.TEXT
        }
      },
      DEFAULT_VALID_STRING_ESCAPE: {
        value: [
          {
            FOREGROUND: findTokenColorForFields('string')
          }
        ]
      }
    }
  }
}

function mapToXmlObject ({
  name,
  version,
  parentScheme,
  metaInfo,
  colors,
  attributes
}: IdeaColorScheme): unknown {
  return {
    '@': {
      name,
      version,
      parent_scheme: parentScheme
    },
    metaInfo: {
      property: Object.keys(metaInfo).map(
        toXmlAttributeAndValue<MetaInfo>(metaInfo)
      )
    },
    colors: {
      option: Object.keys(colors).map(
        toXmlAttributeAndValue<
        {
          [key in IdeaColorNames]?: IdeaColor
        }
        >(colors)
      )
    },
    attributes: {
      option: Object.keys(attributes).map(key => {
        const attribute = attributes[key as keyof typeof attributes]
        return {
          '@': {
            name: key,
            ...attribute?.attributes
          },
          ...(attribute?.value != null
            ? {
              value: {
                option:
                    typeof attribute?.value == 'string'
                      ? {
                        '@': {
                          name: 'FOREGROUND',
                          value: attribute.value
                        }
                      }
                      : attribute?.value?.map(convertPropertyToXml)
              }
            }
            : undefined)
        }
      })
    }
  }
}

const toXmlAttributeWithValue = <V>(
  key: string,
  value: V
): {
  '@': {
    name: string
    value: V
  }
} => {
  return {
    '@': {
      name: key,
      value
    }
  }
}

const headKey = compose(head, keys)

const convertPropertyToXml = converge(toXmlAttributeWithValue, [
  headKey,
  converge(prop, [headKey, identity])
])

function toXmlAttributeAndValue<V> (object: V) {
  return (key: string) => ({
    '@': {
      name: key
    },
    '#': object[key as keyof typeof object]
  })
}

export function convertToIdea (vscodeTheme: CodeTheme, version: string): string {
  return parse(
    'scheme',
    mapToXmlObject(generateIdeaColorScheme(vscodeTheme, version))
  )
}
