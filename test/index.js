import test from 'ava'
import { of } from 'rxjs'
import { tap, count } from 'rxjs/operators'
import { type as batchType } from 'redux-batch-middleware'
import { createAction } from 'redux-actions'

import { ofType } from '../src'

test('ignore wrong type', async t => {
  const action = {
    type: 'WRONG_TYPE'
  }

  return of(action).pipe(
    ofType('RIGHT_TYPE'),
    count(),
    tap((emitCount) => t.is(emitCount, 0))
  ).toPromise()
})

test('filter right type', async t => {
  const action = {
    type: 'RIGHT_TYPE'
  }

  return of(action).pipe(
    ofType('RIGHT_TYPE'),
    tap((act) => t.is(act, action)),
    count(),
    tap((emitCount) => t.is(emitCount, 1))
  ).toPromise()
})

test('filter multiple types', async t => {
  const action = {
    type: 'RIGHT_TYPE'
  }

  return of(action).pipe(
    ofType('SOME_TYPE', 'RIGHT_TYPE'),
    tap((act) => t.is(act, action)),
    count(),
    tap((emitCount) => t.is(emitCount, 1))
  ).toPromise()
})

test('filter batch action', async t => {
  const action = {
    type: 'RIGHT_TYPE'
  }

  of({
    type: batchType,
    payload: [action]
  }).pipe(
    ofType('RIGHT_TYPE'),
    tap((act) => t.is(act, action)),
    count(),
    tap((emitCount) => t.is(emitCount, 1))
  ).toPromise()
})

test('work with redux-actions', async t => {
  const actionType = createAction('RIGHT_TYPE')
  const action = actionType()

  of(action).pipe(
    ofType(actionType),
    tap((act) => t.is(act, action)),
    count(),
    tap((emitCount) => t.is(emitCount, 1))
  ).toPromise()
})
