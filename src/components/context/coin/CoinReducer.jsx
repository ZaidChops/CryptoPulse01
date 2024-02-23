const coinReducer=(state,action)=>{

    switch (action.type) {

        case "SEARCH_COIN":
            return{
                ...state,
                coins: action.payload
                
            }
        
    
        default:
            return state
    }

}

export default coinReducer