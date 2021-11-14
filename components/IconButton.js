import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'




export default function IconButton({ size, iconPosition, icon, text, color, onPress }) {
  let colorChoice=color??'rgba(0,0,0,0)'
  let elevation= color==undefined? 0:3;
  let padding= color==undefined? 0:8;
    const styles = StyleSheet.create({
      button:{
        backgroundColor:colorChoice,
        padding: padding,
        borderRadius: 3,
        color: '#fff',
        elevation: elevation,
      },
      buttonText:{
        fontSize: 16,
        color: '#fff',
        fontWeight: '500'
      }
      });

    return (
       iconPosition === 'left'?
        <TouchableOpacity
          style={styles.button}
          onPress={onPress}>
            {icon?
              <Text style={styles.buttonText}>{icon} {text}</Text>:
              <Text style={styles.buttonText}>{text}</Text>
            }
        </TouchableOpacity>:
        <TouchableOpacity
          style={styles.button}
          onPress={onPress}>
            {icon?
              <Text style={styles.buttonText}>{text} {icon}</Text>:
              <Text style={styles.buttonText}>{text}</Text>
            }
        </TouchableOpacity>

    )

}

