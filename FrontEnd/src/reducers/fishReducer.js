
import { GET_FISHES, FISHES_LOADING, ADD_FISH, DELETE_FISH } from "../actions/type";


const initialState = {
  fishes: [],
  loading: false
};


const fishReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_FISHES:
            return {
                ...state,
                fishes: action.payload,
                loading: false
            }
          case ADD_FISH:
            return {
                ...state,
                fishes: [...state.fishes, action.payload]
            }
          case DELETE_FISH:
            const updatedArray = state.fishes.filter(fish => fish.id !== action.payload) 
            return {
              ...state,
              fishes: updatedArray
            }
            case FISHES_LOADING:
              return {
                ...state,
                loading: true
              }
        default:
            return state;
    }
}


export default fishReducer;