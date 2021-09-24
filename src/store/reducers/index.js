import { combineReducers } from 'redux'

import DriversReducer from './drivers'
import transporterReducer from './transporter'
import ShipmentReducer from './shipments'

const reducer = combineReducers({
    drivers: DriversReducer,
    transporter: transporterReducer,
    shipments: ShipmentReducer,
})

export default reducer