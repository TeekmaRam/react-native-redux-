//import * as  types from './Action-type'
import { Fetch_Request, Fetch_Sucess,  Fetch_Falure} from "./Action-type"
import axios from 'axios'
import CountryName from "../Newfolder/Fuckoff"
import { response } from "express"









export function FetchRequest () { 
return {
        type: Fetch_Request
        
}}



export function FetchSucess (CountryName){
return{
        type: Fetch_Sucess,
           payload : CountryName
    }}

export function FetchFaluress(error) {
    return{
        type: Fetch_Falure,
        payload: error
    
}}



export const fetchProducts = () => {
    
    return (dispatch) => {
       dispatch(FetchRequest())
     fetch('https://jsonplaceholder.typicode.com/comments',
     methods = 'get')
      .then(response => response.json())
       .then(CountryName => {
        dispatch(FetchSucess(CountryName = CountryName))
       }) 
         
      .catch(error => {
          dispatch(FetchFaluress(error))
          
      })
       }
      
    
}

