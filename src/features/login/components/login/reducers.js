import { combineReducers } from "redux";
import * as types from "./types";


const loginstart = ( state = false, action ) => {
    switch( action.type ) {
        case types.LOGINSTART: 
        return true;
        default: return state;
    }
}

const success = ( state = false, action ) => {
    switch( action.type ) {
        case types.SUCCESS: 
        return true;
        default: return state;
    }
}
const error = ( state = null, action ) => {
    switch( action.type ) {
        case types.ERROR: 
        return action.payload;
        default: return state;
    }
}

const reducer = combineReducers( {
    loginstart,
    success,
    error
} );

export default reducer;