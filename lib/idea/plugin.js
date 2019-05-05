module.exports = function({ plugin, vendor, theme }) {
  return `<idea-plugin>
    <id>${plugin.id}</id>
    <name>${plugin.name}</name>
    <version>${plugin.version}</version>
    <vendor email="${vendor.email}" url="${vendor.url}">${vendor.name}</vendor>

    <description><![CDATA[
    ${plugin.description}]]></description>

    <change-notes><![CDATA[
    ${plugin.changelog}]]>
    </change-notes>

    <idea-version since-build="191.0"/>

    <depends>com.intellij.modules.lang</depends>

    <extensions defaultExtensionNs="com.intellij">
      <!-- Add your extensions here -->
      <themeProvider id="${plugin.uuid}" path="/${theme.name}.theme.json"/>
    </extensions>

    <actions>
      <!-- Add your actions here -->
    </actions>

  </idea-plugin>`
}
