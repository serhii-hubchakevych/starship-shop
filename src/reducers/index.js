import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import starshipReducer from './starship-reducer';

export default combineReducers({
  starshipReducer: starshipReducer,
  form: formReducer
});

