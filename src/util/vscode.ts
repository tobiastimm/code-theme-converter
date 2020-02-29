import fs from 'fs-extra'
import path from 'path'
import json5 from 'json5'

export interface EditorColors {
  [key: string]: string
}

export interface TokenColor {
  name?: string
  scope?: string | string[]
  settings?: {
    fontStyle?: 'italic' | 'normal' | 'bold' | 'bold italic'
    foreground?: string
    background?: string
  }
  tokenColors?: TokenColor[]
}

export interface CodeTheme {
  name: string
  author: string
  maintainers: string[]
  type: 'light' | 'dark'
  colors: EditorColors
}

export interface CodeThemeEntry {
  label: string
  uiTheme: 'vs-dark' | 'vs-light'
  path: string
}

export interface CodeThemePackage {
  name: string
  displayName: string
  description: string
  license: string
  version: string
  publisher: string
  preview: boolean
  engines: {
    vscode: string
  }
  keywords: string[]
  categories: string[]
  contributes: {
    themes: CodeThemeEntry[]
  }
}

export function findEditorColor(
  colors: EditorColors = {},
  ...fieldNames: string[]
): string {
  for (const field of fieldNames) {
    if (Object.prototype.hasOwnProperty.call(colors, field)) {
      return colors[field]
    }
    continue
  }
  return ''
}

export function findTokenColorForScope(
  tokenColors: TokenColor[] = [],
  scope: string = ''
): TokenColor | null {
  for (const token of tokenColors) {
    const tokenScope = token.scope
    let isDefined = false
    if (typeof tokenScope === 'string') {
      isDefined = tokenScope.includes(scope)
    } else if (Array.isArray(tokenScope)) {
      isDefined =
        tokenScope.filter(element => element.includes(scope)).length > 0
    } else {
      return null
    }
    if (isDefined) {
      return token
    }
  }
  return null
}

export async function readCodeTheme(
  themeDir: string,
  theme: string
): Promise<CodeTheme> {
  return new Promise((resolve, reject) => {
    fs.readFile(path.join(themeDir, theme), (err, data) => {
      // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
      if (!err) {
        const vscodeTheme: CodeTheme = json5.parse(data.toString('utf8'))
        resolve(vscodeTheme)
      }
      reject(err)
    })
  })
}

export async function readCodeThemePackage(
  dir: string
): Promise<CodeThemePackage> {
  return new Promise((resolve, reject) => {
    fs.readFile(path.join(dir, 'package.json'), function(err, data) {
      // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
      if (!err) {
        const packageJson: CodeThemePackage = JSON.parse(data.toString('utf8'))
        resolve(packageJson)
      }
      reject(err)
    })
  })
}
