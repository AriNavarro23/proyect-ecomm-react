import React from 'react'
import { useContext } from 'react';
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({products}) => {
    // const {addCount} = useContext(EcommerceContext)

    //Pasandole props de hijo a padre
    const handlerAddCount = (count) =>{
        addCount(count, products[0])
    }

    return (
            <div>
                <h1>detalle del producto {products[0].name}</h1>
                <img src={products[0].img} width={300} height={300} />
                <ItemCount onChangeCount={(e) => handlerAddCount(e)}/>
            </div>
    )
}

export default ItemDetail
