import { BUY_CAKE } from './cakeTypes'

export const buyCake = (number = 1) => {      //action creator
    return {
        type: BUY_CAKE,
        payload: number
    }
}
