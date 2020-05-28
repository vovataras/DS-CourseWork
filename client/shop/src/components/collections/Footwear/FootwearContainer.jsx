import Products from '../../common/Products/Products'
import { connect } from 'react-redux'

let mapStateToProps = (state) => {
  return {
    title: 'Взуття',
    state: state.collections.footwear,
  }
}

const FootwearContainer = connect(mapStateToProps)(Products)

export default FootwearContainer
