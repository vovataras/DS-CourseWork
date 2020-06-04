import React from 'react'
import CategoryPage from './CategoryPage'
import * as axios from 'axios'

class CategoryPageContainer extends React.Component {
  constructor(props) {
    super(props)
    this.api_url = 'http://127.0.0.1:8000/products/'
    this.state = { data: [] }

    if (this.props.category) {
      this.api_url = this.api_url + 'category/' + this.props.category + '/'
    }
  }

  componentDidMount() {
    axios.get(this.api_url).then((response) => {
      this.setState({
        data: response.data,
      })
    })
  }

  render() {
    return <CategoryPage title={this.props.title} state={this.state.data} />
  }
}

export default CategoryPageContainer
