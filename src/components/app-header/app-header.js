import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "./app-header.css";

class Header extends Component {
  render() {
    const { orderTotal } = this.props;
    return (
      <div className="navbar navbar-light bg-light">
        <Link to="/">
          <span>STARSHIPS STORE</span>
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
          <button className="btn btn-info ">CART</button>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = ( {starshipReducer: { orderTotal }}) => ({ orderTotal });

export default connect(mapStateToProps)(Header);
