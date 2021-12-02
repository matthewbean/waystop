import React, { useEffect, useContext } from 'react'
import { View,  StyleSheet, FlatList, Linking, Dimensions } from 'react-native'
import AppContext from '../context/appContext'
import Icon from 'react-native-vector-icons/FontAwesome';
import Loading from './Loading'
import MovieTheater from './movie-theater'




export default function MoviesTheater(props) {
    const appContext = useContext(AppContext)
    const { movies, getMoviesTheater, loading} = appContext;

    const handleClick = (url) => {
      console.log(url)
    Linking.canOpenURL(url).then(supported => {
      if (supported) {
        Linking.openURL(url);
      } else {
        console.log("Don't know how to open URI: " + url);
      }
    });
  };
    const date = <Icon name="calendar" size={16} color="#ccc" />;

    useEffect(() => {
        getMoviesTheater()
    }, [])
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
            data={movies}
            renderItem={({item}) => 
            <MovieTheater 
            title={item.title}
            overview={item.overview}
            image={item.image}
            release_date= {getDate(item.release_date.split('T')[0])}
            rating={item.rating}
            id={item.id} 
            handleClick={()=>handleClick(`https://www.fandango.com/93710_movietimes?mode=general&q=93710`)}
            ></MovieTheater>} />
        </View>
    )
    )
}

