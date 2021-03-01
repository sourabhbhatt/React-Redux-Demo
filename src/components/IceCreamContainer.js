import React from 'react'
import { buyIceCream } from '../redux'
import { connect } from 'react-redux'

function IceCreamContainer(props) {
    return (
        <div>
            <h1>Number Of Ice Creams - {props.numberOfIceCream}</h1>
            <button onClick={props.buyIceCream}>Buy Ice Cream </button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numberOfIceCream: state.iceCream.numberOfIceCream
    }
}
const mapDispatchToProp = dispatch => {
    return {
        buyIceCream: () => dispatch(buyIceCream())
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProp
)(
    IceCreamContainer)
