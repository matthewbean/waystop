import React, { useState, useEffect } from "react";
import { SafeAreaView, StyleSheet, TextInput } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import IconButton from "../components/IconButton";
const UselessTextInput = () => {
  useEffect(() => {
    getData()
  }, [])
  const [text, onChangeText] = useState("Useless Text");
  const [zip, onChangeZip] = useState(null);

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
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeZip}
        value={zip}
        placeholder="Zip"
        keyboardType="numeric"
      />
      <IconButton color={'#550000'} onPress={handleSubmit} text='SUBMIT' iconPosition='right'/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default UselessTextInput;