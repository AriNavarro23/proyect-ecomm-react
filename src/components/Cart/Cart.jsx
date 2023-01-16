import React from 'react'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import './Cart.css'
import cart from '../../assets/cart.svg'


const Cart = () => {

    const { count } = useContext(CartContext)


    return (
        <div className='cart'>
            <Link to={'/cart'}>
                <img src={cart} alt="cart" />
                <div className='count'>
                    {count}
                </div>
            </Link>
        </div>

    );
}

export default Cart