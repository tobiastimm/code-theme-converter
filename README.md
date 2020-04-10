# code-theme-converter

[![downloads](http://img.shields.io/npm/dm/code-theme-converter.svg?style=flat)](https://www.npmjs.org/package/code-theme-converter) [![npm version](https://badge.fury.io/js/code-theme-converter.svg)](https://www.npmjs.com/package/code-theme-converter)

> Convert any vscode theme with ease!

**This project is very WIP. I will try to finish it within the next weeks. If you wanna help, please reach out to me**

I'm mainly working with Visual Studio Code nowadays and also created some themes. There are still some moments, where I prefer to work with other editors like Sublime Text or WebStorm. It bugs me that these editors don't have my vscode themes, so I've created this package to easily convert my themes.

**Please use this as a starting point for your theme in Sublime or IDEA. 100% perfect conversion of every theme is kinda hard 😅**

## To Do

### code2subl

- [x] Create Color Scheme
- [ ] Create UI Theme
- [ ] Convert specific syntax
- [ ] Git Gutter etc.
- [ ] Tests
- [ ] CI
- [ ] Docs

### code2idea

- [ ] Create Color Scheme
- [ ] Create UI Theme
- [ ] Convert specific syntax
- [ ] Tests
- [ ] CI
- [ ] Docs

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
- `-V`, `--version`: Output the version number
- `-h`, `--help`: Output usage information

#### Example

```sh
code2subl https://github.com/tobiastimm/raiju.git
```

### code2idea (Not working atm)

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
