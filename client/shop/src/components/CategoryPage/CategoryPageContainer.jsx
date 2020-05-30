import React from 'react'
import CategoryPage from './CategoryPage'
import * as axios from 'axios'

class CategoryPageContainer extends React.Component {
  
  constructor(props) {
    super(props)

    // this.state = {}
  }

  // category = this.props.category
  componentDidMount() {
    axios.get('http://127.0.0.1:8000/products/')
      .then((response) => {
        this.setState({
          data: response.data
      })})
      
    // console.log(this.state.data);
    // debugger
  }

  

  render() {
    // debugger
    return <></>
    // <CategoryPage title={this.props.title} state='' />
  }
}

export default CategoryPageContainer
