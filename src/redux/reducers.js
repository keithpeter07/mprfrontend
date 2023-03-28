import types from "./actionTypes"




const clientReducer = (state = {greeting: 'hello'}, action) => {

    switch(action.type){

        case types.ADD_SIGNUP_DETAILS:
            console.log('I do work')
            return{
                ...state,
                ...action.payload
            }

        default: return state
    }
}





export default clientReducer