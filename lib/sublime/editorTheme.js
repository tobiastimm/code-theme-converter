const {
  getColor,
  hex2Rgb,
  hex2Rgba,
  removeLastElement,
  getAlphaFromHex,
} = require('../util')

module.exports = function({ colors, name }) {
  const settingsName = name.replace(/\s+/g, '-').toLowerCase()
  const theme = [
    //
    // TABS (REGULAR)
    //
    // Tab set
    //
    // TABS (REGULAR)
    //

    // Tab set
    {
      class: 'tabset_control',
      'layer0.texture': '',
      'layer0.tint': `${hex2Rgb(
        getColor(colors, ['editorGroupHeader.tabsBackground']),
      )}`,
      'layer0.inner_margin': 0,
      'layer0.opacity': 1,
      content_margin: 0,
      tab_overlap: 0,
      tab_width: 128,
      tab_min_width: 48,
      tab_height: 28,
      mouse_wheel_switch: false,
    },
    {
      class: 'tabset_control',
      settings: ['mouse_wheel_switches_tabs'],
      mouse_wheel_switch: true,
    },
    // Tab element
    {
      class: 'tab_control',
      content_margin: [8, 0],
      max_margin_trim: 0,
      hit_test_level: 0,
      'layer0.texture': '',
      'layer0.tint': `${hex2Rgb(getColor(colors, ['tab.inactiveBackground']))}`,
      'layer0.inner_margin': [5, 5],
      'layer0.opacity': 1,
    },
    // Tab close state
    {
      class: 'tab_control',
      settings: ['show_tab_close_buttons'],
      content_margin: [8, 0],
    },
    // Tab hover state
    {
      class: 'tab_control',
      attributes: ['hover'],
    },
    // Tab active state
    {
      class: 'tab_control',
      attributes: ['selected'],
      'layer0.texture': '',
      'layer0.tint': `${hex2Rgb(getColor(colors, ['tab.activeBackground']))}`,
    },

    //
    // TAB BUTTONS
    //

    // Tab close button
    {
      class: 'tab_close_button',
      'layer0.texture': `Theme - ${settingsName}/assets/close.png`,
      'layer0.opacity': 0,
      'layer0.tint': `${hex2Rgb(getColor(colors, ['sideBar.foreground']))}`,
    },
    {
      class: 'tab_close_button',
      settings: ['show_tab_close_buttons'],
      content_margin: [8, 8],
    },
    {
      class: 'tab_close_button',
      parents: [{ class: 'tab_control', attributes: ['hover'] }],
      'layer0.texture': `Theme - ${settingsName}/assets/close.png`,
      'layer0.opacity': 1,
    },
    {
      class: 'tab_close_button',
      parents: [{ class: 'tab_control' }],
      attributes: ['hover'],
      'layer0.opacity': 1,
      'layer0.tint': `${hex2Rgb(getColor(colors, ['sideBar.foreground']))}`,
    },
    {
      class: 'tab_close_button',
      parents: [{ class: 'tab_control', attributes: ['selected'] }],
      'layer0.opacity': 1,
    },
    // Tab dirty button
    {
      class: 'tab_close_button',
      parents: [{ class: 'tab_control', attributes: ['dirty'] }],
      'layer0.texture': `Theme - ${settingsName}/assets/circle.png`,
      'layer0.tint': `${hex2Rgb(
        getColor(colors, ['editorOverviewRuler.modifiedForeground']),
      )}`,
      'layer0.opacity': 1,
    },
    {
      class: 'tab_close_button',
      settings: ['!show_tab_close_buttons'],
      parents: [{ class: 'tab_control', attributes: ['dirty'] }],
      content_margin: [8, 8],
      'layer0.opacity': 1,
    },
    {
      class: 'tab_close_button',
      parents: [{ class: 'tab_control', attributes: ['dirty', 'hover'] }],
      'layer0.texture': `Theme - ${settingsName}/assets/close.png`,
      attributes: ['hover'],
      'layer0.opacity': 1,
      'layer0.tint': `${hex2Rgb(
        getColor(colors, ['list.activeSelectionForeground']),
      )}`,
    },
    {
      class: 'tab_close_button',
      parents: [{ class: 'tab_control', attributes: ['dirty', 'selected'] }],
    },
    // Tab highlight button
    {
      class: 'tab_close_button',
      settings: ['highlight_modified_tabs'],
      parents: [{ class: 'tab_control', attributes: ['dirty'] }],
    },
    {
      class: 'tab_close_button',
      settings: ['highlight_modified_tabs'],
      parents: [{ class: 'tab_control', attributes: ['dirty', 'selected'] }],
    },
    // Tab close button hover
    {
      class: 'tab_close_button',
      settings: ['show_tab_close_buttons'],
      attributes: ['hover'],
    },
    // Tab close button pressed
    {
      class: 'tab_close_button',
      settings: ['show_tab_close_buttons'],
      attributes: ['pressed'],
      'layer0.opacity': 0.5,
    },

    //
    // TAB LABELS
    //

    {
      class: 'tab_label',
      fade: true,
      fg: `${hex2Rgb(getColor(colors, ['sideBar.foreground']))}`,
    },
    {
      class: 'tab_label',
      parents: [{ class: 'tab_control', attributes: ['hover'] }],
      fg: `${hex2Rgb(getColor(colors, ['list.activeSelectionForeground']))}`,
    },
    {
      class: 'tab_label',
      parents: [{ class: 'tab_control', attributes: ['selected'] }],
      fg: `${hex2Rgb(getColor(colors, ['list.activeSelectionForeground']))}`,
    },
    {
      class: 'tab_label',
      attributes: ['transient'],
      'font.italic': true,
    },

    // Tab Labels font size
    {
      class: 'tab_label',
      settings: [`${settingsName}_tabs_font_small`],
      'font.size': 10.0,
    },
    {
      class: 'tab_label',
      settings: [`${settingsName}_tabs_font_normal`],
      'font.size': 11.0,
    },
    {
      class: 'tab_label',
      settings: [`${settingsName}_tabs_font_large`],
      'font.size': 12.0,
    },
    {
      class: 'tab_label',
      settings: [`${settingsName}_tabs_font_xlarge`],
      'font.size': 14.0,
    },

    //
    // FOLD BUTTONS
    //

    {
      class: 'fold_button_control',
      'layer0.texture': `Theme - ${settingsName}/assets/fold-right.png`,
      'layer0.tint': `${hex2Rgb(getColor(colors, ['sideBar.foreground']))}`,
      'layer0.opacity': 0.5,
      'layer0.inner_margin': 0,
      content_margin: [8, 8],
    },
    {
      class: 'fold_button_control',
      attributes: ['hover'],
      'layer0.opacity': 1,
    },
    {
      class: 'fold_button_control',
      attributes: ['expanded'],
      'layer0.texture': `Theme - ${settingsName}/assets/fold-down.png`,
    },
    {
      class: 'fold_button_control',
      attributes: ['expanded', 'hover'],
    },

    //
    // STANDARD SCROLLBARS
    //

    // Standard vertical scroll bar
    {
      class: 'scroll_bar_control',
      'layer0.texture': '',
      'layer0.tint': `${removeLastElement(
        hex2Rgba(getColor(colors, ['scrollbarSlider.background'])),
      )}`,
      'layer0.opacity': `${getAlphaFromHex(
        getColor(colors, ['scrollbarSlider.background']),
      )}`,
      'layer0.inner_margin': [0, 0],
      blur: true,
    },
    // Standard horizontal scroll bar
    {
      class: 'scroll_bar_control',
      attributes: ['horizontal'],
      'layer0.texture': '',
      'layer0.tint': `${removeLastElement(
        hex2Rgba(getColor(colors, ['scrollbarSlider.background'])),
      )}`,
      'layer0.inner_margin': [0, 0],
      blur: true,
    },
    // Standard scroll bar corner
    {
      class: 'scroll_corner_control',
      'layer0.texture': '',
      'layer0.tint': `${removeLastElement(
        hex2Rgba(getColor(colors, ['scrollbarSlider.background'])),
      )}`,
      'layer0.inner_margin': [0, 0],
      'layer0.opacity': 1,
    },
    // Standard vertical scroll puck
    {
      class: 'puck_control',
      'layer0.texture': '',
      'layer0.tint': `${removeLastElement(
        hex2Rgba(getColor(colors, ['scrollbarSlider.activeBackground'])),
      )}`,
      'layer0.opacity': `${getAlphaFromHex(
        getColor(colors, ['scrollbarSlider.activeBackground']),
      )}`,
      'layer0.inner_margin': [0, 0],
      content_margin: [6, 0],
      blur: false,
    },
    // Standard horizontal scroll puck
    {
      class: 'puck_control',
      attributes: ['horizontal'],
      // "layer0.texture": "",
      'layer0.tint': `${removeLastElement(
        hex2Rgba(getColor(colors, ['scrollbarSlider.activeBackground'])),
      )}`,
      'layer0.inner_margin': [0, 0],
      content_margin: [12, 6],
      blur: false,
    },

    //
    // OVERLAY SCROLLBARS
    //

    // Overlay toggle scroll bar
    {
      class: 'scroll_area_control',
      settings: ['overlay_scroll_bars'],
      overlay: true,
    },
    {
      class: 'scroll_area_control',
      settings: ['!overlay_scroll_bars'],
      overlay: false,
    },
    // Overlay vertical scroll bar
    {
      class: 'scroll_bar_control',
      settings: ['overlay_scroll_bars'],
      // "layer0.texture": "",
      'layer0.tint': [30, 50, 60], // 00
      'layer0.inner_margin': [0, 5],
      'layer0.opacity': 0,
      blur: false,
    },
    // Overlay horizontal scroll bar
    {
      class: 'scroll_bar_control',
      settings: ['overlay_scroll_bars'],
      attributes: ['horizontal'],
      'layer0.inner_margin': [5, 0],
      'layer0.opacity': 0,
      blur: true,
    },
    // Overlay vertical puck
    {
      class: 'puck_control',
      settings: ['overlay_scroll_bars'],
      'layer0.texture': '',
      'layer0.inner_margin': [0, 5],
      content_margin: [2, 32],
      blur: true,
    },
    // Overlay horizontal puck
    {
      class: 'puck_control',
      settings: ['overlay_scroll_bars'],
      attributes: ['horizontal'],
      'layer0.texture': '',
      'layer0.inner_margin': [5, 0],
      content_margin: [16, 2],
      blur: true,
    },
    // Overlay light puck (for dark content)
    {
      class: 'puck_control',
      settings: ['overlay_scroll_bars'],
      attributes: ['dark'],
      // "layer0.texture": "",
      'layer0.tint': [79, 91, 102], // 02
    },
    // Overlay light horizontal puck (for dark content)
    {
      class: 'puck_control',
      settings: ['overlay_scroll_bars'],
      attributes: ['horizontal', 'dark'],
      // "layer0.texture": "",
      'layer0.tint': [79, 91, 102], // 02
    },

    //
    // EMPTY WINDOW BACKGROUND
    //

    {
      class: 'sheet_container_control',
      'layer0.tint': `${hex2Rgb(getColor(colors, ['editorGroup.background']))}`,
      'layer0.opacity': 1,
    },

    //
    // GRID LAYOUT
    //

    {
      class: 'grid_layout_control',
      border_size: 1,
      border_color: `${hex2Rgb(getColor(colors, ['editorGroup.border']))}`,
    },

    //
    // MINI MAP
    //

    {
      class: 'minimap_control',
      viewport_color: [255, 255, 255, 15],
    },

    //
    // LABELS
    //

    // General labels
    {
      class: 'label_control',
      color: `${hex2Rgb(getColor(colors, ['sideBar.foreground']))}`,
    },
    // Text field labels
    {
      class: 'label_control',
      parents: [{ class: 'panel_control' }],
    },
    // Button labels
    {
      class: 'label_control',
      parents: [{ class: 'button_control' }],
      'font.bold': true,
      color: `${hex2Rgb(getColor(colors, ['editor.foreground']))}`,
    },

    //
    // TOOLTIP
    //

    // Tooltip container
    {
      class: 'tool_tip_control',
      // "layer0.texture": "",
      'layer0.tint': `${hex2Rgb(
        getColor(colors, ['editorHoverWidget.background']),
      )}`,
      'layer0.inner_margin': [1, 1],
      'layer0.opacity': 1,
      content_margin: [4, 4],
    },
    // Tooltip content
    {
      class: 'tool_tip_label_control',
      color: `${hex2Rgb(getColor(colors, ['editor.foreground']))}`,
    },

    //
    // STATUS BAR
    //

    // Status bar container
    {
      class: 'status_bar',
      'layer0.texture': '',
      'layer0.tint': `${hex2Rgb(getColor(colors, ['statusBar.background']))}`,
      'layer0.opacity': 1,
      content_margin: 4,
    },
    // Status bar button
    {
      class: 'status_button',
      min_size: [92, 0],
    },
    // Status bar label
    {
      class: 'label_control',
      parents: [{ class: 'status_bar' }],
      color: `${hex2Rgb(getColor(colors, ['statusBar.foreground']))}`,
    },

    //
    // SIDEBAR
    //

    // Sidebar container
    {
      class: 'sidebar_container',
      // "layer0.texture": "",
      'layer0.opacity': 1,
      'layer0.tint': `${hex2Rgb(getColor(colors, ['sideBar.background']))}`,
      'layer0.inner_margin': [1, 5, 2, 1],
      content_margin: [0, 4, 0, 0],
    },
    // Sidebar tree
    {
      class: 'sidebar_tree',
      row_padding: [8, 4],
      indent: 12,
      indent_offset: 14,
      indent_top_level: false,
      dark_content: true,
    },
    // Sidebar rows
    {
      class: 'tree_row',
      // "layer0.texture": "",
      'layer0.tint': `${hex2Rgb(getColor(colors, ['sideBar.background']))}`,
      'layer0.opacity': 0,
      'layer0.inner_margin': [1, 1],
    },
    // Sidebar row selected
    {
      class: 'tree_row',
      attributes: ['selected'],
      'layer0.opacity': 1,
    },
    // Sidebar heading
    {
      class: 'sidebar_heading',
      color: `${hex2Rgb(
        getColor(colors, ['sideBarSectionHeader.foreground']),
      )}`,
      'font.bold': true,
    },
    {
      class: 'sidebar_tree',
      settings: [`${settingsName}_sidebar_tree_xsmall`],
      row_padding: [8, 0],
    },
    {
      class: 'sidebar_tree',
      settings: [`${settingsName}_sidebar_tree_small`],
      row_padding: [8, 2],
    },
    {
      class: 'sidebar_tree',
      settings: [`${settingsName}_sidebar_tree_normal`],
      row_padding: [8, 4],
    },
    {
      class: 'sidebar_tree',
      settings: [`${settingsName}_sidebar_tree_large`],
      row_padding: [8, 6],
    },
    {
      class: 'sidebar_tree',
      settings: [`${settingsName}_sidebar_tree_xlarge`],
      row_padding: [8, 8],
    },
    // Sidebar heading selected
    {
      class: 'sidebar_heading',
      parents: [{ class: 'tree_row', attributes: ['selected'] }],
      shadow_offset: [0, 0],
    },
    // Sidebar entry
    {
      class: 'sidebar_label',
      color: `${hex2Rgb(getColor(colors, ['sideBar.foreground']))}`,
    },
    {
      class: 'sidebar_label',
      settings: [`${settingsName}_sidebar_font_small`],
      'font.size': 10.0,
    },
    {
      class: 'sidebar_label',
      settings: [`${settingsName}_sidebar_font_normal`],
      'font.size': 11.0,
    },
    {
      class: 'sidebar_label',
      settings: [`${settingsName}_sidebar_font_large`],
      'font.size': 12.0,
    },
    {
      class: 'sidebar_label',
      settings: [`${settingsName}_sidebar_font_xlarge`],
      'font.size': 14.0,
    },
    // Sidebar folder entry
    {
      class: 'sidebar_label',
      parents: [{ class: 'tree_row', attributes: ['expandable'] }],
      color: `${hex2Rgb(getColor(colors, ['sideBar.foreground']))}`,
    },
    {
      class: 'sidebar_label',
      parents: [{ class: 'tree_row', attributes: ['hover'] }],
      color: `${hex2Rgb(getColor(colors, ['list.activeSelectionForeground']))}`,
    },
    {
      class: 'sidebar_label',
      parents: [{ class: 'tree_row', attributes: ['expandable'] }],
      settings: ['bold_folder_labels'],
      'font.bold': true,
    },
    // Sidebar entry selected
    {
      class: 'sidebar_label',
      parents: [{ class: 'tree_row', attributes: ['selected'] }],
      color: `${hex2Rgb(getColor(colors, ['list.activeSelectionForeground']))}`,
    },

    //
    // SIDEBAR - OPEN FILE ICONS
    //

    // Sidebar file close
    {
      class: 'close_button',
      'layer0.texture': `Theme - ${settingsName}/assets/close.png`,
      'layer0.opacity': 0,
      'layer0.inner_margin': 0,
      'layer0.tint': `${hex2Rgb(getColor(colors, ['sideBar.foreground']))}`,
      content_margin: [8, 8],
    },
    {
      class: 'close_button',
      parents: [{ class: 'tree_row', attributes: ['selected'] }],
      'layer0.opacity': 1,
    },
    {
      class: 'close_button',
      parents: [{ class: 'tree_row', attributes: ['hover'] }],
      'layer0.opacity': 1,
    },
    // Sidebar file dirty
    {
      class: 'close_button',
      attributes: ['dirty'],
      'layer0.texture': `Theme - ${settingsName}/assets/circle.png`,
      'layer0.opacity': 1,
      'layer0.tint': `${hex2Rgb(
        getColor(colors, ['editorGutter.modifiedBackground']),
      )}`,
    },
    {
      class: 'close_button',
      attributes: ['dirty'],
      parents: [{ class: 'tree_row', attributes: ['selected'] }],
      'layer0.texture': `Theme - ${settingsName}/assets/circle.png`,
    },
    // Sidebar file close hover
    {
      class: 'close_button',
      attributes: ['hover'],
      'layer0.tint': `${hex2Rgb(getColor(colors, ['sideBar.foreground']))}`,
    },
    {
      class: 'close_button',
      attributes: ['dirty', 'hover'],
      parents: [{ class: 'tree_row', attributes: ['hover'] }],
      'layer0.texture': `Theme - ${settingsName}/assets/close.png`,
      'layer0.tint': `${hex2Rgb(
        getColor(colors, ['editorGutter.modifiedBackground']),
      )}`,
    },

    //
    // SIDEBAR - GENERAL FILE ICONS
    //

    // Sidebar group closed
    {
      class: 'disclosure_button_control',
      content_margin: [8, 8],
      'layer0.texture': `Theme - ${settingsName}/assets/fold-right.png`,
      'layer0.tint': `${hex2Rgb(getColor(colors, ['sideBar.foreground']))}`,
      'layer0.opacity': 1,
      'layer0.inner_margin': 0,
    },
    {
      class: 'disclosure_button_control',
      parents: [{ class: 'tree_row', attributes: ['hover'] }],
      'layer0.tint': [167, 173, 186], // 04
    },
    {
      class: 'disclosure_button_control',
      parents: [{ class: 'tree_row', attributes: ['selected'] }],
    },
    // Sidebar group open
    {
      class: 'disclosure_button_control',
      attributes: ['expanded'],
      'layer0.texture': `Theme - ${settingsName}/assets/fold-down.png`,
    },
    {
      class: 'disclosure_button_control',
      attributes: ['expanded'],
      parents: [{ class: 'tree_row', attributes: ['hover'] }],
    },
    {
      class: 'disclosure_button_control',
      attributes: ['expanded'],
      parents: [{ class: 'tree_row', attributes: ['selected'] }],
      'layer0.texture': `Theme - ${settingsName}/assets/fold-down.png`,
    },
    // Sidebar folder closed
    {
      class: 'icon_folder',
      'layer0.texture': `Theme - ${settingsName}/assets/folder-closed.png`,
      'layer0.opacity': 0.5,
      'layer0.tint': [167, 173, 186], // 04
      content_margin: [8, 8],
    },
    {
      class: 'icon_folder',
      parents: [{ class: 'tree_row', attributes: ['hover'] }],
      'layer0.opacity': 1.0,
    },
    {
      class: 'icon_folder',
      parents: [{ class: 'tree_row', attributes: ['selected'] }],
    },
    // Sidebar folder open
    {
      class: 'icon_folder',
      parents: [{ class: 'tree_row', attributes: ['expanded'] }],
      'layer0.texture': `Theme - ${settingsName}/assets/folder-open.png`,
    },
    {
      class: 'icon_folder',
      parents: [{ class: 'tree_row', attributes: ['expanded', 'hover'] }],
    },
    {
      class: 'icon_folder',
      parents: [{ class: 'tree_row', attributes: ['expanded', 'selected'] }],
      'layer0.texture': `Theme - ${settingsName}/assets/folder-open.png`,
    },
    // Sidebar folder loading
    {
      class: 'icon_folder_loading',
      'layer0.texture': {
        keyframes: [
          `Theme - ${settingsName}/assets/spinner.png`,
          `Theme - ${settingsName}/assets/spinner1.png`,
          `Theme - ${settingsName}/assets/spinner2.png`,
          `Theme - ${settingsName}/assets/spinner3.png`,
          `Theme - ${settingsName}/assets/spinner4.png`,
          `Theme - ${settingsName}/assets/spinner5.png`,
          `Theme - ${settingsName}/assets/spinner6.png`,
          `Theme - ${settingsName}/assets/spinner7.png`,
        ],
        loop: true,
        frame_time: 0.075,
      },
      'layer0.opacity': 0.6,
      content_margin: [8, 8],
    },
    // Sidebar symlink folder icon
    {
      class: 'icon_folder_dup',
      'layer0.texture': `Theme - ${settingsName}/assets/folder-dup.png`,
      'layer0.opacity': 0.5,
      'layer0.tint': `${hex2Rgb(getColor(colors, ['sideBar.foreground']))}`,
      content_margin: [8, 8],
    },
    {
      class: 'icon_folder_dup',
      parents: [{ class: 'tree_row', attributes: ['hover'] }],
      'layer0.opacity': 1,
    },
    // Sidebar file icons
    {
      class: 'icon_file_type',
      // layer0.texture is filled in by code with the relevant icon name
      'layer0.opacity': 0.6,
      content_margin: [8, 8],
    },
    {
      class: 'icon_file_type',
      parents: [{ class: 'tree_row', attributes: ['hover'] }],
      'layer0.opacity': 1.0,
    },
    {
      class: 'icon_file_type',
      parents: [{ class: 'tree_row', attributes: ['selected'] }],
      'layer0.opacity': 1.0,
    },
    //${settingsName}fileicons setting
    {
      class: 'sidebar_tree',
      settings: [`${settingsName}fileicons`],
      indent_offset: 1,
    },
    {
      class: 'disclosure_button_control',
      settings: [`${settingsName}fileicons`],
      'layer0.opacity': 0,
    },
    {
      class: 'icon_file_type',
      settings: [`!${settingsName}fileicons`],
      content_margin: [0, 0],
    },
    {
      class: 'icon_folder',
      settings: [`!${settingsName}fileicons`],
      content_margin: [0, 0],
    },
    {
      class: 'icon_folder_dup',
      settings: [`!${settingsName}fileicons`],
      content_margin: [0, 0],
    },
    {
      class: 'icon_folder_loading',
      settings: [`!${settingsName}fileicons`],
      content_margin: [0, 0],
    },

    //
    // STANDARD TEXT BUTTONS
    //

    // Default button state
    {
      class: 'button_control',
      content_margin: [4, 8, 4, 8],
      min_size: [64, 0],
      // "layer0.texture": "",
      'layer0.opacity': 1,
      'layer0.tint': `${hex2Rgb(getColor(colors, ['button.background']))}`,
      'layer0.inner_margin': [8, 8],
    },
    // Hover button state
    {
      class: 'button_control',
      attributes: ['hover'],
      // "layer0.texture": "",
      'layer0.tint': `${hex2Rgb(getColor(colors, ['button.background']))}`,
    },
    // Pressed button state
    {
      class: 'button_control',
      attributes: ['pressed'],
      // "layer0.texture": "",
      'layer0.tint': `${hex2Rgb(getColor(colors, ['button.background']))}`,
    },
    //
    // TEXT INPUT FIELD
    //

    // Text input field item
    {
      class: 'text_line_control',
      // "layer0.texture": "",
      'layer0.tint': `${hex2Rgb(getColor(colors, ['input.background']))}`,
      'layer0.opacity': 1,
      content_margin: 6,
    },

    //
    // PANEL BACKGROUNDS
    //

    // Bottom panel background
    {
      class: 'panel_control',
      // "layer0.texture": "",
      'layer0.inner_margin': [0, 0],
      'layer0.opacity': 1,
      'layer0.tint': `${hex2Rgb(getColor(colors, ['panel.background']))}`,
      content_margin: 0,
    },
    // Quick panel background
    {
      class: 'overlay_control',
      'layer0.opacity': 1,
      // "layer1.texture": "",
      'layer1.tint': `${hex2Rgb(getColor(colors, ['panel.background']))}`,
      'layer1.inner_margin': [0, 0, 0, 0],
      'layer1.opacity': 1,
      content_margin: 0,
    },

    //
    // QUICK PANEL
    //

    {
      class: 'quick_panel',
      row_padding: 8,
      'layer0.tint': `${hex2Rgb(getColor(colors, ['panel.background']))}`,
      'layer0.opacity': 1,
      dark_content: true,
    },
    {
      class: 'quick_panel_row',
      // "layer0.texture": "",
      'layer0.tint': `${hex2Rgb(getColor(colors, ['panel.background']))}`,
      'layer0.inner_margin': 8,
      'layer0.opacity': 1,
    },
    {
      class: 'quick_panel_row',
      attributes: ['selected'],
      // "layer0.texture": "",
      'layer0.tint': `${hex2Rgb(getColor(colors, ['selection.background']))}`,
    },
    {
      class: 'quick_panel_label',
      fg: `${hex2Rgb(getColor(colors, ['editor.foreground']))}`,
      match_fg: `${hex2Rgba(
        getColor(colors, ['editor.wordHighlightBackground']),
      )}`,
      selected_fg: `${hex2Rgba(
        getColor(colors, ['list.activeSelectionForeground']),
      )}`,
      selected_match_fg: `${hex2Rgba(
        getColor(colors, ['list.activeSelectionForeground']),
      )}`,
    },
    {
      class: 'quick_panel_path_label',
      fg: `${hex2Rgb(getColor(colors, ['editor.foreground']))}`,
      match_fg: `${hex2Rgba(
        getColor(colors, ['editor.wordHighlightBackground']),
      )}`,
      selected_fg: `${hex2Rgba(
        getColor(colors, ['list.activeSelectionForeground']),
      )}`,
      selected_match_fg: `${hex2Rgba(
        getColor(colors, ['list.activeSelectionForeground']),
      )}`,
    },
    {
      class: 'quick_panel_score_label',
      fg: `${hex2Rgb(getColor(colors, ['editor.foreground']))}`,
      selected_fg: `${hex2Rgba(
        getColor(colors, ['list.activeSelectionForeground']),
      )}`,
    },

    //
    // MINI QUICK PANEL
    //

    {
      class: 'mini_quick_panel_row',
      // "layer0.texture": "",
      'layer0.tint': hex2Rgb(getColor(colors, ['panel.background'])),
      'layer0.opacity': 1,
    },
    {
      class: 'mini_quick_panel_row',
      attributes: ['selected'],
      // "layer0.texture": "",
      'layer0.tint': hex2Rgb(getColor(colors, ['panel.background'])),
    },

    //
    // CODE COMPLETION DROPDOWN
    //

    {
      class: 'popup_control',
      content_margin: [0, 0],
      'layer0.tint': hex2Rgb(getColor(colors, ['panel.background'])),
      'layer0.opacity': 1,
    },
    {
      class: 'auto_complete',
      row_padding: [4, 4],
    },
    {
      class: 'auto_complete_label',
      fg: `${hex2Rgb(getColor(colors, ['editor.foreground']))}`,
      match_fg: `${hex2Rgba(
        getColor(colors, ['editor.wordHighlightBackground']),
      )}`,
      selected_fg: `${hex2Rgba(
        getColor(colors, ['list.activeSelectionForeground']),
      )}`,
      selected_match_fg: `${hex2Rgba(
        getColor(colors, ['list.activeSelectionForeground']),
      )}`,
    },
    {
      class: 'table_row',
      // "layer0.texture": "",
      'layer0.tint': hex2Rgb(getColor(colors, ['sideBar.foreground'])),
      'layer0.opacity': 0,
      'layer0.inner_margin': [3, 1],
    },
    {
      class: 'table_row',
      attributes: ['selected'],
      'layer0.opacity': 1,
    },

    //
    // BOTTOM PANEL BUTTONS
    //

    // Button group middle
    {
      class: 'icon_button_control',
      // "layer1.texture": "",
      'layer1.opacity': 0,
      content_margin: 7,
    },
    {
      class: 'icon_button_control',
      attributes: ['selected'],
      'layer0.opacity': 0,
    },
    // Button group left
    {
      class: 'icon_button_control',
      attributes: ['left'],
      // "layer0.texture": ""
    },
    // Button group left
    {
      class: 'icon_button_control',
      attributes: ['left'],
      // "layer0.texture": ""
    },
    {
      class: 'icon_button_control',
      attributes: ['left', 'selected'],
      // "layer0.texture": ""
    },
    // Button group right
    {
      class: 'icon_button_control',
      attributes: ['right'],
      // "layer0.texture": ""
    },
    {
      class: 'icon_button_control',
      attributes: ['right', 'selected'],
      // "layer0.texture": ""
    },
    // Button single
    {
      class: 'icon_button_control',
      attributes: ['left', 'right'],
      // "layer0.texture": ""
    },
    {
      class: 'icon_button_control',
      attributes: ['left', 'right', 'selected'],
      // "layer0.texture": ""
    },

    //
    // BOTTOM PANEL ICONS - GROUP 1
    //

    // Regex search button
    {
      class: 'icon_regex',
      'layer0.texture': `Theme - ${settingsName}/assets/regex.png`,
      'layer0.tint': hex2Rgb(getColor(colors, ['sideBar.foreground'])),
      'layer0.opacity': 1,
      content_margin: 8,
    },
    {
      class: 'icon_regex',
      parents: [{ class: 'icon_button_control', attributes: ['selected'] }],
      'layer0.tint': hex2Rgb(getColor(colors, ['sideBar.foreground'])),
    },
    // Case sensitive search button
    {
      class: 'icon_case',
      'layer0.texture': `Theme - ${settingsName}/assets/casesens.png`,
      'layer0.tint': hex2Rgb(getColor(colors, ['sideBar.foreground'])),
      'layer0.opacity': 1,
      content_margin: 8,
    },
    {
      class: 'icon_case',
      parents: [{ class: 'icon_button_control', attributes: ['selected'] }],
      'layer0.tint': hex2Rgb(getColor(colors, ['sideBar.foreground'])),
    },
    // Match whole word search button
    {
      class: 'icon_whole_word',
      'layer0.texture': `Theme - ${settingsName}/assets/wholeword.png`,
      'layer0.tint': hex2Rgb(getColor(colors, ['sideBar.foreground'])),
      'layer0.opacity': 1,
      content_margin: 8,
    },
    {
      class: 'icon_whole_word',
      parents: [{ class: 'icon_button_control', attributes: ['selected'] }],
      'layer0.tint': hex2Rgb(
        getColor(colors, ['editor.wordHighlightBackground']),
      ),
    },

    //
    // BOTTOM PANEL ICONS - GROUP 1 (EXTENDED: FIND IN FILES)
    //

    // Show search context button
    {
      class: 'icon_context',
      'layer0.texture': `Theme - ${settingsName}/assets/context.png`,
      'layer0.tint': hex2Rgb(getColor(colors, ['sideBar.foreground'])),
      'layer0.opacity': 1,
      content_margin: 8,
    },
    {
      class: 'icon_context',
      parents: [{ class: 'icon_button_control', attributes: ['selected'] }],
      'layer0.tint': hex2Rgb(getColor(colors, ['sideBar.foreground'])),
    },
    // Use search buffer
    {
      class: 'icon_use_buffer',
      'layer0.texture': `Theme - ${settingsName}/assets/buffer.png`,
      'layer0.tint': hex2Rgb(getColor(colors, ['sideBar.foreground'])),
      'layer0.opacity': 1,
      content_margin: 8,
    },
    {
      class: 'icon_use_buffer',
      parents: [{ class: 'icon_button_control', attributes: ['selected'] }],
      'layer0.tint': hex2Rgb(getColor(colors, ['sideBar.foreground'])),
    },

    //
    // BOTTOM PANEL ICONS - GROUP 2
    //
    // Reverse search direction button (ST2 only)
    {
      class: 'icon_reverse',
      'layer0.texture': `Theme - ${settingsName}/assets/reverse.png`,
      'layer0.tint': hex2Rgb(getColor(colors, ['sideBar.foreground'])),
      'layer0.opacity': 1,
      content_margin: 8,
    },
    {
      class: 'icon_reverse',
      parents: [{ class: 'icon_button_control', attributes: ['selected'] }],
      'layer0.tint': hex2Rgb(getColor(colors, ['sideBar.foreground'])),
    },
    // Search wrap button
    {
      class: 'icon_wrap',
      'layer0.texture': `Theme - ${settingsName}/assets/wrap.png`,
      'layer0.tint': hex2Rgb(getColor(colors, ['sideBar.foreground'])),
      'layer0.opacity': 1,
      content_margin: 8,
    },
    {
      class: 'icon_wrap',
      parents: [{ class: 'icon_button_control', attributes: ['selected'] }],
      'layer0.tint': hex2Rgb(getColor(colors, ['sideBar.foreground'])),
    },
    // Search in selection button
    {
      class: 'icon_in_selection',
      'layer0.texture': `Theme - ${settingsName}/assets/selection.png`,
      'layer0.tint': hex2Rgb(getColor(colors, ['sideBar.foreground'])),
      'layer0.opacity': 1,
      content_margin: 8,
    },
    {
      class: 'icon_in_selection',
      parents: [{ class: 'icon_button_control', attributes: ['selected'] }],
      'layer0.tint': hex2Rgb(getColor(colors, ['sideBar.foreground'])),
    },

    //
    // BOTTOM PANEL ICONS - GROUP 3
    //

    // Preserve case button
    {
      class: 'icon_preserve_case',
      'layer0.texture': `Theme - ${settingsName}/assets/lock.png`,
      'layer0.tint': hex2Rgb(getColor(colors, ['sideBar.foreground'])),
      'layer0.opacity': 1,
      content_margin: 8,
    },
    {
      class: 'icon_preserve_case',
      parents: [{ class: 'icon_button_control', attributes: ['selected'] }],
      'layer0.tint': hex2Rgb(getColor(colors, ['sideBar.foreground'])),
    },

    //
    // BOTTOM PANEL ICONS - GROUP 4
    //

    // Highlight results button
    {
      class: 'icon_highlight',
      'layer0.texture': `Theme - ${settingsName}/assets/highlight.png`,
      'layer0.tint': hex2Rgb(getColor(colors, ['list.highlightForeground'])),
      'layer0.opacity': 1,
      content_margin: 8,
    },
    {
      class: 'icon_highlight',
      parents: [{ class: 'icon_button_control', attributes: ['selected'] }],
      'layer0.tint': hex2Rgb(getColor(colors, ['list.highlightForeground'])),
    },

    //
    // SIDEBAR FOLDER COLORING
    //
    {
      class: 'disclosure_button_control',
      settings: [`${settingsName}_color_expanded_folder`],
      attributes: ['expanded'],
      'layer0.tint': hex2Rgb(getColor(colors, ['sideBar.foreground'])),
    },

    //
    // TABS SIZING
    //

    // Tab set
    {
      class: 'tabset_control',
      settings: [`${settingsName}_tabs_auto_width`],
      tab_width: 0,
    },
    {
      class: 'tabset_control',
      settings: [`${settingsName}_tabs_small`],
      tab_height: 22,
    },
    {
      class: 'tabset_control',
      settings: [`${settingsName}_tabs_normal`],
      tab_height: 28,
    },
    {
      class: 'tabset_control',
      settings: [`${settingsName}_tabs_large`],
      tab_height: 34,
    },
    {
      class: 'tabset_control',
      settings: [`${settingsName}_tabs_xlarge`],
      tab_height: 40,
    },

    //
    // TITLE BAR
    //

    {
      class: 'title_bar',
      settings: ['!disable_custom_title_bar'],
      fg: hex2Rgb(getColor(colors, ['titleBar.activeForeground'])),
      bg: hex2Rgb(getColor(colors, ['titleBar.activeBackground'])), // -00
    },
  ]
  return JSON.stringify(theme)
}