import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import "./cart.css";
import CartItem from "../cart-item-card/cart-item-card";
import Form from "../cart-form";
import {
  increaseStarship,
  decreaseStarship,
  orderCreated
} from "../../actions";

class Cart extends Component {
  render() {
    const {
      cartItems,
      orderTotal,
      decreaseStarship,
      increaseStarship,
      orderCreated
    } = this.props;

    return (
      <div className="container">
        {cartItems.length > 0 ? (
          <div className="card shopping-cart">
            <div className="card-body">
              <div className="row">
                <div className="col-md-9">
                  {cartItems.map((item, index) => {
                    return (
                      <CartItem
                        key={index}
                        item={item}
                        increaseStarship={increaseStarship}
                        decreaseStarship={decreaseStarship}
                      />
                    );
                  })}
                </div>
                <div className="col-md-3">
                  <Form orderCreated={orderCreated} />
                </div>
              </div>
            </div>
            <div className="card-footer">
              <div className="pull-right">
                <div className="pull-right">
                  Total: <b>{orderTotal}</b> UAH
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="card-body text-center">
            <img src="http://dakota-sports.com/images/cart-empty.jpg" />
            <p>
              <Link to="/">BACK TO THE STORE</Link>
            </p>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ starshipReducer: { cartItems, orderTotal } }) => ({
  cartItems,
  orderTotal
});

const mapDispatchToProps = { increaseStarship, decreaseStarship, orderCreated };

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
