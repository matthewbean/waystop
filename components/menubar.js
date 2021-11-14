import React, { useContext } from "react";
import AppContext from "../context/appContext";
import { Image, Text, StyleSheet, View } from "react-native";
import IconButton from './IconButton';
import Icon from 'react-native-vector-icons/FontAwesome';


const menu = <Icon name="bars" size={30} color="#fff" />;

const Menubar = () => {
  const appContext=useContext(AppContext);
  const { sidebar, setSidebar }=appContext;
  return(
    <View style={styles.container}>
        <IconButton onPress={setSidebar} customStyle={{backgroundColor: '#000'}} icon={menu} ></IconButton>
        <Text style={styles.logo}>waystop</Text>
    </View>
)};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'center', 
    width: '100%', 
    backgroundColor: '#801616',
    paddingHorizontal: 15,
    height: 55
  },
  logo: {
    color: '#fff',
    fontSize: 40,
    fontFamily: 'logo'
  },
});

export default Menubar;