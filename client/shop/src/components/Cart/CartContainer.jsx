import { connect } from 'react-redux'
import {
  removeProductCreator,
  updateProductQuantityCreator,
  updateCommentCreator,
} from '../../redux/cart-reducer'
import Cart from './Cart'

let mapStateToProps = (state) => {
  console.log(state.cart)
  return {
    cart: state.cart,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    removeProduct: (unique_id) => {
      dispatch(removeProductCreator(unique_id))
    },
    updateProductQuantity: (unique_id, quantity) => {
      let action = updateProductQuantityCreator(unique_id, quantity)
      dispatch(action)
    },
    updateComment: (newComment) => {
      let action = updateCommentCreator(newComment)
      dispatch(action)
    },
  }
}

const CartContainer = connect(mapStateToProps, mapDispatchToProps)(Cart)
export default CartContainer
