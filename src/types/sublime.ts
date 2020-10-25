/* eslint-disable @typescript-eslint/camelcase */

export enum SublimeUIClass {
  title_bar = 'title_bar',
  sidebar_heading = 'sidebar_heading',
  sidebar_container = 'sidebar_container',
  sidebar_tree = 'sidebar_tree',
  sidebar_label = 'sidebar_label',
  tree_row = 'tree_row',
  window = 'window',
  close_button = 'close_button',
  disclosure_button_control = 'disclosure_button_control',
  icon_folder = 'icon_folder',
  icon_folder_loading = 'icon_folder_loading',
  icon_folder_dup = 'icon_folder_dup',
  icon_file_type = 'icon_file_type',
  file_system_entry = 'file_system_entry',
  scroll_area_control = 'scroll_area_control',
  vcs_status_badge = 'vcs_status_badge',
  vcs_changes_annotation = 'vcs_changes_annotation',
  vcs_branch_icon = 'vcs_branch_icon',
  vcs_status = 'vcs_status',
  label_control = 'label_control',
  status_button = 'status_button',
  status_container = 'status_container',
  sidebar_button_control = 'sidebar_button_control',
  status_bar = 'status_bar',
  tool_tip_label_control = 'tool_tip_label_control',
  tool_tip_control = 'tool_tip_control',
  title_label_control = 'title_label_control',
  icon_use_gitignore = 'icon_use_gitignore',
  icon_button_control = 'icon_button_control',
  icon_use_buffer = 'icon_use_buffer',
  icon_context = 'icon_context',
  icon_preserve_case = 'icon_preserve_case',
  icon_highlight = 'icon_highlight',
  icon_in_selection = 'icon_in_selection',
  icon_wrap = 'icon_wrap',
  icon_whole_word = 'icon_whole_word',
  icon_case = 'icon_case',
  icon_regex = 'icon_regex',
  icon_button_group = 'icon_button_group',
  button_control = 'button_control',
  dropdown_button_control = 'dropdown_button_control',
  text_line_control = 'text_line_control',
  scroll_bar_control = 'scroll_bar_control',
  overlay_control = 'overlay_control',
  puck_control = 'puck_control',
  scroll_corner_control = 'scroll_corner_control',
  scroll_track_control = 'scroll_track_control',
  progress_gauge_control = 'progress_gauge_control',
  progress_bar_control = 'progress_bar_control',
  dialog = 'dialog',
  panel_close_button = 'panel_close_button',
  panel_grid_control = 'panel_grid_control',
  panel_control = 'panel_control',
  tabset_control = 'tabset_control',
  tab_control = 'tab_control',
  tab_label = 'tab_label',
  tab_close_button = 'tab_close_button',
  scroll_tabs_left_button = 'scroll_tabs_left_button',
  scroll_tabs_right_button = 'scroll_tabs_right_button',
  show_tabs_dropdown_button = 'show_tabs_dropdown_button',
  quick_panel = 'quick_panel',
  mini_quick_panel_row = 'mini_quick_panel_row',
  quick_panel_row = 'quick_panel_row',
  quick_panel_entry = 'quick_panel_entry',
  quick_panel_label = 'quick_panel_label',
  quick_panel_path_label = 'quick_panel_path_label',
  quick_panel_label_hint = 'quick_panel_label hint',
  quick_panel_label_key_binding = 'quick_panel_label key_binding',
  grid_layout_control = 'grid_layout_control'
}

export enum SublimeUIAttributes {
  file_dark = 'file_dark',
  file_medium_dark = 'file_medium_dark',
  file_medium = 'file_medium',
  file_light = 'file_light',
  hover = 'hover',
  not_hover = '!hover',
  selectable = 'selectable',
  expandable = 'expandable',
  scrollable = 'scrollable',
  dirty = 'dirty',
  expanded = 'expanded',
  modified = 'modified',
  missing = 'missing',
  staged = 'staged',
  added = 'added',
  deleted = 'deleted',
  unmerged = 'unmerged',
  ignored = 'ignored',
  untracked = 'untracked',
  background = 'background',
  foreground = 'foreground',
  selected = 'selected',
  backgroSublimeUIAttributes = 'backgroSublimeUIAttributes',
  transient = 'transient',
  not_selected = '!selected'
}

export enum SublimeUISettings {
  SYSTEM = 'system',
  BOLD_FOLDER_LABELS = 'bold_folder_labels',
  overlay_scroll_bars = 'overlay_scroll_bars',
  not_overlay_scroll_bars = '!overlay_scroll_bars',
  dark = 'dark',
  light = 'light',
  bold_folder_labels = 'bold_folder_labels',
  mouse_wheel_switches_tabs = 'mouse_wheel_switches_tabs',
  NOT_ENABLE_TAB_SCROLLING = '!enable_tab_scrolling',
  highlight_modified_tabs = 'highlight_modified_tabs',
  show_tab_close_buttons_on_left = 'show_tab_close_buttons_on_left',
  not_show_tab_close_buttons = 'show_tab_close_buttons',
  show_tab_close_buttons = 'show_tab_close_buttons'
}

export type SublimeUIColorRGB = [number, number, number] | number[]

export type SublimeUIColorARGB = [number, number, number, number] | number[]

export type SublimeUIColorARGBWithStyle =
  | ['background' | 'foreground', number, number, number, number]
  | [
    SublimeUIAttributes.background | SublimeUIAttributes.foreground,
    ...number[]
  ]

export type SublimeUIColor =
  | SublimeUIColorRGB
  | SublimeUIColorARGB
  | SublimeUIColorARGBWithStyle

export enum Platform {
  WINDOWS = 'windows'
}

export interface SublimeUIAnimation {
  keyframes?: string[]
  target?: number
  speed?: number
  interpolation?: string | 'smoothstep'
  loop?: boolean
  frame_time?: number
}

export interface SublimeUIRule {
  class: string
  platforms?: Platform[]
  row_padding?: [number, number, number, number]
  attributes?: SublimeUIAttributes[]
  settings?: SublimeUISettings[]
  parents?: SublimeUIRule[]
  fg?: SublimeUIColor | string
  match_fg?: SublimeUIColor
  selected_fg?: SublimeUIColor
  selected_match_fg?: SublimeUIColor
  bg?: SublimeUIColor
  color?: string | SublimeUIColor
  border_color?: string | SublimeUIColor
  border_size?: number
  style?: 'system' | 'dark' | 'light'
  indent?: number
  indent_offset?: number
  indent_top_level?: boolean
  dark_content?: boolean
  spacer_rows?: boolean
  'layer0.texture'?: string | SublimeUIAnimation
  'layer0.inner_margin'?: number | [number, number, number, number]
  'layer0.tint'?: string | SublimeUIColor
  'layer0.opacity'?: number | SublimeUIAnimation
  'layer1.texture'?: string
  'layer1.inner_margin'?: [number, number, number, number]
  'layer1.opacity'?: number | SublimeUIAnimation
  'layer2.tint'?: number | SublimeUIAnimation | string
  'layer2.texture'?: string
  'layer2.inner_margin'?: [number, number, number, number]
  'layer2.opacity'?: number | SublimeUIAnimation
  'layer3.texture'?: string
  'layer3.inner_margin'?: [number, number, number, number]
  'layer3.opacity'?: number | SublimeUIAnimation
  shadow_color?: SublimeUIColor
  shadow_offset?: [number, number]
  'font.face'?: string
  'font.size'?: string
  'font.bold'?: boolean
  'font.italic'?: boolean
  content_margin?: number | [number, number] | [number, number, number, number]
  tint_index?: number
  tab_height?: number
  tab_overlap?: number
  mouse_wheel_switch?: boolean
  tint_modifier?: SublimeUIColor | string
  accent_tint_index?: number
  hit_test_level?: number
  close_button_side?: 'left' | 'right'
  spacing?: number
}

export interface SublimeUITab {
  class: string
  'layer0.opacity'?: number | SublimeUIAnimation
  content_margin?: number | [number, number] | [number, number, number, number]
  tint_index?: number
  tab_height?: number
  tab_overlap?: number
  tint_modifier?: SublimeUIColor
}

export interface SublimeUITheme {
  extends: string
  variables: {
    [key: string]: string | number
  }
  rules: SublimeUIRule[]
}

export interface SublimeColorSchemeRule {
  name?: string
  scope?: string
  foreground?: string | string[]
  background?: string
  foreground_adjust?: string
  selection_foreground?: string
  font_style?: 'bold' | 'italic' | 'bold italic' | 0
}

export interface SublimeColorScheme {
  name: string
  author: string
  variables: {
    [key: string]: string
  }
  globals: {
    [key: string]: string
  }
  rules: SublimeColorSchemeRule[]
}
