import React, { useEffect, useContext } from 'react'
import { View, Image,  Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native'
import AppContext from '../context/appContext'
import Icon from 'react-native-vector-icons/FontAwesome';
import IconButton from './IconButton'




export default function PageControls(props) {
    const appContext = useContext(AppContext)
    const { page, previous, next, loading } = appContext;
    const onPrevious=()=>{!loading&&previous()}
    const onNext=()=>{!loading&&next()}
    const styles = StyleSheet.create({
      controls:{
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        alignItems: 'center',
        backgroundColor: '#801616'
      },
      });

      const left = <Icon name="arrow-left" size={16} color="#fff" />;
      const right = <Icon name="arrow-right" size={16} color="#fff" />;

    return (
        <View style={styles.controls}>
          {page<=1?<Text style={{width: 69}}></Text>:<IconButton color={'#550000'} icon={left} onPress={onPrevious} text='PREV' iconPosition='left'/>}
          <Text style={{color:'#fff'}}>Page: {page}</Text>
          <IconButton color={'#550000'} icon={right} onPress={onNext} text='NEXT' iconPosition='right'/>
        </View>
    )

}

