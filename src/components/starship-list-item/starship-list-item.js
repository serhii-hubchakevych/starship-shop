import React from "react";

import "./starship-list-item.css";

const StarshipListItem = ({ starship, starshipAddedToCart }) => {
  const { name, model, costInCredits, img } = starship;
  
  return (
    <div className="col-md-4 col-pd-bt">
      <div className="card card-width">
        <img
          className="card-img-top card-img-height"
          src={img}
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{model}</p>
          <small>Price: { costInCredits } UAH</small>
          <button onClick={starshipAddedToCart} disabled={ costInCredits > 0 ? false : true } className="btn btn-primary btn-width">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default StarshipListItem;
