import React from 'react'
import { View, Image, Text, StyleSheet, Button } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { useSpring, animated, config } from '@react-spring/native'


export default function MovieStreaming({title, index, overview, image, release_date, rating, id }) {
  const props = useSpring({ to: { position: 'relative', left: 0, }, from: { left: -800 }, delay: index*100+500, config: config.stiff })
  const ratingProps = useSpring({ to: { width: rating*10, height: 8, backgroundColor: 'green' }, from: { width: 0 }, delay: index*100+1000, config: config.default })
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
        },
        bar: {
          width: 100,
          height: 100,
          backgroundColor: 'rgba(0,0,0,0.3)'
        },
        fill: {
          width: 50,
          height: 50,
          borderWidth: 10,
          borderRadius: 25,
          borderRightColor: 'green',
          borderTopColor: 'green',
          borderLeftColor: 'rgba(0,0,0,0)',
          borderBottomColor: 'rgba(0,0,0,0)',
          transform: [
            { rotateZ: "-225deg" }
          ] 

        }
      });



    return (       
      <animated.View style={props}>
  <View style={styles.card}>
      <Image style={styles.image} source={{uri:image}} />
      <View style={styles.details}>
        <Text style={styles.item}>{title}</Text>
        <Text style={styles.date}>{dateIcon}  Release: {release_date}</Text>
        <Text style={styles.rating}>{star}  {rating*10}%</Text>
        <View style={styles.bar}>
          <animated.View style={styles.fill}></animated.View>
        </View>
        <Text style={styles.overview}>{overview}</Text>
      </View>
  <Button color='#550000' title='Viewing Options' />
  </View>
  </animated.View>)
}

