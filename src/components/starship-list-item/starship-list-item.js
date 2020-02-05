import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

import "./starship-list-item.css";

const StarshipListItem = ({ starship, starshipAddedToCart }) => {
  const { name, model, costInCredits, img } = starship;
  
  return (
    <div className="col-md-4 col-pd-bt">
      <div className="card card-width">
        <img
          className="card-img-top card-img-height"
          src={img}
          alt="Card Image"
        />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{model}</p>
          <small className="price">Price: { costInCredits } UAH</small>
          <button onClick={starshipAddedToCart} disabled={ costInCredits > 0 ? false : true } className="btn btn-outline-danger btn-width">{costInCredits > 0 ? <FontAwesomeIcon icon={faCartPlus} className="cart-icon body-icon" /> : null}Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default StarshipListItem;
