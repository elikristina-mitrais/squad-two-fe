import { combineReducers } from 'redux'

import DriversReducer from './drivers'
import transporterReducer from './transporter'

const reducer = combineReducers({
    drivers: DriversReducer,
    transporter: transporterReducer,
})

export default reducer