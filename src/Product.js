import React from 'react';
import './Product.css'
import logo from './logo.svg';

class Product extends React.Component{
    render(){
        return (
            <div className="grid">
                <img src={logo} className="App-logo" alt="logo"/>
                <h2>Judul {this.props.judul}</h2>
                <h2>Harga {this.props.harga}</h2>
                <button className="btn">Beli Sekarang{this.props.button}</button>
            </div>
        );
    }
}
export default Product
