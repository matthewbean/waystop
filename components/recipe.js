import React from 'react'
import { View, Image, Text, StyleSheet, Button } from 'react-native'



export default function Recipe({ title, image, getRecipe }) {
    const textColor= '#fff'

    

    const styles = StyleSheet.create({
        item: {
          fontSize: 18,
          lineHeight: 18,
          fontWeight: '900',
          color: textColor
        },
        date: {
            color: textColor
        },
        rating: {
            color: textColor
        },
        overview: {
            color: textColor,
        },
        details: {
            marginBottom: 12,
            marginTop: 12
        },
        image: {
          width: '100%',
          height: 300,
          borderRadius: 3,
          alignSelf: 'center'
        },
        card: {
            margin: 3,
            borderRadius: 5,
            elevation: 3,
            backgroundColor: '#D46A6A',
            backgroundColor: '#801616',
            marginBottom: 20,
            padding: 20
        }
      });



    return (       
  <View style={styles.card}>
      <Image style={styles.image} source={{uri:image}} />
      <View style={styles.details}>
        <Text style={styles.item}>{title}</Text>
      </View>
  <Button onPress={getRecipe} color='#550000' title='See Recipe' />
  </View>)
}

