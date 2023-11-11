import React from 'react'
import { DrawerContentComponentProps, DrawerContentScrollView, createDrawerNavigator } from '@react-navigation/drawer';

import { HolaMundoScreen } from '../screens/HolaMundoScreen';
import { Image, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {estilos} from '../themes/Styles'
import { Settings } from '../screens/Settings';
import { MyTabs } from './MyTabs';

const Drawer = createDrawerNavigator();
export const MyDrawer = () => {
    return (
        <Drawer.Navigator
        drawerContent={(props) => <MenuInterno {...props}/>}
        >
          <Drawer.Screen name="MyTabs" component={MyTabs} />
          <Drawer.Screen name="Settings" component={Settings} />
        </Drawer.Navigator>
      );
}

const MenuInterno = ({navigation}: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>

      {/* Avatar */}
      <View style={{
        margin: 10
      }}>
        <Image
        source={{
          uri: 'https://rajueditor.com/wp-content/uploads/2023/09/fotos-de-perfil-aesthetic-920x1024.jpg'
        }}
        style = {{
          width: 150,
          height: 150,
          borderRadius: 100,
          alignSelf: 'center'
        }}
        />
      </View>

      {/* Botones */}
      <View style={{
        marginHorizontal: 30,
      }}>
        <TouchableOpacity style={{
        marginVertical: 10, 
      }}
      onPress={()=>navigation.navigate('MyTabs')}
      >
          <Text style={estilos.stiloTexto}>Botton Tabs</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{
        marginVertical: 10,
      }}
      onPress={()=>navigation.navigate('Settings')}
      >
          <Text style={estilos.stiloTexto}>Settings</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
}
