import React, { useRef } from 'react'
import { View, Image, Text, StyleSheet, Button, Easing, Animated } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { useSpring, animated, config } from '@react-spring/native'


export default function MovieTheater({title, index, overview, image, release_date, rating, handleClick, id }) {
  const props = useSpring({ to: { position: 'relative', left: 0, }, from: { left: -800 }, delay: index*100+500, config: config.stiff, onRest:()=>{if (rating !== undefined)start.start()} })
    const textColor= '#fff'
    const dateIcon = <Icon name="calendar" size={16} color="#fff" />;
    const star = <Icon name="star" size={16} color="#fff" />;

    const styles = StyleSheet.create({
        item: {
          fontSize: 18,
          lineHeight: 18,
          fontWeight: '900',
          color: textColor,
          zIndex: 1,
        },
        date: {
            color: textColor,
            zIndex: 1,
        },
        rating: {
            color: textColor,
            position: 'absolute',
            fontSize: 24,
            top: 20, 
            left: 30
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
        },
        bar: {
          width: 100,
          height: 100,
          position: 'absolute',
          backgroundColor: 'rgba(0,0,0,.5)',
          borderTopLeftRadius: 60,
          borderTopRightRadius: 60,
          top: -62,
          right: 0
        },
        fill: {
          width: 100,
          height: 100,
          borderWidth: 15,
          borderRadius: 50,
          borderRightColor: rating>6.5?'green': rating>3?'yellow': 'red',
          borderTopColor: rating>6.5?'green': rating>3?'yellow': 'red',
          borderLeftColor: 'rgba(0,0,0,0)',
          borderBottomColor: 'rgba(0,0,0,0)',

        },
        cover: {
          height: 50,
          width: 110,
          position: 'relative',
          top: -50,
          zIndex: 1,
          backgroundColor: '#801616',
          
          
        }
      });


if(rating !== undefined){
const spinValue = useRef(new Animated.Value(0)).current;

// First set up animation 
var start=Animated.timing(
    spinValue,
  {
    toValue: 1,
    duration: 800,
    easing: Easing.out(Easing.ease), // Easing is an additional import from react-native
    useNativeDriver: true  // To make use of native driver for performance
  }
)

// Next, interpolate beginning and end values (in this case 0 and 1)
var spin = spinValue.interpolate({
  inputRange: [0, 1],
  outputRange: ['-225deg', `${(rating*.1*180-225)}deg`]
})
}



    return (       
      <animated.View style={props}>
  <View style={styles.card}>
      <Image style={styles.image} source={{uri:image}} />
      <View style={styles.details}>
        <Text style={styles.item}>{title}</Text>
        <Text style={styles.date}>{dateIcon}  Release: {release_date}</Text>
        {rating !== undefined &&<View style={styles.bar}>
          <Animated.View style={[styles.fill, {transform: [{rotate: spin}]}]}></Animated.View>
          <Text style={styles.rating}>{rating*10}%</Text>
          <View style={styles.cover}></View>
        </View>}
        <Text style={styles.overview}>{overview}</Text>
      </View>
  <Button onPress={handleClick} color='#550000' title='View Showtimes' />
  </View>
  </animated.View>)
}

