const { getColor, findScopeColor } = require('../util')

module.exports = function ({ colors, tokenColors }) {
  const getColorForIdea = (...fieldNames) => {
    const color = getColor(colors, ...fieldNames)
    return color.substr(1)
  }

  const findScopeColorForIdea = scope => {
    const color = findScopeColor(tokenColors, scope)
    return color.substr(1)
  }

  return {
    colors: {
      ADDED_LINES_COLOR: getColorForIdea('editorGutter.addedBackground'),
      ANNOTATIONS_COLOR: findScopeColorForIdea('variable.function'),
      CARET_COLOR: getColorForIdea(
        'editorCursor.background',
        'editor.foreground'
      ),
      CONSOLE_BACKGROUND_KEY: getColorForIdea(
        'panel.background',
        'sideBar.background'
      ),
      DELETED_LINES_COLOR: getColorForIdea('editorGutter.deletedBackground'),
      DIFF_SEPARATORS_BACKGROUND: getColorForIdea('panel.background'),
      DOCUMENTATION_COLOR: findScopeColorForIdea('comment'),
      ERROR_HINT: getColorForIdea('editorError.foreground'),
      FILESTATUS_ADDED: getColorForIdea(
        'gitDecoration.addedResourceForeground'
      ),
      FILESTATUS_COPIED: getColorForIdea(
        'gitDecoration.modifiedResourceForeground'
      ),
      FILESTATUS_DELETED: getColorForIdea(
        'gitDecoration.deletedResourceForeground'
      ),
      FILESTATUS_IDEA_FILESTATUS_DELETED_FROM_FILE_SYSTEM: getColorForIdea(
        'gitDecoration.deletedResourceForeground'
      ),
      FILESTATUS_IDEA_FILESTATUS_IGNORED: getColorForIdea(
        'gitDecoration.untrackedResourceForeground'
      ),
      FILESTATUS_MERGED: getColorForIdea(
        'gitDecoration.modifiedResourceForeground'
      ),
      FILESTATUS_MODIFIED: getColorForIdea(
        'gitDecoration.modifiedResourceForeground'
      ),
      FILESTATUS_RENAMED: getColorForIdea(
        'gitDecoration.modifiedResourceForeground'
      ),
      FILESTATUS_UNKNOWN: getColorForIdea(
        'gitDecoration.untrackedResourceForeground'
      ),
      FILESTATUS_addedOutside: getColorForIdea(
        'gitDecoration.addedResourceForeground'
      ),
      FOLDED_TEXT_BORDER_COLOR: getColorForIdea('sideBar.foreground'),
      GUTTER_BACKGROUND: getColorForIdea('editorGutter.background'),
      INDENT_GUIDE: getColorForIdea('editorIndentGuide.background'),
      INFORMATION_HINT: getColorForIdea('editorOverviewRuler.infoForeground'),
      LINE_NUMBERS_COLOR: getColorForIdea('editorLineNumber.foreground'),
      LINE_NUMBER_ON_CARET_ROW_COLOR: getColorForIdea(
        'editorLineNumber.foreground'
      ),
      METHOD_SEPARATORS_COLOR: getColorForIdea('editor.foreground'),
      MODIFIED_LINES_COLOR: getColorForIdea(
        'editorOverviewRuler.modifiedForeground'
      ),
      NOTIFICATION_BACKGROUND: getColorForIdea('notifications.background'),
      QUESTION_HINT: getColorForIdea('editorOverviewRuler.infoForeground'),
      RECENT_LOCATIONS_SELECTION: getColorForIdea(
        'editorOverviewRuler.infoForeground'
      ),
      RECURSIVE_CALL_ATTRIBUTES: getColorForIdea(
        'editorOverviewRuler.infoForeground'
      ),
      RIGHT_MARGIN_COLOR: getColorForIdea('editorOverviewRuler.infoForeground'),
      SELECTED_INDENT_GUIDE: getColorForIdea('editor.lineHighlightBackground'),
      SELECTED_TEARLINE_COLOR: getColorForIdea(
        'editor.lineHighlightBackground'
      ),
      SEPARATOR_BELOW_COLOR: getColorForIdea('editorWhitespace.foreground'),
      SOFT_WRAP_SIGN_COLOR: getColorForIdea('editorWhitespace.foreground'),
      TEARLINE_COLOR: getColorForIdea('editor.foreground'),
      VCS_ANNOTATIONS_COLOR_1: getColorForIdea(
        'gitDecoration.addedResourceForgeround'
      ),
      VCS_ANNOTATIONS_COLOR_2: getColorForIdea(
        'gitDecoration.modifiedResourceForeground'
      ),
      VCS_ANNOTATIONS_COLOR_3: getColorForIdea(
        'gitDecoration.deletedResourceForeground'
      ),
      VCS_ANNOTATIONS_COLOR_4: getColorForIdea(
        'gitDecoration.untrackedResourceForeground'
      ),
      VCS_ANNOTATIONS_COLOR_5: getColorForIdea(
        'gitDecoration.conflictingResourceForeground'
      ),
      VISUAL_INDENT_GUIDE: getColorForIdea('editorWhitespace.foreground'),
      WHITESPACES_MODIFIED_LINES_COLOR: getColorForIdea(
        'gitDecoration.modifiedResourceForeground'
      ),
      WHITESPACES: getColorForIdea('editorWhitespace.foreground')
    },
    attributes: {
      ANNOTATION_ATTRIBUTE_NAME_ATTRIBUTES: {
        value: ''
      },
      ANNOTATION_NAME_ATTRIBUTES: {
        attributes: {
          baseAttributes: 'DEFAULT_METADATA'
        }
      },
      BAD_CHARACTER: {
        value: [
          {
            EFFECT_COLOR: findScopeColorForIdea('markup.error')
          },
          { EFFECT_TYPE: 2 }
        ]
      },
      BOOKMARKS_ATTRIBUTES: {
        value: [{ ERROR_STRIPE_COLOR: findScopeColorForIdea('invalid') }]
      },
      BREADCRUMBS_CURRENT: {
        value: [
          {
            FOREGROUND: getColorForIdea(
              'breadcrumb.activeSelectionForeground',
              'editor.foreground'
            )
          }
        ]
      },
      BREADCRUMBS_DEFAULT: {
        value: [
          {
            FOREGROUND: getColorForIdea(
              'breadcrumb.foreground',
              'editor.foreground'
            )
          }
        ]
      },
      BREADCRUMBS_HOVERED: {
        value: [
          {
            FOREGROUND: getColorForIdea(
              'breadcrumb.focusForeground',
              'editor.foreground'
            )
          }
        ]
      },
      BREADCRUMBS_INACTIVE: {
        value: [
          {
            FOREGROUND: getColorForIdea(
              'breadcrumb.foreground',
              'editor.foreground'
            )
          }
        ]
      },
      BREAKPOINT_ATTRIBUTES: {
        value: [
          {
            BACKGROUND: findScopeColorForIdea('invalid')
          },
          {
            ERROR_STRIPE_COLOR: 'ffffff'
          }
        ]
      },
      CONSOLE_BLUE_BRIGHT_OUTPUT: {
        value: [
          {
            FOREGROUND: getColorForIdea('terminal.ansiBrightBlue')
          }
        ]
      },
      CONSOLE_BLUE_OUTPUT: {
        value: [
          {
            FOREGROUND: getColorForIdea('terminal.ansiBlue')
          }
        ]
      },
      CONSOLE_CYAN_BRIGHT_OUTPUT: {
        value: [
          {
            FOREGROUND: getColorForIdea('terminal.ansiBrightCyan')
          }
        ]
      },
      CONSOLE_CYAN_OUTPUT: {
        value: [
          {
            FOREGROUND: getColorForIdea('terminal.ansiCyan')
          }
        ]
      },
      CONSOLE_ERROR_OUTPUT: {
        value: [
          {
            FOREGROUND: getColorForIdea('editorError.foreground')
          }
        ]
      },
      CONSOLE_GREEN_BRIGHT_OUTPUT: {
        value: [
          {
            FOREGROUND: getColorForIdea('terminal.ansiBrightGreen')
          }
        ]
      },
      CONSOLE_GREEN_OUTPUT: {
        value: [
          {
            FOREGROUND: getColorForIdea('terminal.ansiGreen')
          }
        ]
      },
      CONSOLE_MAGENTA_BRIGHT_OUTPUT: {
        value: [
          {
            FOREGROUND: getColorForIdea('terminal.ansiBrightMagenta')
          }
        ]
      },
      CONSOLE_MAGENTA_OUTPUT: {
        value: [
          {
            FOREGROUND: getColorForIdea('terminal.ansiMagenta')
          }
        ]
      },
      CONSOLE_NORMAL_OUTPUT: {
        value: [
          {
            FOREGROUND: getColorForIdea('terminal.foreground')
          }
        ]
      },
      CONSOLE_RANGE_TO_EXECUTE: {
        value: [
          {
            EFFECT_COLOR: getColorForIdea('terminal.ansiGreen')
          }
        ]
      },
      CONSOLE_RED_BRIGHT_OUTPUT: {
        value: [
          {
            FOREGROUND: getColorForIdea('terminal.ansiBrightRed')
          }
        ]
      },
      CONSOLE_RED_OUTPUT: {
        value: [
          {
            FOREGROUND: getColorForIdea('terminal.ansiRed')
          }
        ]
      },
      CONSOLE_SYSTEM_OUTPUT: {
        value: [
          {
            FOREGROUND: getColorForIdea('terminal.ansiYellow')
          }
        ]
      },
      CONSOLE_USER_INPUT: {
        value: [
          {
            FOREGROUND: getColorForIdea('terminal.foreground')
          },
          {
            FONT_TYPE: 2
          }
        ]
      },
      CONSOLE_YELLOW_BRIGHT_OUTPUT: {
        value: [
          {
            FOREGROUND: getColorForIdea('terminal.ansiBrightYellow')
          }
        ]
      },
      CONSOLE_YELLOW_OUTPUT: {
        value: [
          {
            FOREGROUND: getColorForIdea('terminal.ansiYellow')
          }
        ]
      },
      'CSS.COLOR': {
        value: [
          {
            FOREGROUND: findScopeColorForIdea(
              'support.type.custom-property.name'
            )
          }
        ]
      },
      'CSS.IMPORTANT': {
        attributes: {
          baseAttributes: 'DEFAULT_KEYWORD'
        }
      },
      'CSS.KEYWORD': {
        value: [
          {
            FOREGROUND: findScopeColorForIdea('keyword.operator.word')
          }
        ]
      },
      'CSS.TAG_NAME': {
        value: [
          {
            FOREGROUND: findScopeColorForIdea('support.type.property-name')
          }
        ]
      },
      'CSS.URL': {
        attributes: {
          baseAttributes: 'HTML_ATTRIBUTE_VALUE'
        }
      },
      CTRL_CLICKABLE: {
        value: [
          {
            FOREGROUND: getColorForIdea('button.background')
          },
          {
            EFFECT_COLOR: getColorForIdea('button.background')
          },
          {
            EFFECT_TYPE: 1
          }
        ]
      },
      CUSTOM_KEYWORD1_ATTRIBUTES: {
        value: [
          {
            FOREGROUND: findScopeColorForIdea('entity.other.attribute-name')
          }
        ]
      },
      CUSTOM_KEYWORD2_ATTRIBUTES: {
        value: [
          {
            FOREGROUND: findScopeColorForIdea(
              'entity.name.tag support.class.component'
            )
          }
        ]
      },
      CUSTOM_KEYWORD3_ATTRIBUTES: {
        value: [
          {
            FOREGROUND: findScopeColorForIdea('support.variable')
          }
        ]
      },
      CUSTOM_KEYWORD4_ATTRIBUTES: {
        value: [
          {
            FOREGROUND: findScopeColorForIdea('support.constant')
          }
        ]
      },
      CUSTOM_STRING_ATTRIBUTES: {
        attributes: {
          baseAttributes: 'DEFAULT_STRING'
        }
      },
      CUSTOM_VALID_STRING_ESCAPE_ATTRIBUTES: {
        attributes: {
          baseAttributes: 'DEFAULT_VALID_STRING_ESCAPE'
        }
      },
      DEBUGGER_INLINED_VALUES: {
        value: [
          {
            FOREGROUND: findScopeColorForIdea('comment')
          },
          {
            FONT_TYPE: 2
          }
        ]
      },
      DEBUGGER_INLINED_VALUES_EXECUTION_LINE: {
        value: [
          {
            FOREGROUND: getColorForIdea('editor.lineHighlightBackground')
          },
          {
            FONT_TYPE: 2
          }
        ]
      },
      DEBUGGER_INLINED_VALUES_MODIFIED: {
        value: [
          {
            FOREGROUND: getColorForIdea('editorGutter.modifiedBackground')
          },
          {
            FONT_TYPE: 2
          }
        ]
      },
      DEFAULT_BLOCK_COMMENT: {
        value: [
          {
            FOREGROUND: findScopeColorForIdea('comment')
          }
        ]
      },
      DEFAULT_CLASS_REFERENCE: {
        attributes: {
          baseAttributes: 'DEFAULT_IDENTIFIER'
        }
      },
      DEFAULT_COMMA: {
        value: [
          {
            FOREGROUND: findScopeColorForIdea('punctuation.definition')
          },
          {
            FONT_TYPE: 1
          }
        ]
      },
      DEFAULT_CONSTANT: {
        value: [
          {
            FOREGROUND: findScopeColorForIdea('support.constant')
          }
        ]
      },
      DEFAULT_DOC_COMMENT: {
        value: [
          {
            FOREGROUND: findScopeColorForIdea('comment')
          },
          {
            FONT_TYPE: 2
          }
        ]
      },
      DEFAULT_DOC_COMMENT_TAG: {
        value: [
          {
            FOREGROUND: findScopeColorForIdea('entity.name.tag')
          },
          {
            FONT_TYPE: 2
          },
          {
            EFFECT_COLOR: findScopeColor(
              'entity.name.tag support.class.component'
            )
          },
          {
            EFFECT_TYPE: 1
          }
        ]
      },
      DEFAULT_DOC_COMMENT_TAG_VALUE: {
        value: [
          {
            FOREGROUND: getColorForIdea('editor.foreground')
          }
        ]
      },
      DEFAULT_DOC_MARKUP: {
        value: [
          {
            FOREGROUND: findScopeColorForIdea('entity.name.tag')
          }
        ]
      },
      DEFAULT_FUNCTION_CALL: {
        attributes: {
          baseAttributes: 'DEFAULT_IDENTIFIER'
        }
      },
      DEFAULT_FUNCTION_DECLARATION: {
        value: [
          {
            FOREGROUND: findScopeColorForIdea('support.function')
          }
        ]
      },
      DEFAULT_IDENTIFIER: {
        value: [
          {
            FOREGROUND: findScopeColorForIdea('variable.language')
          },
          {
            EFFECT_TYPE: 5
          }
        ]
      },
      DEFAULT_INSTANCE_FIELD: {
        value: [
          {
            FOREGROUND: findScopeColorForIdea('support.type.property-name')
          }
        ]
      },
      DEFAULT_INVALID_STRING_ESCAPE: {
        value: [
          {
            FOREGROUND: findScopeColorForIdea('invalid')
          },
          {
            EFFECT_COLOR: findScopeColorForIdea('markup.error')
          },
          {
            EFFECT_TYPE: 2
          }
        ]
      },
      DEFAULT_KEYWORD: {
        value: [
          {
            FOREGROUND: findScopeColorForIdea('keyword.operator.word')
          }
        ]
      },
      DEFAULT_LINE_COMMENT: {
        value: [
          {
            FOREGROUND: findScopeColorForIdea('comment')
          }
        ]
      },
      DEFAULT_METADATA: {
        value: [
          {
            FOREGROUND: findScopeColorForIdea('entity.other.attribute-name')
          }
        ]
      },
      DEFAULT_NUMBER: {
        value: [
          {
            FOREGROUND: findScopeColorForIdea('constant.numeric')
          }
        ]
      },
      DEFAULT_OPERATION_SIGN: {
        value: [
          {
            FOREGROUND: findScopeColorForIdea('keyword.operator')
          }
        ]
      },
      DEFAULT_REASSIGNED_LOCAL_VARIABLE: {
        value: [
          {
            FOREGROUND: getColorForIdea('editor.foreground')
          }
        ]
      },
      DEFAULT_REASSIGNED_PARAMETER: {
        value: [
          {
            FOREGROUND: getColorForIdea('editor.foreground')
          }
        ]
      },
      DEFAULT_SEMICOLON: {
        value: [
          {
            FOREGROUND: findScopeColorForIdea('punctuation.definition')
          },
          {
            FONT_TYPE: 1
          }
        ]
      },
      DEFAULT_STATIC_FIELD: {
        value: [
          {
            FOREGROUND: getColorForIdea('editor.foreground')
          },
          {
            FONT_TYPE: 2
          }
        ]
      },
      DEFAULT_STATIC_METHOD: {
        value: [
          {
            FOREGROUND: findScopeColorForIdea('support.function')
          },
          {
            FONT_TYPE: 2
          }
        ]
      },
      DEFAULT_STRING: {
        value: [
          {
            FOREGROUND: findScopeColorForIdea('string')
          }
        ]
      },
      DEFAULT_TEMPLATE_LANGUAGE_COLOR: {
        attributes: {
          baseAttributes: 'TEXT'
        }
      },
      DEFAULT_VALID_STRING_ESCAPE: {
        value: [
          {
            FOREGROUND: findScopeColorForIdea('string')
          }
        ]
      }
    }
  }
}
