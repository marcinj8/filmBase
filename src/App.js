import React, { Component } from 'react';

import Layout from './container/Layout/Layout';
import Footer from './component/Footer/Footer';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout />
        <Footer />
      </div>
    );
  }
}

export default App;
