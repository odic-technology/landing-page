import { infoReducer } from './infoReducer'
import { combineReducers } from 'redux'

export const Reducers = combineReducers({
  infoState: infoReducer
})
