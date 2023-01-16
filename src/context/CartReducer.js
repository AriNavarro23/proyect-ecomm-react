export function CartReducer(state,action) {
    switch (action.type) {
        case 'ADD_PRODUCTS':
            
            if(state.count){
                console.log(state.count)
            }

            return{
                ...state,
                count:state.count + 1,
                product:[action.payload.product]
            }
    
        default:
            break;
    }
}


