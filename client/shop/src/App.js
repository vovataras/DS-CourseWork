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
import ProductsContainer from './components/common/Products/ProductsContainer'
import { path } from './paths'

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
              <Route
                exact
                name='dashboard'
                path='/'
                render={() => <Redirect to={path.home} />}
              />
              <Route exact name='home' path={path.home} render={() => <Home />} />
              <Route
                exact
                path={path.products}
                render={() => <ProductsContainer />}
              />
              <Route
                exact
                path={path.accessories}
                render={() => <AccessoriesContainer />}
              />

              <Route
                exact
                path={path.footwear}
                render={() => <FootwearContainer />}
              />
              <Route
                exact
                path={path.pants}
                render={() => <PantsContainer />}
              />
              <Route
                exact
                path={path.shirts}
                render={() => <ShirtsContainer />}
              />
              <Route
                exact
                path={path.tshirts}
                render={() => <TshirtsContainer />}
              />
              <Route
                exact
                path={path.shorts}
                render={() => <ShortsContainer />}
              />
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
