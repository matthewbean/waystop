import axios from 'axios';
import React, { useReducer } from 'react';
import AppContext from './appContext';
import appReducer from './AppReducer';
import{
    SET_SEAT_GEEK,
    NEXT_PAGE,
    PREVIOUS_PAGE,
    SET_LOADING,
    GET_MOVIES,
    GET_RECIPES,
    GET_RECIPE,
    SET_MODAL,
    SET_MODAL_LOADING,
    SET_MENU
} from './types'

const AppState = props=>{

    const initialState = {
        seatGeek: null,
        movies: null,
        recipes: null,
        recipe: null,
        page: 1,
        loading: true,
        modalLoading: true,
        foodType: 'chicken',
        modalVisible: false,
        sidebar: false
    };
    const [state, dispatch] = useReducer(appReducer, initialState);
    //get events
        const getSeatGeek= async ()=>{
            dispatch({type: SET_LOADING})
            try {
                const res = await axios.get(`http://10.0.0.91:9000/seatgeek`,
                {
                    params: {
                        "zip": "95624",
                        "cost": "200",
                        "page": state.page
                    }
                })
                dispatch({type: SET_SEAT_GEEK, payload:res.data})
            } catch (error) {
                console.log(error)
            }
        }
    //get movies
    const getMovies= async ()=>{
        dispatch({type: SET_LOADING})
        try {
            const res = await axios.get(`http://10.0.0.91:9000/movies`,
            {
                params: {
                    "page": state.page
                }
            })
            console.log(res.data)
            dispatch({type: GET_MOVIES, payload:res.data})
        } catch (error) {
            console.log(error)
        }
    }
    //get recipes
    const getRecipes= async ()=>{
        dispatch({type: SET_LOADING})
        try {
            const res = await axios.get(`http://10.0.0.91:9000/recipes`,
            {
                params: {
                    "category": state.foodType
                }
            })
            dispatch({type: GET_RECIPES, payload:res.data})
        } catch (error) {
            console.log(error)
        }
    }
    //get specific recipe
    const getRecipe= async (id)=>{
        dispatch({type: SET_MODAL, payload: true})
        try {
            const res = await axios.get(`http://10.0.0.91:9000/recipe`,
            {
                params: {
                    "id": id
                }
            })
            dispatch({type: GET_RECIPE, payload:res.data})
        } catch (error) {
            console.log(error)
        }
    }
    //close modal
    const closeModal=()=>{
        dispatch({type: SET_MODAL, payload: false})
        dispatch({type: SET_MODAL_LOADING})
    }
    //set sidebar
    const setSidebar=()=>{
        dispatch({type: SET_MENU})
        
    }
    //go to next page
        const next = async ()=>{
            dispatch({type: SET_LOADING})
            try {
                const res = await axios.get(`http://10.0.0.91:9000/seatgeek`,
                {
                    params: {
                        "zip": "95624",
                        "cost": "200",
                        "page": state.page+1
                    }
                })
                dispatch({type: NEXT_PAGE, payload:res.data})
            } catch (error) {
                console.log(error)
            }

        }
    //go to previous page
    const previous = async ()=>{
        console.log(state.seatGeek)
        dispatch({type: SET_LOADING})
        try {
            const res = await axios.get(`http://10.0.0.91:9000/seatgeek`,
            {
                params: {
                    "zip": "95624",
                    "cost": "200",
                    "page": state.page-1
                }
            })
            dispatch({type: PREVIOUS_PAGE, payload:res.data})
        } catch (error) {
            console.log(error)
        }
    }
//set context 
    return (
        <AppContext.Provider 
            value = {{
                seatGeek: state.seatGeek,
                movies: state.movies,
                recipes: state.recipes,
                recipe: state.recipe,
                loading: state.loading,
                modalLoading: state.modalLoading,
                page: state.page,
                sidebar: state.sidebar,
                modalVisible: state.modalVisible,
                getSeatGeek,
                getRecipe,
                getMovies,
                getRecipes,
                getRecipe,
                closeModal,
                previous,
                next,
                setSidebar
            }}   
            >
            
            {props.children}
        </AppContext.Provider>
    )

};

export default AppState;