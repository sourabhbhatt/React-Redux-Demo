import { isInaccessible } from '@testing-library/react';
import { BuyIceCream } from './IceCream_type'

const initialState = {
    numberOfIceCream: 20
}

const iceCreamReducer = (state = initialState, action) => {
    switch (action.type) {
        case BuyIceCream:
            return {
                ...state,
                numberOfIceCream: state.numberOfIceCream - 1
            }
        default: return state
    }
}
export default iceCreamReducer