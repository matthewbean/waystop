import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, Text, StyleSheet, View, Animated } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import AppContext from "../context/appContext";

import Results from '../pages/results'
import MenuBar from './menubar'
import Settings from '../pages/settings'




const Tab = createBottomTabNavigator();

const Drawer = ()=> {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
          header: ()=><MenuBar />,
          tabBarStyle: {backgroundColor: '#801616', borderTopColor: '#801616'}
      }}>
        <Tab.Screen options= {{tabBarIcon: ()=><Icon name="home" size={24} color="#fff" />}} name="Results" component={Results} />
        <Tab.Screen options= {{tabBarIcon: ()=><Icon name="cog" size={24} color="#fff" />}}  name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}



const styles = StyleSheet.create({
});

export default Drawer;