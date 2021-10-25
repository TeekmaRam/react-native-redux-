
import { Fetch_Request, Fetch_Sucess,  Fetch_Falure} from "./Action-type"

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
                        error : action.payload,
                        isLoding : false,
                    }
                    default: return state
    }
}



export default apiReducer;