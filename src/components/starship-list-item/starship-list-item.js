import React, { Fragment } from "react";
import "./starship-list-item.css";

const StarshipListItem = ({ starship }) => {
    const { name, model, costInCredits } = starship;
    return (
        <Fragment>
        <span>
            <strong>Name: </strong>
            {name}{" "}
        </span>
        <span>
            {" "}
            <strong>Model:</strong> {model}{" "}
        </span>
        <span>
            {" "}
            <strong>Cost:</strong> {costInCredits} UAH
        </span>
        </Fragment>
    );
};

export default StarshipListItem;
