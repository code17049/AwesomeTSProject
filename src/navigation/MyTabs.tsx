import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabUno } from '../screens/TabUno';
import { TabDos } from '../screens/TabDos';
import { TabTres } from '../screens/TabTres';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


const Tab = createBottomTabNavigator();

export const MyTabs = () => {
  return (
    <Tab.Navigator
  screenOptions= {({route})=>({
    tabBarIcon: ({color})=> {
      let iconName: string = ' ';
      switch (route.name) {
        case 'TabUno':      
          iconName = 'camera-outline';
          break;
        case 'TabDos':
          iconName = 'image-outline'
          break
        case 'TabTres':
          iconName = 'videocam-outline'
          break

        default:
          break;
      }
      return <Icon name= {iconName} size={25} color={color} />;
    }
    
  })}
    >
      <Tab.Screen
      /* options={{
        tabBarIcon: ({color}) => <Text style={{color}}>T1</Text>
      }} */
      name="TabUno" component={TabUno} />
      <Tab.Screen name="TabDos" component={TabDos} />
      <Tab.Screen name="TabTres" component={TabTres} />
    </Tab.Navigator>
  )
}
