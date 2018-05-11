import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom'
import './App.css';
import Header from './components/Header'
import AptIndex from './components/AptIndex'
import AptDetail from './components/AptDetail'
import Oops from './components/Oops'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
          <Switch>
          <div>
            <Header />
              <Route exact path="/" component={AptIndex} />
              <Route path='/Apts/:id' component={AptDetail} />
              <Route component={Oops} />
            <div>
          <Footer />
        </div>
      </div>
      </Switch>
    );
  }
}

export default App;
