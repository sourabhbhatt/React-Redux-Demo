import { BUY_CAKE } from "./cakeTypes"

const initialState = {
    NumberOfCakes: 10
}

const cakeReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_CAKE:
            return {
                ...state,
                NumberOfCakes: state.NumberOfCakes - action.payload
            }
        default: return state
    }
}
export default cakeReducer;