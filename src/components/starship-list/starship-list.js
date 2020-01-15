import React, { Component, Fragment } from "react";

import StarshipListListItem from "../starship-list-item";
import { StarshipService } from "../../services/starship-service";
import Spinner from "../spinner";
import "./starship-list.css";

class StarshipList extends Component {
    starshipService = new StarshipService();

    constructor() {
        super();
        this.loadStarships();
    }

    state = {
        starship: []
    };

    loadStarships() {
        this.starshipService.getAllStarships().then(starship => {
        this.setState({
            starship: starship
        });
        });
    }

    render() {
        const { starship } = this.state;
        return starship.length > 0 ? (
        <ul>
            {starship.map(starship => {
            return (
                <li key={starship.id}>
                <StarshipListListItem starship={starship} />
                </li>
            );
            })}
        </ul>
        ) : (
        <Spinner />
        );
    }
}

export default StarshipList;
