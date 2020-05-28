import Products from '../../common/Products/Products'
import { connect } from 'react-redux'

let mapStateToProps = (state) => {
  return {
    title: 'Аксесуари',
    state: state.collections.accessories,
  }
}

const AccessoriesContainer = connect(mapStateToProps)(Products)

export default AccessoriesContainer
