import React from 'react'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import './Cart.css'


const Cart = () => {

    const { count } = useContext(CartContext)


    return (
        <div className='cart'>
            <Link to={'/cart'}>
                <img src="/images/cart.svg" alt="cart" />
            </Link>
            <div className='count'>
                {count}
            </div>
        </div>

    );
}

export default Cart