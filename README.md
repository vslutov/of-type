# @vslutov/ofType

[![Build Status](https://travis-ci.org/vslutov/ofType.svg?branch=master)](https://travis-ci.org/vslutov/ofType)
[![npm version](https://badge.fury.io/js/%40vslutov%2FofType.svg)](https://badge.fury.io/js/%40vslutov%2FofType)
[![Greenkeeper badge](https://badges.greenkeeper.io/vslutov/ofType.svg)](https://greenkeeper.io/)
[![Coverage Status](https://coveralls.io/repos/github/vslutov/ofType/badge.svg?branch=master)](https://coveralls.io/github/vslutov/ofType?branch=master)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

Operator ofType for [redux-observable](https://redux-observable.js.org/), compatible with [redux-batch-middleware](https://github.com/mrydengren/redux-batch-middleware)

## Install
```sh
npm install @vslutov/ofType
```

## Code example

```js
import { ofType } from '@vslutov/ofType'

const setProp = createAction('PROP/SET')

const propEpic = action$ => action$.pipe(
  ofType(setProp, /* other actions */),
  // do something usefull
)
```
