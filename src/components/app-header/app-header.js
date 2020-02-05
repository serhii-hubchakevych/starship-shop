import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import "./app-header.css";

class Header extends Component {
  render() {
    const { orderTotal } = this.props;
    return (
      <div className="navbar navbar-light bg-light">
        <Link to="/">
          <h1 className="cmp-name">STARSHIPS STORE</h1>
        </Link>
        {
          orderTotal > 0 ?
          (
            <span className="mrg-right">Total: {orderTotal}</span>
          ) : (
            null
          )
        }
        <Link to="/cart">
          <FontAwesomeIcon icon={faShoppingCart} className="cart-icon" /><span className="cart-desc">CART</span>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = ( {starshipReducer: { orderTotal }}) => ({ orderTotal });

export default connect(mapStateToProps)(Header);
