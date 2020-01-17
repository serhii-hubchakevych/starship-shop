import React, { Component } from "react";
import { connect } from "react-redux";

import StarshipListListItem from "../starship-list-item";
import { StarshipService } from "../../services/starship-service";
import Spinner from "../spinner";
import "./starship-list.css";
import {
  starshipsLoaded,
  starshipsRequested,
  starshipAddedToCart
} from "../../actions";


class StarshipList extends Component {
  starshipService = new StarshipService();

  async componentDidMount() {
    const { starshipsLoaded, starshipsRequested } = this.props;
    starshipsRequested();
    this.starshipService.getAllStarships().then(starships => {
      starshipsLoaded(starships);
    });
  }

  render() {
    const { starships, loading, starshipAddedToCart } = this.props;
    
    if (loading) {
      return <Spinner />;
    }

    return (
      <div className="container container-margin">
        <div className="row">
          {starships.map(starship => {
            return (
              <StarshipListListItem key={starship.id} starship={starship} starshipAddedToCart={ ()=> starshipAddedToCart(starship.id)} />
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ( { starshipReducer : { starships, loading } } ) => ({ starships, loading});


const mapDispatchToProps = { starshipsLoaded, starshipsRequested, starshipAddedToCart };

export default connect(mapStateToProps, mapDispatchToProps)(StarshipList);
