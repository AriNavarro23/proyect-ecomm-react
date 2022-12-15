import React, { useState } from 'react'
import Item from '../Item/Item';
import { products } from '../../asyncmock'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

const ItemListContainer = () => {

    const [item, setItem] = useState(products);
    const { id } = useParams()

    const FilterCategory = new Promise((resolve, eject) => {
        if(id){
        const newProducts = products.filter((p) => p.category == id)
        resolve(newProducts)
    }
    else{
        resolve(products)
    }
    })


    useEffect(() => {
        FilterCategory.then((response) => {
            setItem(response)
            console.log(response, item);
        })
    }, [id])

    return (
        <div className='itemListContainer'>
            {
                item && item.map((products) => {
                    return <Item products={products} />
                })
            }
        </div>
    )
}

export default ItemListContainer