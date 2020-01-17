import React from "react";

import "./cart-item-card.css";

const CartItem = ({ item, decreaseStarship, increaseStarship }) => {
  
  const { id, name, model, count, img  } = item
  return (
    <React.Fragment>
      <div className="row">
        <div className="col-md-2 text-center">
          <img
            className="img-responsive"
            src={img}
            alt="prewiew"
            width="120"
            height="80"
          />
        </div>
        <div className="text-sm-center text-md-left col-md-6">
          <h4 className="product-name">
            <strong>{name}</strong>
          </h4>
          <h4>
            <small>{model}</small>
          </h4>
        </div>
        <div className="col-md-4 text-md-right row">
          <div className="col-12 col-sm-12 col-md-12">
            <div className="quantity">
              <input type="button" value="+" className="plus" onClick={ ()=> increaseStarship(id) }/>
              <input
                type="number"
                step="1"
                max="10"
                min="1"
                disabled={true}
                value={count}
                className="qty"
                size="4"
              />
              <input type="button" value="-" className="minus" onClick={ ()=> decreaseStarship(id)}/>
            </div>
          </div>
        </div>
      </div>
      <hr></hr>
    </React.Fragment>
  );
};

export default CartItem;
