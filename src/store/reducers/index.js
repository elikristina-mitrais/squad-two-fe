import { combineReducers } from 'redux'

import ShipmentsReducer from './shipment'
import TrucksReducer from './truck'
import DriversReducer from './driver'

const reducer = combineReducers({
  shipments: ShipmentsReducer,
  trucks: TrucksReducer,
  drivers: DriversReducer,
})

export default reducer