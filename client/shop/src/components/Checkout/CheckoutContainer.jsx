import React from 'react'
import { connect } from 'react-redux'
import {
  updatePhoneCreator,
  updateEmailCreator,
  updateNameCreator,
  updateSurnameCreator,
  updateAddressCreator,
  updateCityCreator,
  updateIndexCreator,
} from '../../redux/checkout-reducer'
import Checkout from './Checkout'
import * as axios from 'axios'
import { restoreStateCreator } from '../../redux/actions'
import { withRouter } from 'react-router-dom'

class CheckoutContainer extends React.Component {

  constructor(props) {
    super(props)
    this.state = { isSent: false}
  }

  sendOrder = () => {
    let order = {
      checkout: this.props.checkout,
      cart: this.props.cart,
    }

    axios.post('http://127.0.0.1:8000/order-api/orders/', order).then(
      (response) => {
        console.log(response)
        this.props.restoreState()
        this.setState({isSent: true})
        const toHome = () => {this.props.history.push('/home')}
        setTimeout(toHome, 3500)
      },
      (error) => {
        console.log(error)
      }
    )
  }

  render() {
    return <Checkout {...this.props} sendOrder={this.sendOrder} isSent={this.state.isSent}/>
  }
}

let mapStateToProps = (state) => {
  // console.log(state.cart)
  return {
    cart: state.cart,
    checkout: state.checkout,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    updatePhone: (newPhone) => {
      dispatch(updatePhoneCreator(newPhone))
    },
    updateEmail: (newEmail) => {
      dispatch(updateEmailCreator(newEmail))
    },
    updateName: (newName) => {
      dispatch(updateNameCreator(newName))
    },
    updateSurname: (newSurname) => {
      dispatch(updateSurnameCreator(newSurname))
    },
    updateAddress: (newAddress) => {
      dispatch(updateAddressCreator(newAddress))
    },
    updateCity: (newCity) => {
      dispatch(updateCityCreator(newCity))
    },
    updateIndex: (newIndex) => {
      dispatch(updateIndexCreator(newIndex))
    },
    restoreState: () => {
      dispatch(restoreStateCreator())
    }
  }
}

let ChekcoutContainerWithRouter = withRouter(CheckoutContainer)
export default connect(mapStateToProps, mapDispatchToProps)(ChekcoutContainerWithRouter)
// const CheckoutContainer = connect(mapStateToProps, mapDispatchToProps)(Checkout)
// export default connect(mapStateToProps, mapDispatchToProps)(CheckoutContainer)
