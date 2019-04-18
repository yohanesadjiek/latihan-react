import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Product from './Product';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Product judul="Lorem Ipsum" harga="Rp10.000"/>
          <Product judul="Lorem Ipsum" harga="Rp20.000"/>
          <Product judul="Lorem Ipsum" harga="Rp20.000"/>
          <Product judul="Lorem Ipsum" harga="Rp20.000"/>
        </header>
      </div>
    );
  }
}

export default App;
