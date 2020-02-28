module.exports = function (
  vscodeTheme,
  themePackageJson,
  colorMapping,
  fileName
) {
  return `
    <scheme name="${vscodeTheme.name}" version="${
    themePackageJson.version
  }" parent_scheme="Darcula">
      <metaInfo>
        <property name="created">${new Date()}</property>
        <property name="ide">idea</property>
        <property name="ideVersion">2019.1.0.0</property>
      </metaInfo>
      <colors>
        ${Object.keys(colorMapping.colors)
          .map(
            option =>
              `<option name="${option}" value="${colorMapping.colors[option]}" />`
          )
          .join('\n')}
      </colors>
      <attributes>
        <option name="DELETED_TEXT_ATTRIBUTES">
          <value>
            <option name="FOREGROUND" value="cccccc" />
            <option name="EFFECT_COLOR" value="cccccc" />
            <option name="EFFECT_TYPE" value="3" />
          </value>
        </option>
        <option name="DIFF_CONFLICT">
          <value>
            <option name="BACKGROUND" value="732936" />
            <option name="ERROR_STRIPE_COLOR" value="f5406d" />
          </value>
        </option>
        <option name="DIFF_DELETED">
          <value>
            <option name="BACKGROUND" value="474754" />
            <option name="ERROR_STRIPE_COLOR" value="babad9" />
          </value>
        </option>
        <option name="DIFF_INSERTED">
          <value>
            <option name="BACKGROUND" value="1e4723" />
            <option name="ERROR_STRIPE_COLOR" value="42a651" />
          </value>
        </option>
        <option name="DIFF_MODIFIED">
          <value>
            <option name="BACKGROUND" value="135280" />
            <option name="ERROR_STRIPE_COLOR" value="3399ff" />
          </value>
        </option>
        <option name="ERRORS_ATTRIBUTES">
          <value>
            <option name="EFFECT_COLOR" value="dd3962" />
            <option name="ERROR_STRIPE_COLOR" value="dd3962" />
            <option name="EFFECT_TYPE" value="2" />
          </value>
        </option>
        <option name="EVALUATED_EXPRESSION_ATTRIBUTES">
          <value>
            <option name="BACKGROUND" value="4d4d4d" />
          </value>
        </option>
        <option name="EVALUATED_EXPRESSION_EXECUTION_LINE_ATTRIBUTES">
          <value>
            <option name="BACKGROUND" value="80809e" />
          </value>
        </option>
        <option name="EXECUTIONPOINT_ATTRIBUTES">
          <value>
            <option name="BACKGROUND" value="b3773" />
          </value>
        </option>
        <option name="FOLDED_TEXT_ATTRIBUTES">
          <value>
            <option name="BACKGROUND" value="313866" />
          </value>
        </option>
        <option name="FOLLOWED_HYPERLINK_ATTRIBUTES">
          <value>
            <option name="FOREGROUND" value="50afde" />
            <option name="EFFECT_COLOR" value="4d7f99" />
            <option name="EFFECT_TYPE" value="1" />
          </value>
        </option>
        <option name="GHERKIN_REGEXP_PARAMETER">
          <value>
            <option name="FOREGROUND" value="4dacf0" />
          </value>
        </option>
        <option name="GRID_NULL_VALUE">
          <value>
            <option name="FOREGROUND" value="4dacf0" />
          </value>
        </option>
        <option name="HAML_RUBY_CODE" baseAttributes="INJECTED_LANGUAGE_FRAGMENT" />
        <option name="HTML_ATTRIBUTE_NAME">
          <value>
            <option name="FOREGROUND" value="ffffff" />
          </value>
        </option>
        <option name="HTML_ATTRIBUTE_VALUE" baseAttributes="DEFAULT_STRING" />
        <option name="HTML_ENTITY_REFERENCE">
          <value>
            <option name="FOREGROUND" value="4dacf0" />
          </value>
        </option>
        <option name="HTML_TAG">
          <value>
            <option name="FOREGROUND" value="e0957b" />
            <option name="EFFECT_TYPE" value="5" />
          </value>
        </option>
        <option name="HTML_TAG_NAME" baseAttributes="DEFAULT_KEYWORD" />
        <option name="HYPERLINK_ATTRIBUTES">
          <value>
            <option name="FOREGROUND" value="50afde" />
            <option name="EFFECT_COLOR" value="4d7f99" />
            <option name="EFFECT_TYPE" value="1" />
          </value>
        </option>
        <option name="IDENTIFIER_UNDER_CARET_ATTRIBUTES">
          <value>
            <option name="BACKGROUND" value="113623" />
            <option name="ERROR_STRIPE_COLOR" value="268053" />
            <option name="EFFECT_TYPE" value="1" />
          </value>
        </option>
        <option name="IMPLICIT_ANONYMOUS_CLASS_PARAMETER_ATTRIBUTES">
          <value>
            <option name="FOREGROUND" value="93a6f5" />
            <option name="EFFECT_COLOR" value="8495db" />
            <option name="EFFECT_TYPE" value="1" />
          </value>
        </option>
        <option name="INFO_ATTRIBUTES">
          <value>
            <option name="EFFECT_COLOR" value="b39500" />
            <option name="ERROR_STRIPE_COLOR" value="756d56" />
            <option name="EFFECT_TYPE" value="2" />
          </value>
        </option>
        <option name="INJECTED_LANGUAGE_FRAGMENT">
          <value>
            <option name="BACKGROUND" value="123020" />
          </value>
        </option>
        <option name="INLINE_PARAMETER_HINT">
          <value>
            <option name="FOREGROUND" value="757575" />
            <option name="BACKGROUND" value="333333" />
          </value>
        </option>
        <option name="INLINE_PARAMETER_HINT_CURRENT">
          <value>
            <option name="FOREGROUND" value="a6a6a6" />
            <option name="BACKGROUND" value="406a80" />
          </value>
        </option>
        <option name="INLINE_PARAMETER_HINT_HIGHLIGHTED">
          <value>
            <option name="FOREGROUND" value="a6a6a6" />
            <option name="BACKGROUND" value="666666" />
          </value>
        </option>
        <option name="JAVA_KEYWORD" baseAttributes="DEFAULT_KEYWORD" />
        <option name="JSP_DIRECTIVE_NAME" baseAttributes="DEFAULT_KEYWORD" />
        <option name="KOTLIN_ANNOTATION">
          <value>
            <option name="FOREGROUND" value="e0967b" />
          </value>
        </option>
        <option name="KOTLIN_BACKING_FIELD_VARIABLE">
          <value />
        </option>
        <option name="KOTLIN_DYNAMIC_FUNCTION_CALL">
          <value>
            <option name="FONT_TYPE" value="2" />
          </value>
        </option>
        <option name="KOTLIN_DYNAMIC_PROPERTY_CALL">
          <value>
            <option name="FONT_TYPE" value="2" />
          </value>
        </option>
        <option name="KOTLIN_LABEL">
          <value>
            <option name="FOREGROUND" value="4dacf0" />
          </value>
        </option>
        <option name="KOTLIN_NAMED_ARGUMENT">
          <value>
            <option name="FOREGROUND" value="4dacf0" />
          </value>
        </option>
        <option name="KOTLIN_SMART_CAST_RECEIVER">
          <value>
            <option name="BACKGROUND" value="153811" />
          </value>
        </option>
        <option name="KOTLIN_SMART_CAST_VALUE">
          <value>
            <option name="BACKGROUND" value="153811" />
          </value>
        </option>
        <option name="KOTLIN_SMART_CONSTANT">
          <value>
            <option name="BACKGROUND" value="153811" />
          </value>
        </option>
        <option name="KOTLIN_TYPE_PARAMETER" baseAttributes="TYPE_PARAMETER_NAME_ATTRIBUTES" />
        <option name="LESS_VARIABLE">
          <value />
        </option>
        <option name="LINE_FULL_COVERAGE">
          <value>
            <option name="FOREGROUND" value="3c5e3c" />
            <option name="FONT_TYPE" value="1" />
          </value>
        </option>
        <option name="LINE_NONE_COVERAGE">
          <value>
            <option name="FOREGROUND" value="993636" />
            <option name="FONT_TYPE" value="1" />
          </value>
        </option>
        <option name="LINE_PARTIAL_COVERAGE">
          <value>
            <option name="FOREGROUND" value="7a5e25" />
            <option name="FONT_TYPE" value="1" />
          </value>
        </option>
        <option name="LIVE_TEMPLATE_ATTRIBUTES">
          <value>
            <option name="EFFECT_COLOR" value="93a6f5" />
          </value>
        </option>
        <option name="LOG_DEBUG_OUTPUT">
          <value>
            <option name="FOREGROUND" value="3eb3b3" />
          </value>
        </option>
        <option name="LOG_ERROR_OUTPUT">
          <value>
            <option name="FOREGROUND" value="f23f6c" />
          </value>
        </option>
        <option name="LOG_EXPIRED_ENTRY">
          <value>
            <option name="FOREGROUND" value="666666" />
          </value>
        </option>
        <option name="LOG_INFO_OUTPUT">
          <value>
            <option name="FOREGROUND" value="b0bf4c" />
          </value>
        </option>
        <option name="LOG_VERBOSE_OUTPUT">
          <value>
            <option name="FOREGROUND" value="67bbe6" />
          </value>
        </option>
        <option name="MARKED_FOR_REMOVAL_ATTRIBUTES">
          <value>
            <option name="EFFECT_COLOR" value="ff0d25" />
            <option name="EFFECT_TYPE" value="3" />
          </value>
        </option>
        <option name="MATCHED_BRACE_ATTRIBUTES">
          <value>
            <option name="BACKGROUND" value="4e4766" />
            <option name="FONT_TYPE" value="1" />
          </value>
        </option>
        <option name="NOT_TOP_FRAME_ATTRIBUTES">
          <value>
            <option name="BACKGROUND" value="172d4d" />
          </value>
        </option>
        <option name="NOT_USED_ELEMENT_ATTRIBUTES">
          <value>
            <option name="FOREGROUND" value="8c8c8c" />
            <option name="EFFECT_COLOR" value="999999" />
            <option name="EFFECT_TYPE" value="2" />
          </value>
        </option>
        <option name="PROPERTIES.INVALID_STRING_ESCAPE" baseAttributes="DEFAULT_INVALID_STRING_ESCAPE" />
        <option name="REGEXP.CHAR_CLASS">
          <value>
            <option name="FOREGROUND" value="e8bf6a" />
          </value>
        </option>
        <option name="REGEXP.META">
          <value>
            <option name="FOREGROUND" value="cc7832" />
          </value>
        </option>
        <option name="REGEXP.QUOTE_CHARACTER">
          <value>
            <option name="FOREGROUND" value="cc7832" />
          </value>
        </option>
        <option name="SASS_MIXIN">
          <value />
        </option>
        <option name="SASS_VARIABLE">
          <value>
            <option name="FOREGROUND" value="4dacf0" />
          </value>
        </option>
        <option name="SEARCH_RESULT_ATTRIBUTES">
          <value>
            <option name="BACKGROUND" value="214d3a" />
            <option name="ERROR_STRIPE_COLOR" value="268053" />
          </value>
        </option>
        <option name="SPY-JS.EXCEPTION">
          <value>
            <option name="BACKGROUND" value="260003" />
            <option name="EFFECT_TYPE" value="2" />
          </value>
        </option>
        <option name="SPY-JS.EXECUTION_TIME">
          <value>
            <option name="FOREGROUND" value="aaff" />
          </value>
        </option>
        <option name="SPY-JS.FUNCTION_SCOPE">
          <value>
            <option name="BACKGROUND" value="1233" />
            <option name="EFFECT_TYPE" value="2" />
          </value>
        </option>
        <option name="SPY-JS.PATH_LEVEL_ONE">
          <value>
            <option name="BACKGROUND" value="153811" />
            <option name="EFFECT_TYPE" value="2" />
          </value>
        </option>
        <option name="SPY-JS.PATH_LEVEL_TWO">
          <value>
            <option name="EFFECT_COLOR" value="cccccc" />
            <option name="EFFECT_TYPE" value="1" />
          </value>
        </option>
        <option name="SPY-JS.PROGRAM_SCOPE">
          <value>
            <option name="BACKGROUND" value="1233" />
            <option name="EFFECT_TYPE" value="2" />
          </value>
        </option>
        <option name="Static method access">
          <value>
            <option name="FOREGROUND" value="93a6f5" />
            <option name="FONT_TYPE" value="2" />
          </value>
        </option>
        <option name="Static property reference ID">
          <value>
            <option name="FOREGROUND" value="93a6f5" />
            <option name="FONT_TYPE" value="2" />
          </value>
        </option>
        <option name="TAPESTRY_COMPONENT_TAG">
          <value>
            <option name="FOREGROUND" value="cc7832" />
          </value>
        </option>
        <option name="TEMPLATE_VARIABLE_ATTRIBUTES">
          <value>
            <option name="FOREGROUND" value="93a6f5" />
          </value>
        </option>
        <option name="TEXT">
          <value>
            <option name="FOREGROUND" value="c9c9d1" />
            <option name="BACKGROUND" value="1d1d26" />
            <option name="EFFECT_TYPE" value="5" />
          </value>
        </option>
        <option name="TEXT_SEARCH_RESULT_ATTRIBUTES">
          <value>
            <option name="FOREGROUND" value="c9c9d1" />
            <option name="BACKGROUND" value="2d5959" />
            <option name="EFFECT_COLOR" value="1a1a" />
            <option name="ERROR_STRIPE_COLOR" value="3d9999" />
          </value>
        </option>
        <option name="TODO_DEFAULT_ATTRIBUTES">
          <value>
            <option name="FOREGROUND" value="9db324" />
            <option name="FONT_TYPE" value="2" />
            <option name="ERROR_STRIPE_COLOR" value="93c72c" />
          </value>
        </option>
        <option name="TYPE_PARAMETER_NAME_ATTRIBUTES">
          <value>
            <option name="FOREGROUND" value="37cccc" />
          </value>
        </option>
        <option name="UNMATCHED_BRACE_ATTRIBUTES">
          <value>
            <option name="FOREGROUND" value="f23f6c" />
          </value>
        </option>
        <option name="VELOCITY_DIRECTIVE">
          <value>
            <option name="FOREGROUND" value="e8bf6a" />
          </value>
        </option>
        <option name="VELOCITY_KEYWORD">
          <value>
            <option name="FOREGROUND" value="cc7832" />
          </value>
        </option>
        <option name="VELOCITY_SCRIPTING_BACKGROUND">
          <value>
            <option name="BACKGROUND" value="1233" />
          </value>
        </option>
        <option name="WARNING_ATTRIBUTES">
          <value>
            <option name="BACKGROUND" value="403618" />
            <option name="ERROR_STRIPE_COLOR" value="bf8915" />
            <option name="EFFECT_TYPE" value="2" />
          </value>
        </option>
        <option name="WRITE_IDENTIFIER_UNDER_CARET_ATTRIBUTES">
          <value>
            <option name="BACKGROUND" value="472047" />
            <option name="ERROR_STRIPE_COLOR" value="bf3bbf" />
          </value>
        </option>
        <option name="WRITE_SEARCH_RESULT_ATTRIBUTES">
          <value>
            <option name="BACKGROUND" value="6b2b6b" />
            <option name="ERROR_STRIPE_COLOR" value="bf3bbf" />
          </value>
        </option>
        <option name="WRONG_REFERENCES_ATTRIBUTES">
          <value>
            <option name="FOREGROUND" value="f23f6c" />
            <option name="ERROR_STRIPE_COLOR" value="dd3962" />
          </value>
        </option>
        <option name="XML_ATTRIBUTE_NAME" baseAttributes="DEFAULT_ATTRIBUTE" />
        <option name="XML_ENTITY_REFERENCE">
          <value>
            <option name="FOREGROUND" value="4dacf0" />
          </value>
        </option>
        <option name="XML_PROLOGUE">
          <value>
            <option name="FOREGROUND" value="c7a65d" />
          </value>
        </option>
        <option name="XML_TAG">
          <value>
            <option name="FOREGROUND" value="c7a65d" />
          </value>
        </option>
        <option name="XML_TAG_NAME">
          <value>
            <option name="FOREGROUND" value="c7a65d" />
          </value>
        </option>
        <option name="XPATH.KEYWORD">
          <value>
            <option name="FOREGROUND" value="cc7832" />
          </value>
        </option>
        <option name="XPATH.XPATH_NAME">
          <value>
            <option name="FOREGROUND" value="da5a6c" />
          </value>
        </option>
        <option name="YAML_ANCHOR">
          <value>
            <option name="FOREGROUND" value="c7a65d" />
          </value>
        </option>
      </attributes>
    </scheme>
  `
}
