import axios from 'axios';


export const FETCH_SMURF_START = 'FETCH_SMURF_START';
export const FETCH_SMURF_SUCCESS = 'FETCH_SMURF_SUCCESSS'
export const FETCH_SMURF_ERROR = 'FETCH_SMURF_ERROR';
export const ADD_SMURF = 'ADD_SMURF';
export const ADD_ERROR_VALUE = 'ADD_ERROR_VALUE';


export const fetchSmurfs  = () => dispatch => {
    dispatch({type:FETCH_SMURF_START});
    axios
    .get('http://localhost:3333/smurfs')
    .then(res =>{
         dispatch({type: FETCH_SMURF_SUCCESS, payload: res.data})
        // console.log("thisisiyourccal", res.data.data)
    })
    .catch(err => {
        dispatch({type: FETCH_SMURF_ERROR, payload: err.response.status})
        // console.log(err.response)
    })
}

export const addSmurf = () => {
    return({type: ADD_SMURF})
}

export const addErrorValue = () => {
    return({type: ADD_ERROR_VALUE})
}
//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.