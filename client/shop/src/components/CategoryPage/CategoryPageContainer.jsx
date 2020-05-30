import React from 'react'
import CategoryPage from './CategoryPage'

class CategoryPageContainer extends React.Component {
  category = this.props.category
  
  render() {
    return <CategoryPage title={this.props.title} state=''/>
  }
}

export default CategoryPageContainer