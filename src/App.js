import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home'
import ContactUs from './components/ContactUs'
//import Footer from './components/Footer'        footer

import {BrowserRouter, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Navbar />
          <div id="maincontainer">
            <Route exact path='/' component={Home} />
            <Route path='/ContactUs' component={ContactUs} />
          </div>
        </header>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
