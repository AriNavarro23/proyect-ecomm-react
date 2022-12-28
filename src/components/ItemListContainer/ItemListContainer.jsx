import React, { useState } from 'react'
import Item from '../Item/Item';
import { products } from '../../asyncmock'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

const ItemListContainer = ({}) => {

    const [item, setItem] = useState(products);
    //const [itemcopy, setItemCopy] = useState(item);
    const { id } = useParams()

    const FilterCategory = new Promise((resolve, eject) => {
        if (id) {
            const newProducts = products.filter((p) => p.category == id)
            resolve(newProducts)
        }
        else {
            resolve(products)
        }
    })


    useEffect(() => {
        FilterCategory.then((response) => {
            setItem(response)
            console.log(response, item);
        })
    }, [id])


    /*const FilterCategory = () => {
        if (id && itemcopy) {
            const newProductos = itemcopy.filter((p) => p.category == id);
            return newProductos;
        } else {
            return itemcopy;
        }
    };

    useEffect(() => {
        const filtro = FilterCategory();
        setItem(filtro);
        console.log({ id, filtro });
    }, [id]);
*/
    return (
        <div className='itemListContainer'>
            {
                item && item.map((product) => {
                    return <Item product={product} />
                })
            }
        </div>
    )
}

export default ItemListContainer