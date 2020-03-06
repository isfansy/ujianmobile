import React from 'react';
import {View, Text} from 'react-native';
import {Icon} from 'react-native-elements';

const HomeIcons = ({icons, types, name}) => {
  return (
    <View style={{alignItems: 'center', width: '25%', marginVertical: 10}}>
      <Icon
        name={icons}
        size={25}
        type={types}
        color="black"
        containerStyle={{
          borderWidth: 2,
          borderColor: 'black',
          borderRadius: 45,
          width: 45,
          height: 45,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      />
      <Text style={{fontSize: 13}}>{name}</Text>
    </View>
  );
};

export default HomeIcons;
