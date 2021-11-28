import React, { useContext } from "react";
import AppContext from "../context/appContext";
import { Image, Text, StyleSheet, View } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';


const menu = <Icon name="bars" size={30} color="#fff" />;

const Menubar = () => {
  const appContext=useContext(AppContext);
  return(
    <View style={styles.container}>
        <Text style={styles.logo}>waystop</Text>
    </View>
)};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
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