
// import { createStore, applyMiddleware } from 'redux'
// import thunkMiddleware from 'redux-thunk'
// //import {fetchProducts} from './Action-fetch'
// import {createLogger} from 'redux-logger';
// import {combineReducers} from 'redux'
import apiReducer from './UserReducer';
import {fetchProducts} from './Action-fetch'
import { createStore, applyMiddleware, compose } from 'redux';    
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import {FetchRequest, FetchSucess} from './Action-fetch'


 
const middleware = applyMiddleware(thunk, promise, logger);

const Store = createStore(apiReducer,compose(middleware));


Store.subscribe(() => {console.log(Store.getState())})
Store.dispatch(fetchProducts())


export default Store;






