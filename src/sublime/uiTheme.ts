import { CodeTheme, findEditorColor } from '../util/vscode'
import {
  SublimeUIClass,
  SublimeUISettings,
  SublimeUITheme,
  SublimeUIAttributes
} from '../types/sublime'

export function createAdaptiveTheme ({ colors }: CodeTheme): SublimeUITheme {
  const findEditorColorForField = findEditorColor(colors)

  return {
    extends: 'Adaptive.sublime-theme',
    variables: {
      font_face: SublimeUISettings.SYSTEM,
      font_size_sm: 11,
      font_size: 12,
      font_size_lg: 13
    },
    rules: [
      {
        class: SublimeUIClass.title_bar,
        fg: findEditorColorForField(['titleBar.activeForeground'])
      },
      {
        class: SublimeUIClass.sidebar_container,
        'layer0.tint': findEditorColorForField(['sideBar.background'])
      },
      {
        class: SublimeUIClass.status_bar,
        'layer0.tint': findEditorColorForField(['statusBar.background'])
      },
      {
        class: SublimeUIClass.label_control,
        parents: [{ class: SublimeUIClass.status_bar }],
        fg: findEditorColorForField(['statusBar.foreground'])
      },
      {
        class: SublimeUIClass.tree_row,
        attributes: [SublimeUIAttributes.selectable, SublimeUIAttributes.hover],
        'layer0.tint': findEditorColorForField([
          'list.inactiveSelectionBackground'
        ]),
        'layer0.opacity': 1.0
      },
      {
        class: SublimeUIClass.tree_row,
        attributes: [SublimeUIAttributes.selected],
        'layer0.tint': findEditorColorForField([
          'list.activeSelectionBackground'
        ]),
        'layer0.opacity': 1.0
      },
      {
        class: SublimeUIClass.sidebar_heading,
        fg: findEditorColorForField(['sideBarSectionHeader.foreground'])
      },
      {
        class: SublimeUIClass.sidebar_label,
        fg: findEditorColorForField(['sideBar.foreground'])
      },
      {
        class: SublimeUIClass.sidebar_label,
        parents: [
          {
            class: SublimeUIClass.tree_row,
            attributes: [SublimeUIAttributes.selected]
          }
        ],
        fg: findEditorColorForField(['list.activeSelectionForeground'])
      },
      {
        class: SublimeUIClass.vcs_status_badge,
        parents: [
          {
            class: SublimeUIClass.file_system_entry,
            attributes: [SublimeUIAttributes.untracked]
          }
        ],
        'layer0.tint': findEditorColorForField([
          'gitDecoration.untrackedResourceForeground'
        ])
      },
      {
        class: SublimeUIClass.vcs_status_badge,
        parents: [
          {
            class: SublimeUIClass.file_system_entry,
            attributes: [SublimeUIAttributes.modified]
          }
        ],
        'layer0.tint': findEditorColorForField([
          'gitDecoration.modifiedResourceForeground'
        ])
      },
      {
        class: SublimeUIClass.vcs_status_badge,
        parents: [
          {
            class: SublimeUIClass.file_system_entry,
            attributes: [SublimeUIAttributes.missing]
          }
        ],
        'layer0.tint': findEditorColorForField([
          'gitDecoration.deletedResourceForeground'
        ])
      },
      {
        class: SublimeUIClass.vcs_status_badge,
        parents: [
          {
            class: SublimeUIClass.file_system_entry,
            attributes: [SublimeUIAttributes.staged]
          }
        ],
        'layer0.tint': findEditorColorForField([
          'gitDecoration.addedResourceForeground'
        ])
      },
      {
        class: SublimeUIClass.vcs_status_badge,
        parents: [
          {
            class: SublimeUIClass.file_system_entry,
            attributes: [SublimeUIAttributes.added]
          }
        ],
        'layer0.tint': findEditorColorForField([
          'gitDecoration.addedResourceForeground'
        ])
      },
      {
        class: SublimeUIClass.vcs_status_badge,
        parents: [
          {
            class: SublimeUIClass.file_system_entry,
            attributes: [SublimeUIAttributes.deleted]
          }
        ],
        'layer0.tint': findEditorColorForField([
          'gitDecoration.deletedResourceForeground'
        ])
      },
      {
        class: SublimeUIClass.sidebar_label,
        parents: [
          {
            class: SublimeUIClass.file_system_entry,
            attributes: [SublimeUIAttributes.ignored]
          }
        ],
        color: findEditorColorForField([
          'gitDecoration.ignoredResourceForeground'
        ])
      },
      {
        class: SublimeUIClass.tab_control,
        attributes: [SublimeUIAttributes.selected],
        tint_modifier: findEditorColorForField(['tab.activeBackground'])
      },
      {
        class: SublimeUIClass.tab_control,
        attributes: [SublimeUIAttributes.dirty],
        settings: [SublimeUISettings.highlight_modified_tabs],
        'layer2.tint': findEditorColorForField(['list.highlightForeground'])
      },
      {
        class: SublimeUIClass.tab_label,
        fg: findEditorColorForField(['sideBar.foreground'])
      },
      {
        class: SublimeUIClass.tab_label,
        parents: [
          {
            class: SublimeUIClass.tab_control,
            attributes: [SublimeUIAttributes.selected]
          }
        ],
        fg: findEditorColorForField(['list.activeSelectionForeground'])
      }
    ]
  }
}
