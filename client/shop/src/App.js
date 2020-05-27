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
              <Redirect from='/' to='home' />
              <Route name='home' path='/home' render={() => <Home />} />
              <Route
                path='/accessories'
                render={() => <AccessoriesContainer />}
              />
              <Route path='/footwear' render={() => <FootwearContainer />} />
              <Route path='/pants' render={() => <PantsContainer />} />
              <Route path='/shirts' render={() => <ShirtsContainer />} />
              <Route path='/t-shirts' render={() => <TshirtsContainer />} />
              <Route path='/shorts' render={() => <ShortsContainer />} />
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
