import { combineReducers } from 'redux'
import iceCreamReducer from './IceCream/IceCream_Reducer'
import cakeReducer from './cakes/cakeReducer'
import { userReducer } from './user/userReducer'

const RootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    user: userReducer
})


export default RootReducer