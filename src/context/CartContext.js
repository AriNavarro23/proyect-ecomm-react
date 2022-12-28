import { createContext, useReducer } from 'react';
import { CartReducer } from '../Context/CartReducer';

export const CartContext = createContext(null)


const initialState = {
    count: 0,
    prodcut: {}
}

export const CartContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(CartReducer, initialState)

    function addCount(count, product) {
        dispatch({
            type: 'ADD_PRODUCTS',
            payload: { count, product }
        })
    }

    return (
        <CartContext.Provider
            value={{
                count: state.count,

                addCount,
            }}
        >
            {children}
        </CartContext.Provider>
    )
}