import { connect } from 'react-redux'
// import {
//   removeProductCreator,
//   updateProductQuantityCreator,
//   updateCommentCreator,
// } from '../../redux/cart-reducer'
import Checkout from './Checkout'

let mapStateToProps = (state) => {
  console.log(state.cart)
  return {
    cart: state.cart,
  }
}

// let mapDispatchToProps = (dispatch) => {
//   return {
    
//   }
// }

const CheckoutContainer = connect(mapStateToProps)(Checkout)
export default CheckoutContainer