import { connect } from 'react-redux'
import { removeProductCreator, updateProductQuantityCreator } from '../../redux/cart-reducer'
import Cart from './Cart'

let mapStateToProps = (state) => {
  console.log(state.cart)
  return {
    cart: state.cart
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    removeProduct: (productId) => {
      dispatch(removeProductCreator(productId))
    },
    updateProductQuantity: (productId, quantity) => {
      let action = updateProductQuantityCreator(productId, quantity)
      dispatch(action)
    },
  }
}

const CartContainer = connect(mapStateToProps, mapDispatchToProps)(Cart)
export default CartContainer