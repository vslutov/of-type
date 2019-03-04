# @vslutov/of-type

[![Build Status](https://travis-ci.org/vslutov/of-type.svg?branch=master)](https://travis-ci.org/vslutov/of-type)
[![npm version](https://badge.fury.io/js/%40vslutov%2Fof-type.svg)](https://badge.fury.io/js/%40vslutov%2Fof-type)
[![Greenkeeper badge](https://badges.greenkeeper.io/vslutov/of-type.svg)](https://greenkeeper.io/)
[![Coverage Status](https://coveralls.io/repos/github/vslutov/of-type/badge.svg?branch=master)](https://coveralls.io/github/vslutov/of-type?branch=master)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

Operator ofType for [redux-observable](https://redux-observable.js.org/), compatible with [redux-batch-middleware](https://github.com/mrydengren/redux-batch-middleware)

## Install
```sh
npm install @vslutov/of-type
```

## Code example

```js
import { ofType } from '@vslutov/of-type'

const setProp = createAction('PROP/SET')

const propEpic = action$ => action$.pipe(
  ofType(setProp, /* other actions */),
  // do something usefull
)
```
