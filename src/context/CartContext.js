import { createContext, useReducer, useState } from 'react';
import { CartReducer } from '../Context/CartReducer';


export const CartContext = createContext(null)


const initialState = {
    count: 0,
    prodcut: {}
}

export const CartContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(CartReducer, initialState)
    const [cart, setCart] = useState([])


    function addCount(count, product) {
        dispatch({
            type: 'ADD_PRODUCTS',
            payload: { count, product }
        })
    }

    //Logic for clean cart
    const clearCart = () => {
        setCart([])
    }

    //Logic for remove item into cart
    const removeItem = (id) => {
        const products = cart.filter(prod => prod.id !== id )
        setCart(products)
    }

    //Logic for total into detail buy order
    const getTotal = () => {
        let total = 0
        cart.forEach(prod => {
            total += prod.quantity * prod.price
        })
        
        return total
    }

    return (
        <CartContext.Provider
            value={{
                count: state.count,
                addCount,
                getTotal,
                removeItem,
                clearCart,

            }}
        >
            {children}
        </CartContext.Provider>
    )
}