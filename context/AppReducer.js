import { NEXT_PAGE, SET_MENU, GET_RECIPES, GET_RECIPE, GET_MOVIES, SET_MODAL_LOADING, SET_MODAL, PREVIOUS_PAGE, SET_SEAT_GEEK, SET_LOADING } from './types'
// eslint-disable-next-line
export default (state, action) =>{
    switch(action.type){
        case SET_MENU:
            return{...state,
                    sidebar: true}
        case SET_LOADING:
            return{...state,
                    loading: true}
        case SET_MODAL_LOADING:
            return{...state,
                modalLoading: true}
        case SET_SEAT_GEEK:
            return{...state,
                seatGeek: action.payload,
                    loading: false}
        case GET_MOVIES:
            return{...state,
                movies: action.payload,
                    loading: false}
        case GET_RECIPES:
            return{...state,
                recipes: action.payload,
                loading: false}
        case SET_MODAL:
            return{...state,
                    modalVisible: action.payload,
                    sidebar: false}
        case GET_RECIPE:
            return{...state,
                    recipe: action.payload,
                    modalLoading: false}
        case NEXT_PAGE:
            return{...state,
                seatGeek: action.payload,
                    page: state.page+1,
                    loading: false}
        case PREVIOUS_PAGE:
            return{...state,
                seatGeek: action.payload,
                    page: state.page-1,
                    loading: false}
        default:
            return state
    }
}