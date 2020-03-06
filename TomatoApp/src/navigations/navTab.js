import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from 'react-native-elements';
import NavHome from './navHome';
import LogoutComp from '../components/logoutComp';

const Tab = createBottomTabNavigator();

const LogoutCompon = nav => {
  return ({navigation}) => (
    <LogoutComp navigation={navigation} rootStackNavigation={nav} />
  );
};

export default ({navigation}) => {
  return (
    <Tab.Navigator
      initialRouteName="NavHome"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'NavHome') {
            iconName = 'home';
          } else if (route.name === 'LogOut') {
            iconName = 'restaurant-menu';
          }

          // You can return any component that you like here!
          return <Icon name={iconName} size={35} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        showLabel: false,
      }}>
      <Tab.Screen name="NavHome" component={NavHome} />
      <Tab.Screen name="LogOut">{LogoutCompon(navigation)}</Tab.Screen>
    </Tab.Navigator>
  );
};
