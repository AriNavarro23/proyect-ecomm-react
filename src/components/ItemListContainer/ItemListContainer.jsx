import React from 'react'
import Item from '../Item/Item';
import { products } from '../../asyncmock'

const ItemListContainer = () => {
    return (
        <div className='itemListContainer'>
            {
                products.map((product)=>{
                    return<Item product={product} />
                })
            }
        </div>
    )
}

export default ItemListContainer