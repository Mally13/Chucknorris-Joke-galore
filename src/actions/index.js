import axios from "axios";

export function loadrandomjoke(){
    return(dispatch)=>{
        return axios.get("https://api.chucknorris.io/jokes/random").then((response)=>{
            dispatch(changerandomjoke(response.data.value));
        })
    }
}

export function changerandomjoke(value){
    return{
        type:"CHANGE_RJOKE",
        value:value
    }
}