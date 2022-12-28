import React from 'react'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';

const Cart = () => {
    const { count } = useContext(CartContext)

    return (
        //poner img de carrito de comprasa, usar libreria
        <div>
            <img src="" alt='' />
            <div className=''>
                <p>{count}</p>
            </div>
            <Link to='/cart'>Terminar compra</Link>
        </div>
    )
}

export default Cart;
