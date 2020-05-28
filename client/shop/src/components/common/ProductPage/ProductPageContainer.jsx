import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import ProductPage from './ProductPage'
import { connect } from 'react-redux'

class ProductPageContainer extends React.Component {
  render() {
    // debugger
    let category = this.props.match.params.category
    let productId = this.props.match.params.productId

    let product = this.props.collections[category].find(
      (element) => element.id === productId
    )
    return <ProductPage product={product} />
  }
}

let mapStateToProps = (state) => {
  return {
    collections: state.collections,
  }
}

let ProductPageContainerWithRouter = withRouter(ProductPageContainer)
export default connect(mapStateToProps)(ProductPageContainerWithRouter)
