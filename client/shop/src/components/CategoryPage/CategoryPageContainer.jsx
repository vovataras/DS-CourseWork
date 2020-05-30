import React from 'react'
import CategoryPage from './CategoryPage'
import * as axios from 'axios'

class CategoryPageContainer extends React.Component {
  
  constructor(props) {
    super(props)
    this.api_url = 'http://127.0.0.1:8000/products/'
    this.state = {data: []}

    if(this.props.category) {
      this.api_url += 'category/' + this.props.category
    }
  }

  // category = this.props.category
  componentDidMount() {
    axios.get('http://127.0.0.1:8000/products/')
      .then((response) => {
        this.setState({
          data: response.data
      })
    })
    
  }
  
  
  
  render() {
    // if(this.state.data[0])
    //   console.log(this.state.data[0].name)
    // debugger
    return <CategoryPage title={this.props.title} state={this.state.data} />
  }
}

export default CategoryPageContainer
