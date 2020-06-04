import React from 'react'
import { withRouter } from 'react-router-dom'
import ProductPage from './ProductPage'
import { connect } from 'react-redux'
import * as axios from 'axios'
import { addProductCreator } from '../../../redux/actions'

class ProductPageContainer extends React.Component {
  constructor(props) {
    super(props)
    this.productId = this.props.match.params.productId

    this.api_url =
      'http://127.0.0.1:8000/products/product/' + this.productId + '/'
    this.state = { data: {} }
  }

  buyNow = (product) => {
    this.props.addProduct(product)
    this.props.history.push('/checkout')
  }

  componentDidMount() {
    axios.get(this.api_url).then((response) => {
      this.setState({
        data: response.data,
      })
    })
  }

  render() {
    return (
      <ProductPage
        {...this.props}
        product={this.state.data}
        buyNow={this.buyNow}
      />
    )
  }
}

let mapStateToProps = (state) => {
  return {}
}

let mapDispatchToProps = (dispatch) => {
  return {
    addProduct: (product) => {
      dispatch(addProductCreator(product))
    },
  }
}

let ProductPageContainerWithRouter = withRouter(ProductPageContainer)
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductPageContainerWithRouter)
