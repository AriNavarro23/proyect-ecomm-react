import React from 'react'
import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({product}) => {
    const {addCount} = useContext(CartContext)

    //Pasandole props de hijo a padre
    const handlerAddCount = (count) =>{
        addCount(count, product[0])
    }

    return (
            <div>
                <h1>detalle del producto {product[0].name}</h1>
                <img src={product[0].img} width={300} height={300} alt='' />
                <ItemCount onChangeCount={(e) => handlerAddCount(e)}/>
            </div>
    )
}

export default ItemDetail
