import axios from 'axios';
import {FILL_LIST_POST, INIT_RESTAURANT_DETAILS} from './types';

export const getHomeListPost = () => {
  return async dispatch => {
    try {
      const res = await axios.get(
        'https://developers.zomato.com/api/v2.1/search?start=1&count=10&sort=rating',
        {
          headers: {
            'user-key': '5b640d08e441ca8ab34fb694f26c474b',
          },
        },
      );

      console.log(res.data.restaurants[0]);
      dispatch({
        type: FILL_LIST_POST,
        payload: res.data.restaurants,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const initRestaurantDetails = resto => {
  return {
    type: INIT_RESTAURANT_DETAILS,
    payload: resto,
  };
};
