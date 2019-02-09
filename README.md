# vscode-theme-to-sublime-text

[![downloads](http://img.shields.io/npm/dm/vscode-theme-to-sublime-text.svg?style=flat)](https://www.npmjs.org/package/vscode-theme-to-sublime-text) [![npm version](https://badge.fury.io/js/vscode-theme-to-sublime-text.svg)](https://www.npmjs.com/package/vscode-theme-to-sublime-text)

> Convert any Visual Studio Code Theme to Sublime Text 3

I'm mainly working with Visual Studio Code nowadays and also created some themes. There are still some moments, where I prefer to work with Sublime Text and I was always annoyed that I haven't ported my themes to Sublime. So I've created this package to easily convert my themes for Sublime Text.

## To Do

- [x] Create Color Scheme
- [ ] Create UI Theme
- [ ] Convert specific syntax
- [ ] Git Gutter etc.
- [ ] Tests
- [ ] CI
- [ ] Docs

## Install

Install using `npm`

```sh
npm install --global --save vscode-theme-to-sublime-text
```

## Usage

```sh
vsc2subl <repo-url> [options]
```

### Options:

- `-S`, `--save`: Install theme into Sublime Text (default: false)
- `-d`, `--directory`: Overwrite directory containing the themes (default: "themes")
- `-V`, `--version`: Output the version number
- `-h`, `--help`: Output usage information

## Example

```sh
vsc2subl https://github.com/tobiastimm/raiju.git
```

## License

[MIT](./LICENSE)
