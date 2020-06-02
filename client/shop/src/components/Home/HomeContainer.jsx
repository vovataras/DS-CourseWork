import React from 'react'
import Home from './Home'
import * as axios from 'axios'

class HomeContainer extends React.Component {
  
  constructor(props) {
    super(props)
    this.api_url = 'http://127.0.0.1:8000/products/?count=9'
    this.state = {data: []}
  }

  componentDidMount() {
    axios.get(this.api_url)
      .then((response) => {
        this.setState({
          data: response.data
      })
    })
    
  }
  
  render() {
    return <Home state={this.state.data} />
  }
}

export default HomeContainer
