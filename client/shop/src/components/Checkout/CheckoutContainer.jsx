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

const CheckoutContainer = (props) => {
  const sendOrder = () => {
    let order = {
      checkout: props.checkout,
      cart: props.cart,
    }

    axios.post('http://127.0.0.1:8000/order-api/orders/', order).then(
      (response) => {
        console.log(response)
      },
      (error) => {
        console.log(error)
      }
    )
  }

  return <Checkout {...props} sendOrder={sendOrder} />
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
  }
}

// const CheckoutContainer = connect(mapStateToProps, mapDispatchToProps)(Checkout)
export default connect(mapStateToProps, mapDispatchToProps)(CheckoutContainer)
