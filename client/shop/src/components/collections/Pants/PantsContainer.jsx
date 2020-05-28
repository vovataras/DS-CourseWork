import Products from '../../common/Products/Products'
import { connect } from 'react-redux'

let mapStateToProps = (state) => {
  return {
    title: 'Штани',
    state: state.collections.pants,
  }
}

const PantsContainer = connect(mapStateToProps)(Products)

export default PantsContainer