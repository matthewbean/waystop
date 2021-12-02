import React, { useEffect, useContext } from 'react'
import { View,  StyleSheet, FlatList, Linking, Dimensions } from 'react-native'
import AppContext from '../context/appContext'
import Icon from 'react-native-vector-icons/FontAwesome';
import Loading from './Loading'
import Event from './event'


export default function Events(props) {
    const appContext = useContext(AppContext)
    const { seatGeek, getSeatGeek, loading} = appContext;

    const handleClick = (url) => {
    Linking.canOpenURL(url).then(supported => {
      if (supported) {
        Linking.openURL(url);
      } else {
        console.log("Don't know how to open URI: " + url);
      }
    });
  };
    const date = <Icon name="calendar" size={16} color="#ccc" />;
    const money = <Icon name="money" size={16} color="#ccc" />;
    const location = <Icon name="map-signs" size={16} color="#ccc" />;

    const width=Dimensions.get('window')
    useEffect(() => {
        getSeatGeek()
    }, [])
    function getTime(date){
        let time = date.split(':'); // convert to array

        // fetch
        var hours = Number(time[0]);
        var minutes = Number(time[1]);

        // calculate
        var timeValue;

        if (hours > 0 && hours <= 12) {
        timeValue= "" + hours;
        } else if (hours > 12) {
        timeValue= "" + (hours - 12);
        } else if (hours == 0) {
        timeValue= "12";
        }
        
        timeValue += (minutes < 10) ? ":0" + minutes : ":" + minutes;  // get minutes
        timeValue += (hours >= 12) ? " P.M." : " A.M.";  // get AM/PM
        return timeValue
    }
    function getDate(date){
        let arr=date.split('-')
        return `${arr[1]}/${arr[2]}/${arr[0].slice(2)}`
    } 

    const styles = StyleSheet.create({
        list:{
            padding:10,
            backgroundColor: '#AA3939'
        },
      });



    return (
        loading? (<Loading></Loading>):(        
        <View style={{flex: 12}}>
            <FlatList
            style={styles.list}
            data={seatGeek}
            renderItem={({item, index}) => 
            <Event short_title={item.short_title} 
            index={index}
            handleClick={()=>handleClick(item.url)}
            date={item.time_tbd?'TBD':(`${getDate(item.datetime_local.split('T')[0])} - ${getTime(item.datetime_local.split('T')[1])}`)}
            location={item.name}
            lowest_price={item.lowest_price}
            highest_price={item.highest_price}
            image={item.performers[0].image}></Event>} />
        </View>
    )
    )
}

