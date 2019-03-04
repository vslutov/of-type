import { mergeMap } from 'rxjs/operators'
import { type as batchType } from 'redux-batch-middleware'

const keyHasType = (type, key) => {
  return type === key || (typeof key === 'function' && type === key.toString())
}

const keysHasType = (type, keys) => {
  for (let key of keys) {
    if (keyHasType(type, key)) {
      return true
    }
  }
  return false
}

export const ofType = (...keys) => (source) => source.pipe(
  mergeMap((action) => {
    if (keysHasType(action.type, keys)) {
      return [action]
    }
    if (action.type === batchType) {
      return action.payload.filter(subAction => keysHasType(subAction.type, keys))
    }
    return []
  })
)
