import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../components/home';
import RestoDet from '../components/restoDet';

const Stack = createStackNavigator();

export default props => {
  return (
    <Stack.Navigator initialRouteName="Home" headerMode="none">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="RestaurantDetails" component={RestoDet} />
    </Stack.Navigator>
  );
};
