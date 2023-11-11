import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { HolaMundoScreen } from '../screens/HolaMundoScreen';
import { Settings } from '../screens/Settings';
import Icon from 'react-native-vector-icons/Ionicons';


const Tab = createMaterialTopTabNavigator();

export const TopTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
      options={{tabBarIcon: ({color})=> <Icon name="alarm-outline" size={20} color={color}/>}}
      name="HolaMundoScreen" component={HolaMundoScreen} />
      <Tab.Screen
      options={{tabBarIcon: ({color})=> <Icon name="settings-outline" size={20} color={color} />}}
      name="Settings" component={Settings} />
    </Tab.Navigator>
  )
}
