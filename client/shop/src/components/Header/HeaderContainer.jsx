import { connect } from 'react-redux'
import Header from "./Header"

let mapStateToProps = (state) => {
  return {
    productsCount: state.cart.productsCount,
  }
}

const HeaderContainer = connect(mapStateToProps)(Header)

export default HeaderContainer