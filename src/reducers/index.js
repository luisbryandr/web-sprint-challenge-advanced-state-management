import { act } from "react-dom/test-utils";

//we are going to declare our constants here but don't forget to move them to a separate file and import them latere
export const FETCH_SMURF_START = 'FETCH_SMURF_START';
export const FETCH_SMURF_SUCCESS = 'FETCH_SMURF_SUCCESSS'
export const FETCH_SMURF_ERROR = 'FETCH_SMURF_ERROR';
export const ADD_SMURF = 'ADD_SMURF';
export const  ADD_ERROR_VALUE = 'ADD_ERROR_VALUE';

export const initialState = {
    smurfs: [],
    loading: false,
    errorMess: ''
}

const reducer = (state = initialState, action)=>{
    switch(action.type) {
        case FETCH_SMURF_START:
            return {
                ...state,
                errorMess: '',
                loading: true
            }
        case FETCH_SMURF_SUCCESS:
            return {
                ...state,
                errorMess: '',
                loading: false
            }
        case FETCH_SMURF_ERROR:
            return {
                ...state,
                errorMess: action.payload,
                loading: false
            }
        case ADD_SMURF:
            return{
                ...state,
                smurfs: [
                    {
                    id: action.payload.id,
                    name: action.payload.name,
                    nickname: action.payload.nickname.payload,
                    position: action.payload.position,
                    description: action.payload.description
                }]
            }
        case ADD_ERROR_VALUE:
            return {
                ...state,
                errorMess: action.payload
            }
    }
}

//**************DO NOT EDIT ANY CODE BEYOND THIS POINT**************//
export default reducer;

//Task List:
//1. Adds the following state values into the initialState:
//  - an array of smurfs
//  - a boolean indicating if the app is loading
//  - a string indicating a possible error message

//2. Add in the arguments needed to complete a standard reducer function.
//3. Add in a reducer case to accomidate the start of a smurf fetch.
//4. Add in a reducer case to accomidate the successful smurf api fetch.
//5. Add in a reducer cases to accomidate the failed smurf api fetch.
//6. Add in a reducer case to accomidate adding a smurf (including the name, nickname, position, summary and an internally generated id) into your smurf list.
//7. Add in a reducer case that adds in a value to the error message.