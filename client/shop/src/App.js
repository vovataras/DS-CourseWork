import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import { Route, BrowserRouter, Redirect } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import AccessoriesContainer from './components/collections/Accessories/AccessoriesContainer'
import FootwearContainer from './components/collections/Footwear/FootwearContainer'
import PantsContainer from './components/collections/Pants/PantsContainer'
import ShirtsContainer from './components/collections/Shirts/ShirtsContainer'
import TshirtsContainer from './components/collections/Tshirts/TshirtsContainer'
import ShortsContainer from './components/collections/Shorts/ShortsContainer'
import ProductPage from './components/common/ProductPage/ProductPage'
import ProductPageContainer from './components/common/ProductPage/ProductPageContainer'

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <div className='wrapper'>
          <Header />
          <div className='center'>
            <div className='navWrapper'>
              <Navbar />
            </div>
            <div className='contentWrapper'>
              {/* <Redirect exact from='/' to='home' /> */}
              <Route name='home' path='/home' render={() => <Home />} />
              <Route
                exact
                path='/accessories'
                render={() => <AccessoriesContainer />}
              />
              <Route
                exact
                path='/footwear'
                render={() => <FootwearContainer />}
              />
              <Route exact path='/pants' render={() => <PantsContainer />} />
              <Route exact path='/shirts' render={() => <ShirtsContainer />} />
              <Route
                exact
                path='/tshirts'
                render={() => <TshirtsContainer />}
              />
              <Route exact path='/shorts' render={() => <ShortsContainer />} />
              <Route
                exact
                path='/:category/product/:productId'
                render={() => <ProductPageContainer />}
              />
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
