import React from 'react'
import { withRouter } from 'react-router-dom'
import ProductPage from './ProductPage'
import { connect } from 'react-redux'
import * as axios from 'axios'

class ProductPageContainer extends React.Component {

  constructor(props) {
    super(props)
    
    // this.category = this.props.match.params.category
    this.productId = this.props.match.params.productId
    console.log(this.productId)

    this.api_url = 'http://127.0.0.1:8000/products/product/' + this.productId + '/'
    this.state = {data: {}}
  }

  // category = this.props.category
  componentDidMount() {
    axios.get(this.api_url)
      .then((response) => {
        this.setState({
          data: response.data
      })
      console.log(response)
    })

  }

  render() {
    // debugger
    // let category = this.props.match.params.category
    // let productId = this.props.match.params.productId

    // let product = this.props.collections[category].find(
    //   (element) => element.id === productId
    // )
    return <ProductPage product={this.state.data} />
    // return <></>
  }
}

let mapStateToProps = (state) => {
  return {
    collections: state.collections,
  }
}

let ProductPageContainerWithRouter = withRouter(ProductPageContainer)
export default connect(mapStateToProps)(ProductPageContainerWithRouter)
