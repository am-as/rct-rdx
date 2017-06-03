import { createStore, combineReducers } from "redux";
import reducer from "../features/login/components/login/reducers.js";

export default function configureStore( initialState ) {
    
    

    return createStore(
        reducer,
        initialState      
    );
}