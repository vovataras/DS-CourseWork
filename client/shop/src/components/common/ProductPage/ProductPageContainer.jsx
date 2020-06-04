import React from 'react'
import { withRouter } from 'react-router-dom'
import ProductPage from './ProductPage'
import { connect } from 'react-redux'
import * as axios from 'axios'
import { addProductCreator, updateProductQuantityCreator } from '../../../redux/actions'

class ProductPageContainer extends React.Component {
  constructor(props) {
    super(props)
    this.productId = this.props.match.params.productId
    // console.log(this.productId)

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
      // console.log(response)
    })
  }

  render() {
    return <ProductPage {...this.props} product={this.state.data} buyNow={this.buyNow} />
  }
}

let mapStateToProps = (state) => {
  return {
    // collections: state.collections,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addProduct: (product) => {
      dispatch(addProductCreator(product))
    },
    // updateProductQuantity: (productId, quantity) => {
    //   let action = updateProductQuantityCreator(productId, quantity)
    //   dispatch(action)
    // },
  }
}

let ProductPageContainerWithRouter = withRouter(ProductPageContainer)
export default connect(mapStateToProps, mapDispatchToProps)(ProductPageContainerWithRouter)
