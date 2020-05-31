import React from 'react'
import { withRouter } from 'react-router-dom'
import ProductPage from './ProductPage'
import { connect } from 'react-redux'
import * as axios from 'axios'

class ProductPageContainer extends React.Component {
  constructor(props) {
    super(props)
    this.productId = this.props.match.params.productId
    console.log(this.productId)

    this.api_url =
      'http://127.0.0.1:8000/products/product/' + this.productId + '/'
    this.state = { data: {} }
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
    return <ProductPage product={this.state.data} />
  }
}

let mapStateToProps = (state) => {
  return {
    collections: state.collections,
  }
}

let ProductPageContainerWithRouter = withRouter(ProductPageContainer)
export default connect(mapStateToProps)(ProductPageContainerWithRouter)
