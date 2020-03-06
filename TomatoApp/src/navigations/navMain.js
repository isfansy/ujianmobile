import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginComp from '../components/loginComp';
import NavTab from './navTab';

const Stack = createStackNavigator();

export default props => {
  return (
    <Stack.Navigator initialRouteName="Login" headerMode="none">
      <Stack.Screen name="Login" component={LoginComp} />
      <Stack.Screen name="TabMenu" component={NavTab} />
    </Stack.Navigator>
  );
};
