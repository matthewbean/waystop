import React, { useState, useContext, useEffect } from "react";
import { SafeAreaView, View, StyleSheet, TextInput, Text, Switch } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import IconButton from "../components/IconButton";
const UselessTextInput = () => {
  useEffect(() => {
    getData()
  }, [])
  const [text, onChangeText] = useState("Useless Text");
  const [zip, onChangeZip] = useState(null);
  const [providers, setProviders] = useState([
    {name: 'Netflix',
     owned: false},
    {name: 'Disney Plus',
     owned: false},
    {name: 'Hulu',
     owned: false},
    {name: 'Peacock',
     owned: false},
    {name: 'Crunchyroll',
     owned: false},
    {name: 'Amazon Prime Video',
     owned: false},
    {name: 'HBO Max',
     owned: false},
]);

  const setProvider=(index)=>{
    setProviders(providers.map((item, i)=>i === index?{...item, owned: !item.owned}: item))
  }
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@Settings')
      if(value !== null) {
        let settings = JSON.parse(value)
        console.log(settings)
        onChangeText(settings.name)
        onChangeZip(settings.zip)
      }
    } catch(e) {
      // error reading value
    }
  }

  const handleSubmit = async ()=>{
    try {
      let settings=JSON.stringify({
        name: text,
        zip: zip
      })
      await AsyncStorage.setItem('@Settings', settings)
    } catch (e) {
      console.log(e)
    }
    console.log(text,zip)
  }

  return (
      <View style={styles.background}>
      <View style={styles.section}>
        <Text style={styles.label}>ZipCode: </Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeZip}
          value={zip}
          placeholder="Zip"
          keyboardType="numeric"
        />
      </View>
      <Text style={styles.heading}>Streaming Services:</Text>
      {providers.map((item, i)=>(
      <View style={styles.section} key={i} >
        <Text style={styles.label}>{item.name}</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#801616" }}
          thumbColor={"#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={()=>setProvider(i)}
          value={item.owned}
        />
      </View>))}
      <View style={styles.buttonWrapper}>
      <IconButton color={'#550000'} onPress={handleSubmit} text='SUBMIT' iconPosition='right'/>
      </View>
      </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#f5f0f0',
    flex: 12
  },
  input: {
    width: 100,
    borderWidth: 1,
    borderColor: 'black',
    padding:10,
    // backgroundColor: 'black'
  },
  heading: {
    color: 'black',
    padding: 10,
    fontSize: 24
  },
  section: {
    display: "flex",
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10
  },

  label: {
    color: 'black',
    fontSize: 18
  },
  buttonWrapper: {
    padding: 10
  }
});

export default UselessTextInput;