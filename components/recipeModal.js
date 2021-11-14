import React, { useEffect, useContext } from 'react'
import { Linking, Alert, Modal, Image, StyleSheet, Text, Pressable, ScrollView, View } from "react-native";
import IconButton from './IconButton';
import AppContext from '../context/appContext'
import Icon from 'react-native-vector-icons/FontAwesome';



export default function RecipeModal(props) {
    const appContext = useContext(AppContext)
    const { recipe, modalVisible, closeModal} = appContext;

      const YouTube = <Icon name="play" size={16} color="#fff" />;
      const source = <Icon name="window-maximize" size={16} color="#fff" />;
      const close = <Icon name="times-circle" size={36} color="#fff" />;
    
    const handleClick=(url)=>{
      Linking.canOpenURL(url).then(supported => {
        if (supported) {
          Linking.openURL(url);
        } else {
          console.log("Don't know how to open URI: " + url);
        }
      });
    }

    const handleFavorite = (id) => {
  };
  useEffect(() => {
    console.log(recipe)
  }, [])

  
const styles = StyleSheet.create({

  backdrop: {
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  
  modalView: {
    margin: 20,
    backgroundColor: "#801616",
    borderRadius: 3,
    padding: 35,
    alignItems: 'flex-start',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  image: {
    width: '100%',
    height: 300
  },
  title: {
    fontSize: 24,
    lineHeight: 24,
    fontWeight: '900',
    marginVertical: 15,
    color: 'white'
  },
  heading: {
    fontSize: 16,
    marginVertical: 10,
    color: 'white',
    fontWeight: '900'
  },
  ingredient: {
    color: 'white',
    marginBottom: 10
  },
  instruction: {
    color: 'white',  
    marginBottom: 10
  },
  button: {
    position: 'absolute',
    left: -20,
    top: -20,
    padding: 10,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
  },
  links: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',  }
});




  if (recipe === null){
    return(null)
  }
    return (
      <Modal
        style={styles.modal}
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        {recipe !==null && 
        <ScrollView style={styles.scrollView}>
          <View style={styles.backdrop}>
            <View style={styles.modalView}>
            <Image style={styles.image} source={{uri:recipe.image}} />
              <Text style={styles.title}>{recipe.title}</Text>
              <Text style={styles.heading}>Ingredients</Text>
              <View style={styles.ingredients}>
                {recipe.ingredients.map((item,i)=>(
                  <Text style={styles.ingredient} key={i}>{`\u2022`} {recipe.amounts[i]} {item} </Text>
                ))}
              </View>
              <Text style={styles.heading}>Instructions</Text>
              <View style={styles.instructions}>
                {recipe.instructions.filter((item)=>item.length!=0).map((item,i)=>(
                <Text key={i} style={styles.instruction}>{item}</Text>
                ))}
              </View>
              <View style={styles.links}>
              {recipe.YouTube && <IconButton onPress={()=>handleClick(recipe.YouTube)} color={'#550000'} icon={YouTube}  text='View on Youtube ' iconPosition='right'/>}
              {recipe.source && <IconButton onPress={()=>handleClick(recipe.source)} color={'#550000'} icon={source}  text='View Source' iconPosition='right'/>}
              </View>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={closeModal}
              >
                <Text style={styles.textStyle}>{close}</Text>
              </Pressable>
            </View>
          </View>
        </ScrollView>}
      </Modal>
      
  );
};


