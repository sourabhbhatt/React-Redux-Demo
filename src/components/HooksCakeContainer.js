import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { buyCake } from '../redux'

function HooksCakeContainer() {
    const numberofcakes = useSelector(state => state.cake.NumberOfCakes)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>number of cakes - {numberofcakes}</h2>
            <button onClick={() => dispatch(buyCake())}>BUY CAkES</button>
        </div>
    )
}

export default HooksCakeContainer
