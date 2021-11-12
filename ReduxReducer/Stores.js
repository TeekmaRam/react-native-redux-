import apiReducer from './UserReducer';
import {fetchProducts} from './Action-fetch'
import { createStore, applyMiddleware, compose } from 'redux';    
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import logger from 'redux-logger';



 
const middleware = applyMiddleware(thunk, promise, logger);

const Store = createStore(apiReducer,compose(middleware));


Store.subscribe(() => {console.log(Store.getState())})
Store.dispatch(fetchProducts())


export default Store;






