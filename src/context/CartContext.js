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

    
    //Logic for give me quantity in cart
    const getQuantity = () => {
        let count = 0
        cart.forEach(prod => {
            count += prod.quantity
        })
        return count
    }

    //
    const isInCart = (id) => {
        return cart.some(p => p.id === id )
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

    //Logic for get quantity of product into cart
    const getQuantityProd = (id) => {
        return cart.find(prod => prod.id === id)?.quantity
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
                getQuantity,
                isInCart,
                clearCart,
                removeItem,
                getQuantityProd,
                getTotal,
            }}
        >
            {children}
        </CartContext.Provider>
    )
}