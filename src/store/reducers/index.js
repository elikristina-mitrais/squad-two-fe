import { combineReducers } from 'redux'

import transporterReducer from './transporter'

const reducer = combineReducers({
    transporter: transporterReducer,
})

export default reducer