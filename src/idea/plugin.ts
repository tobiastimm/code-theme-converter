import { parse } from 'js2xmlparser'
import { IdeaTheme } from '../types/idea'

module.exports = function createPluginXml ({
  plugin,
  vendor,
  theme
}: IdeaTheme) {
  return parse('idea-plugin', {
    id: {
      '#': plugin.id
    },
    name: {
      '#': plugin.name
    },
    version: {
      '#': plugin.version
    },
    vendor: {
      '@': {
        email: vendor.email,
        url: vendor.url
      },
      '#': vendor.name
    },
    description: {
      '#': `<![CDATA[${plugin.description}]]>`
    },
    'change-notes': {
      '#': `<![CDATA[${plugin.changelog}]]>`
    },
    'idea-version': {
      '@': {
        'since-build': '191.0'
      }
    },
    depends: {
      '#': 'com.intellij.modules.lang'
    },
    extensions: {
      '@': {
        defaultExtensionNs: 'com.intellij'
      },
      themeProvider: {
        '@': {
          id: plugin.id,
          path: `/${theme.name}.theme.json`
        }
      }
    },
    actions: {}
  })
}
