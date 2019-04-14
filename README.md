# editor-theme-converter

[![downloads](http://img.shields.io/npm/dm/vscode-theme-to-sublime-text.svg?style=flat)](https://www.npmjs.org/package/vscode-theme-to-sublime-text) [![npm version](https://badge.fury.io/js/vscode-theme-to-sublime-text.svg)](https://www.npmjs.com/package/vscode-theme-to-sublime-text)

> Convert any editor theme with ease!

**Reason rewrite is a WIP. Will try to finish the features in JS first**

I'm mainly working with Visual Studio Code nowadays and also created some themes. There are still some moments, where I prefer to work with other editors like Sublime Text or WebStorm. It bugs me that these editors don't have my vscode themes, so I've created this package to easily convert my themes.

## To Do

### vscode-to-sublime-text

- [x] Create Color Scheme
- [ ] Create UI Theme
- [ ] Convert specific syntax
- [ ] Git Gutter etc.
- [ ] Tests
- [ ] CI
- [ ] Docs

### vscode-to-idea

- [ ] Create Color Scheme
- [ ] Create UI Theme
- [ ] Convert specific syntax
- [ ] Tests
- [ ] CI
- [ ] Docs

### sublime-text-to-vscode

- [ ] Create Color Scheme
- [ ] Create UI Theme
- [ ] Convert specific syntax
- [ ] Git Gutter etc.
- [ ] Tests
- [ ] CI
- [ ] Docs

### idea-to-vscode

- [ ] Create Color Scheme
- [ ] Create UI Theme
- [ ] Convert specific syntax
- [ ] Tests
- [ ] CI
- [ ] Docs

## Install

Install using `npm`

```sh
npm install --global --save editor-theme-converter
```

## Usage

### vscode-to-sublime-text

```sh
code2subl <repo> [options]
```

#### Options

- `-S`, `--save`: Install theme into Sublime Text (default: false)
- `-d`, `--directory`: Overwrite directory containing the themes (default: "themes")
- `-V`, `--version`: Output the version number
- `-h`, `--help`: Output usage information

#### Example

```sh
vsc2subl https://github.com/tobiastimm/raiju.git
```

## License

[MIT](./LICENSE)
