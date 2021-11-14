import React from 'react'
import { View, Image, Text, StyleSheet, Button } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';



export default function Result({ handleClick, short_title, date, location, lowest_price, highest_price, image }) {
    const textColor= '#fff'
    const dateIcon = <Icon name="calendar" size={16} color="#fff" />;
    const moneyIcon = <Icon name="money" size={16} color="#fff" />;
    const locationIcon = <Icon name="map-signs" size={16} color="#fff" />;

    

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
        venue: {
            color: textColor
        },
        price: {
            color: textColor,
        },
        details: {
            marginBottom: 12,
            marginTop: 12
        },
        image: {
          width: '100%',
          height: 200,
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
        <Text style={styles.item}>{short_title}</Text>
        <Text style={styles.date}>{dateIcon}  {date}</Text>
        <Text style={styles.venue}>{locationIcon}  {location}</Text>
        {lowest_price &&<Text style={styles.price}>{moneyIcon}  {!highest_price? `${lowest_price}-$${highest_price}`:`$${lowest_price}`}</Text>}
      </View>
  <Button onPress={handleClick} color='#550000' title='See Event' />
  </View>)
}

