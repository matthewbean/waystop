import React from 'react'
import { View, Image, Text, StyleSheet, Button } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { useSpring, animated, config } from '@react-spring/native'


export default function MovieTheater({handleClick, title, index, overview, image, release_date, rating, id }) {
  const props = useSpring({ to: { position: 'relative', left: 0, }, from: { left: -800 }, delay: index*100+500, config: config.stiff })
    const textColor= '#fff'
    const dateIcon = <Icon name="calendar" size={16} color="#fff" />;
    const star = <Icon name="star" size={16} color="#fff" />;
    

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
          height: 500,
          borderRadius: 3,
          alignSelf: 'center'
        },
        card: {
            margin: 3,
            borderRadius: 5,
            elevation: 3,
            backgroundColor: '#801616',
            marginBottom: 20,
            padding: 20
        }
      });



    return (       
      <animated.View style={props}>
  <View style={styles.card}>
      <Image style={styles.image} source={{uri:image}} />
      <View style={styles.details}>
        <Text style={styles.item}>{title}</Text>
        <Text style={styles.date}>{dateIcon}  Release: {release_date}</Text>
        <Text style={styles.rating}>{star}  {rating}/10</Text>
        <Text style={styles.overview}>{overview}</Text>
      </View>
  <Button onPress={handleClick} color='#550000' title='View Movie Times' />
  </View>
  </animated.View>)
}

