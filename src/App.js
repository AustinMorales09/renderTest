import React, { Component } from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Shop from './Shop'
import Navbar from './SideNavbar'
import Footer from './Footer'
export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<Shop/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    )
  }
}
