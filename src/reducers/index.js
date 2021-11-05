//we are going to declare our constants here but don't forget to move them to a separate file and import them latere
export const FETCH = 'FETCH_SMURFS';
export const SUCCESS_FETCH = 'SUCCESFUL_SMURF_FETCH';
export const ERROR = 'ERROR';
export const ADD_SMURF = 'ADD_SMURF';
export const  ADD_ERROR_VALUE = 'ADD_ERROR_VALUE';

export const initialState = {
    smurfs: [],
    loading: true,
    errorMess: 'this is what is going wrong'
}

const reducer = (state, action)=>{
    switch(action.type) {
        case FETCH:
            return 
        case SUCCESS_FETCH:
            return 
        case ERROR:
            return
        case ADD_SMURF:
            return
        case ADD_ERROR_VALUE:
            return
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