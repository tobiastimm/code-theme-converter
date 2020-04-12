import js2xmlparser from 'js2xmlparser'
import { CodeTheme } from 'src/util/vscode'
import {
  IdeaColorNames,
  IdeaColor,
  IdeaAttributeNames,
  IdeaAttribute
} from 'src/types/idea'

export interface IdeaColorScheme {
  name: string
  version: string
  parentScheme?: string
  metaInfo: {
    created: Date
    ide: 'idea'
    ideVersion: '2019.1.0.0'
  }
  colors: {
    [key in IdeaColorNames]: IdeaColor
  }
  attributes: {
    [key in IdeaAttributeNames]: IdeaAttribute
  }
}

function ideaColorScheme(vscodeTheme: CodeTheme): Partial<IdeaColorScheme> {
  const { name } = vscodeTheme
  return {
    name,
    metaInfo: {
      created: new Date(),
      ide: 'idea',
      ideVersion: '2019.1.0.0'
    }
  }
}

function mapToXmlObject(ideaColorScheme: Partial<IdeaColorScheme>): unknown {
  return ideaColorScheme
}

export function convertToIdea(vscodeTheme: CodeTheme): void {
  console.log(
    js2xmlparser.parse('scheme', mapToXmlObject(ideaColorScheme(vscodeTheme)))
  )
}
