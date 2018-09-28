import {ADD_PLACE,DELETE_PLACE} from '../actions/actionTypes'


const initialState={
    places:[]
}

const reducer=(state=initialState,action)=>{
    switch(action.type){
        case ADD_PLACE:
            return {
                ...state,
                places:state.places.concat({
                    key:Math.random(),
                    name: action.placeName,
                    image: {
                        uri:
                        "https://www.google.com.pk/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjyuuiKz8LdAhUnNOwKHdKfAegQjRx6BAgBEAU&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FFlag_of_Canada&psig=AOvVaw0Q9o8_AHMX-bYAAPUCcAMh&ust=1537293599670843"
                    }
                  })
            };
        case DELETE_PLACE:
            return{
                ...state,
                places: state.places.filter( place => {
                    return place.key !== action.placeKey;
                  })
            };
        default:
            return state;
    }
}


export default reducer;