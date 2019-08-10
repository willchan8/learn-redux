import counterReducer from './counter';
import loggedReducer from './isLogged';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
  // any name (state): reducer function (with the value assigned to state)
  counter: counterReducer,
  isLogged: loggedReducer
})

export default allReducers;