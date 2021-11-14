import React, { useEffect, useContext } from 'react'
import { View,  StyleSheet, FlatList, Linking } from 'react-native'
import AppContext from '../context/appContext'
import Loading from './Loading'
import Recipe from './recipe'
import RecipeModal from './recipeModal'



export default function Recipes(props) {
    const appContext = useContext(AppContext)
    const { recipes, getRecipes, getRecipe, loading} = appContext;

    const handleClick = (id) => {
      console.log(id)
      getRecipe(id)
  };

    useEffect(() => {
        getRecipes()
    }, [])

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
            data={recipes}
            renderItem={({item}) => 
            <Recipe 
            title={item.title}
            image={item.image}
            id={item.id} 
            getRecipe={()=>handleClick(item.id)}
            ></Recipe>} />
            <RecipeModal></RecipeModal>
        </View>
    )
    )
}

