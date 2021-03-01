import React from 'react'
import { buyCake } from '../redux'
import { connect } from 'react-redux'

function CakeContainer(props) {
    return (
        <div>
            <h1>Number Of cakes-{props.NumberOfCakes}</h1>
            <button onClick={props.buyCake}>Buy Cake </button>
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
        buyCake: () => dispatch(buyCake())
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProp
)(
    CakeContainer)
