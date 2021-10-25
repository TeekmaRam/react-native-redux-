
import {combineReducers} from 'redux'
import apiReducer from './UserReducer';


const combineReducerss = combineReducers({
    CountryName:apiReducer
})

export default combineReducerss;

