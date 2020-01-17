// import { increaseStarships, decreaseStarships, addStarshipToCart } from './starships-cart-reducer';
// import { starshipsLoaded, starshipsRequested } from './starships-service-reducer';
import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import starshipReducer from './starship-reducer';

export default combineReducers({
  starshipReducer: starshipReducer,
  form: formReducer
});

