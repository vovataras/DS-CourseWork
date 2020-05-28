import Products from '../../common/Products/Products'
import { connect } from 'react-redux'

let mapStateToProps = (state) => {
  return {
    title: 'Шорти',
    state: state.collections.shorts
  }
}

const ShortsContainer = connect(mapStateToProps)(Products)

export default ShortsContainer
