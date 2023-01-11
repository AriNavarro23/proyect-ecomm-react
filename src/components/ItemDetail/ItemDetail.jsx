import React from 'react'
import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'

const ItemDetail = ({ product }) => {
    const { addCount } = useContext(CartContext)

    //Pasandole props de hijo a padre
    const handlerAddCount = (count) => {
        addCount(count, product)
    }

    return (
        <div className='ItemDetail'>
            <div className='tittleDetail'>
                <h1>Detalle del producto</h1>
            </div>
            <div className='detailProduct'>
                <h1>{product.name}</h1>
                <img src={product.img} width={300} height={300} alt='' />
                <ItemCount onChangeCount={(e) => handlerAddCount(e)} />
            </div>
        </div>
    )
}

export default ItemDetail
