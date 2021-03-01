import React, { useState } from 'react'
import { buyCake } from '../redux'
import { connect } from 'react-redux'

function NewCakeContainer(props) {
    const [number, setNumber] = useState()
    return (
        <div>
            <h1> Number Of cakes - {props.NumberOfCakes} </h1>
            <input type="text" value={number} onChange={(e) => setNumber(e.target.value)} />
            <button onClick={() => props.buyCake(number)}>Buy Number Cakess </button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        NumberOfCakes: state.cake.NumberOfCakes
    }
}

const mapDispatchToProp = dispatch => {
    return {
        buyCake: number => dispatch(buyCake(number))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProp
)(
    NewCakeContainer)
