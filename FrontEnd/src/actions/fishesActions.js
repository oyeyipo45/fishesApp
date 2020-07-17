import axios from "axios"
import { GET_FISHES, FISHES_LOADING,  ADD_FISH, DELETE_FISH } from "./type";



export const getFishes = () => async dispatch => {
   dispatch(setFishesLoading());
   await axios.get("http://localhost:3005/fishes")
   .then(res => 
    dispatch({
        type: GET_FISHES,
        payload: res.data
    }))
    
} 

export const addFish = fish => dispatch => {
    axios
    .post("http://localhost:3005/fishes", fish)
    .then(res => 
        dispatch({
            type: ADD_FISH,
            payload: res.data
        }))
}


export const deleteFish = id => async dispatch => {
    await axios
    .delete(`http://localhost:3005/fishes/${id}`)
    .then(res => 
        dispatch({
            type: DELETE_FISH,
            payload: id
        })
        )
} 


export const setFishesLoading = () => {
    return {
        type: FISHES_LOADING
    }
}