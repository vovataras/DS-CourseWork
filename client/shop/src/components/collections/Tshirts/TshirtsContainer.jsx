import Products from '../../common/Products/Products'
import { connect } from 'react-redux'

let mapStateToProps = (state) => {
  return {
    title: 'Футболки',
    category: 'tshirts',
    state: state.collections.tshirts,
  }
}

const TshirtsContainer = connect(mapStateToProps)(Products)

export default TshirtsContainer
