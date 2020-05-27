import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import { Route, BrowserRouter, Redirect } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'

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
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
