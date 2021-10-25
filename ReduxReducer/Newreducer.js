import axios from 'axios'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'




 const Fetch_Request = 'Fetch_Request'
const Fetch_Sucess = 'Fetch_Sucess'
 const Fetch_Falure = 'Fetch_Falure'



 const FetchRequest = () => {
     return{
    type: Fetch_Request
    
}}



 const FetchSucess = CountryName => {
     return{
    type: Fetch_Sucess,
       payload : CountryName
     }
}

 const FetchFaluress = error => {
     return{
    type: Fetch_Falure,
    payload: error

}}

const initialState = {
    CountryName: [],
    isLoding: false,
    error: ''
};


 const apiReducer = (state = initialState, action) => {
    switch(action.type){
        case Fetch_Request:
            return {
                ...state,
                isLoding: true,
                
            }
           
            case Fetch_Sucess:
                return {
                    ...state,
                     CountryName : action.payload,
                    isLoding : false,

                } 
                
                case Fetch_Falure:
                    return {
                        ...state,
                        CountryName: [],
                        error : action.payload,
                        isLoding : false,
                    }
                    default: return state
    }
}

 const fetchProducts = () => {
return function(dispatch) {
   dispatch(FetchRequest());
   axios.get('https://jsonplaceholder.typicode.com/posts')

   .then(response => {
       const CountryName = response.data
    dispatch(FetchSucess(CountryName))
   }) 
  .catch (error => {
      dispatch(FetchFaluress(error))
      
  })
   }
  

}




 const Store = createStore(apiReducer, applyMiddleware(thunk));
 


store.dispatch(fetchProducts())


export default (Store, fetchProducts);


