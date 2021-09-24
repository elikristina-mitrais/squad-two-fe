import { combineReducers } from 'redux'

import DriversReducer from './drivers'

const reducer = combineReducers({
  drivers: DriversReducer,
})

export default reducer