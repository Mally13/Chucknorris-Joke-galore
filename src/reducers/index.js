let defaultState={
    randomjoke:"It takes a team of groundskeepers three days to shave the entire surface area of Chuck Norris' balls."
}

const randomreducer=(state=defaultState,action)=>{
    if(action.type==="CHANGE_RJOKE"){
        return{
            ...state,
                 randomjoke:action.randomjoke
        }
    }else{
            return{
                ...state
            
            }
    }
}
export default randomreducer;