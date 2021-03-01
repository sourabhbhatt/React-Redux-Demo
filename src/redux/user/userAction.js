import axios from 'axios'
import { FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE } from './userTypes'

export const fetchUserRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}
export const fetchUserSuccess = user => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: user
    }
}
export const fetchUserFailure = error => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}

export const fetchUsers = () => {
    return (dispatch) => {

        dispatch(fetchUserRequest)

        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                const users = response.data
                dispatch(fetchUserSuccess(users))
            })
            .catch(err => {
                const errorMsg = err.message
                dispatch(fetchUserFailure(errorMsg))
            })
    }
}