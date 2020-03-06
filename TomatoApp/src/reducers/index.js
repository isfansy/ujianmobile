import {combineReducers} from 'redux';
import UserReducers from './userReducers';
import LoginReducers from './loginReducers';
import HomeReducers from './homeReducers';
import RestoReducers from './restoReducers';

export default combineReducers({
  user: UserReducers,
  loginForm: LoginReducers,
  homeListPost: HomeReducers,
  restaurantDetails: RestoReducers,
});
