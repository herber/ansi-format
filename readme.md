# ansi-format [![Build Status](https://travis-ci.org/herber/ansi-format.svg?branch=master)](https://travis-ci.org/herber/ansi-format) [![codecov](https://codecov.io/gh/herber/ansi-format/branch/master/graph/badge.svg)](https://codecov.io/gh/herber/ansi-format)

> Simple ansi formatter

## Install

```
$ npm install ansi-format
```

## Usage

```js
const ansiFormat = require('ansi-format');

ansiFormat('bold');
//=> '\x1b[1m'

ansiFormat(['red', 'green']);
//=> '\x1b[31;32m'
```

## API

### ansiFormat(styles)

#### input

Type: `string`, `array`

An array or a string representing styles

###### Supported styles

| Name | Value |
| --- | --- |
| reset | `\u001b[0m` |
| bold | `\u001b[1m` |
| italic | `\u001b[3m` |
| underline | `\u001b[4m` |
| fontDefault | `\u001b[10m` |
| font2 | `\u001b[11m` |
| font3 | `\u001b[12m` |
| font4 | `\u001b[13m` |
| font5 | `\u001b[14m` |
| font6 | `\u001b[15m` |
| imageNegative | `\u001b[7m` |
| imagePositive | `\u001b[27m` |
| black | `\u001b[30m` |
| red | `\u001b[31m` |
| green | `\u001b[32m` |
| yellow | `\u001b[33m` |
| blue | `\u001b[34m` |
| magenta | `\u001b[35m` |
| cyan | `\u001b[36m` |
| white | `\u001b[37m` |
| gray | `\u001b[90m` |
| bg-black | `\u001b[40m` |
| bg-red | `\u001b[41m` |
| bg-green | `\u001b[42m` |
| bg-yellow | `\u001b[43m` |
| bg-blue | `\u001b[44m` |
| bg-magenta | `\u001b[45m` |
| bg-cyan | `\u001b[46m` |
| bg-white | `\u001b[47m` |
| bg-gray | `\u001b[100m` |

## License

MIT © [Tobias Herber](http://tobihrbr.com)
