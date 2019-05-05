const { getColor, findScopeColor } = require('../util')

module.exports = function({ colors, tokenColors }) {
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
        'editor.foreground',
      ),
      CONSOLE_BACKGROUND_KEY: getColorForIdea(
        'panel.background',
        'sideBar.background',
      ),
      DELETED_LINES_COLOR: getColorForIdea('editorGutter.deletedBackground'),
      DIFF_SEPARATORS_BACKGROUND: getColorForIdea('panel.background'),
      DOCUMENTATION_COLOR: findScopeColorForIdea('comment'),
      ERROR_HINT: getColorForIdea('editorError.foreground'),
      FILESTATUS_ADDED: getColorForIdea(
        'gitDecoration.addedResourceForeground',
      ),
      FILESTATUS_COPIED: getColorForIdea(
        'gitDecoration.modifiedResourceForeground',
      ),
      FILESTATUS_DELETED: getColorForIdea(
        'gitDecoration.deletedResourceForeground',
      ),
      FILESTATUS_IDEA_FILESTATUS_DELETED_FROM_FILE_SYSTEM: getColorForIdea(
        'gitDecoration.deletedResourceForeground',
      ),
      FILESTATUS_IDEA_FILESTATUS_IGNORED: getColorForIdea(
        'gitDecoration.untrackedResourceForeground',
      ),
      FILESTATUS_MERGED: getColorForIdea(
        'gitDecoration.modifiedResourceForeground',
      ),
      FILESTATUS_MODIFIED: getColorForIdea(
        'gitDecoration.modifiedResourceForeground',
      ),
      FILESTATUS_RENAMED: getColorForIdea(
        'gitDecoration.modifiedResourceForeground',
      ),
      FILESTATUS_UNKNOWN: getColorForIdea(
        'gitDecoration.untrackedResourceForeground',
      ),
      FILESTATUS_addedOutside: getColorForIdea(
        'gitDecoration.addedResourceForeground',
      ),
      FOLDED_TEXT_BORDER_COLOR: getColorForIdea('sideBar.foreground'),
      GUTTER_BACKGROUND: getColorForIdea('editorGutter.background'),
      INDENT_GUIDE: getColorForIdea('editorIndentGuide.background'),
      INFORMATION_HINT: getColorForIdea('editorOverviewRuler.infoForeground'),
      LINE_NUMBERS_COLOR: getColorForIdea('editorLineNumber.foreground'),
      LINE_NUMBER_ON_CARET_ROW_COLOR: getColorForIdea(
        'editorLineNumber.foreground',
      ),
      METHOD_SEPARATORS_COLOR: getColorForIdea('editor.foreground'),
      MODIFIED_LINES_COLOR: getColorForIdea(
        'editorOverviewRuler.modifiedForeground',
      ),
      NOTIFICATION_BACKGROUND: getColorForIdea('notifications.background'),
      QUESTION_HINT: getColorForIdea('editorOverviewRuler.infoForeground'),
      RECENT_LOCATIONS_SELECTION: getColorForIdea(
        'editorOverviewRuler.infoForeground',
      ),
      RECURSIVE_CALL_ATTRIBUTES: getColorForIdea(
        'editorOverviewRuler.infoForeground',
      ),
      RIGHT_MARGIN_COLOR: getColorForIdea('editorOverviewRuler.infoForeground'),
      SELECTED_INDENT_GUIDE: getColorForIdea('editor.lineHighlightBackground'),
      SELECTED_TEARLINE_COLOR: getColorForIdea(
        'editor.lineHighlightBackground',
      ),
      SEPARATOR_BELOW_COLOR: getColorForIdea('editorWhitespace.foreground'),
      SOFT_WRAP_SIGN_COLOR: getColorForIdea('editorWhitespace.foreground'),
      TEARLINE_COLOR: getColorForIdea('editor.foreground'),
      VCS_ANNOTATIONS_COLOR_1: getColorForIdea(
        'gitDecoration.addedResourceForgeround',
      ),
      VCS_ANNOTATIONS_COLOR_2: getColorForIdea(
        'gitDecoration.modifiedResourceForeground',
      ),
      VCS_ANNOTATIONS_COLOR_3: getColorForIdea(
        'gitDecoration.deletedResourceForeground',
      ),
      VCS_ANNOTATIONS_COLOR_4: getColorForIdea(
        'gitDecoration.untrackedResourceForeground',
      ),
      VCS_ANNOTATIONS_COLOR_5: getColorForIdea(
        'gitDecoration.conflictingResourceForeground',
      ),
      VISUAL_INDENT_GUIDE: getColorForIdea('editorWhitespace.foreground'),
      WHITESPACES_MODIFIED_LINES_COLOR: getColorForIdea(
        'gitDecoration.modifiedResourceForeground',
      ),
      WHITESPACES: getColorForIdea('editorWhitespace.foreground'),
    },
  }
}
