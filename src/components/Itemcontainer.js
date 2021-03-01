import React from 'react'
import { connect } from 'react-redux'
import { buyIceCream, buyCake } from '../redux'

function Itemcontainer(props) {
    return (
        <div>
            <h2>item- {props.item} </h2>
            <button onClick={props.buyItem}>Buy items</button>
        </div>
    )
}

const mapStateToProp = (state, ownProps) => {
    const itemState = ownProps.cake ? state.cake.NumberOfCakes : state.iceCream.numberOfIceCream
    return {
        item: itemState
    }
}

const mapDispatchToProp = (dispatch, ownProps) => {
    const dispatchFunction = ownProps.cake ?
        () => dispatch(buyCake()) :
        () => dispatch(buyIceCream())

    return {
        buyItem: dispatchFunction
    }
}

export default connect(mapStateToProp,mapDispatchToProp)(Itemcontainer)
