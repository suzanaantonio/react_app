import { API_URL } from "./config";

export const getBooks = async () =>{
    try{
        const result = await fetch(API_URL)
        const content = await result.json();
        return content
    }catch(error){
        return error
    }
  
    
}