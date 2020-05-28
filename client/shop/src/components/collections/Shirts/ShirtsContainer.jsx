import Products from '../../common/Products/Products'
import { connect } from 'react-redux'

let mapStateToProps = (state) => {
  return {
    title: 'Cорочки',
    state: state.collections.shirts,
  }
}

const ShirtsContainer = connect(mapStateToProps)(Products)

export default ShirtsContainer
