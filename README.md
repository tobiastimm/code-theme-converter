# code-theme-converter

[![CircleCI](https://circleci.com/gh/tobiastimm/code-theme-converter.svg?style=svg)](https://circleci.com/gh/tobiastimm/code-theme-converter)[![downloads](http://img.shields.io/npm/dm/code-theme-converter.svg?style=flat)](https://www.npmjs.org/package/code-theme-converter) [![npm version](https://badge.fury.io/js/code-theme-converter.svg)](https://www.npmjs.com/package/code-theme-converter)

> Convert any vscode theme with ease!

I'm mainly working with Visual Studio Code nowadays and also created some themes. There are still some moments, where I prefer to work with other editors like Sublime Text or WebStorm. It bugs me that these editors don't have my vscode themes, so I've created this package to easily convert my themes.

\*_Please use this as a starting point for your theme in Sublime Text 3 or IDEA_

## Install

Install using `npm`

```sh
npm i -g code-theme-converter
```

Install using `yarn`

```sh
yarn global add code-theme-converter
```

## Usage

### code2subl

```sh
code2subl <repo> [options]
```

#### Options

- `-S`, `--save`: Install theme into Sublime Text (default: false)
- `-d`, `--directory`: Overwrite directory containing the themes (default: "themes")
- `-T`, `--as-tm-theme`: Convert to `.tmTheme` instead of `.sublime-color-scheme` (default: false)
- `-V`, `--version`: Output the version number
- `-h`, `--help`: Output usage information

#### Example

```sh
code2subl https://github.com/tobiastimm/raiju.git
```

### code2idea (Converted theme not working atm!)

```sh
code2idea <repo> [options]
```

#### Options

- `-d`, `--directory`: Overwrite directory containing the themes (default: "themes")
- `-V`, `--version`: Output the version number
- `-h`, `--help`: Output usage information

#### Example

```sh
code2idea https://github.com/tobiastimm/raiju.git
```

## License

[MIT](./LICENSE)
