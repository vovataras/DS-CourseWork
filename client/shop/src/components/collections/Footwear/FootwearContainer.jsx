import Products from '../../common/Products/Products'
import { connect } from 'react-redux'

let mapStateToProps = (state) => {
  return {
    title: 'Взуття',
    category: 'footwear',
    state: state.collections.footwear,
  }
}

const FootwearContainer = connect(mapStateToProps)(Products)

export default FootwearContainer
