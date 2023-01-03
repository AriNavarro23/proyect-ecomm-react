import React, { useState } from 'react'
import { collection, doc, getDoc, getDocs, getFirestore } from 'firebase/firestore';
import Item from '../Item/Item';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import './ItemListContainer.css'

const ItemListContainer = ({}) => {

    const [item, setItem] = useState([]);
    const [itemcopy, setItemCopy] = useState(item);
    const { id } = useParams()

    /*
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
*/

    const FilterCategory = () => {
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


    // la palabra snapshot es solo una variable, se puede cambiar por cualquier nombre
    // seria el resultado a la respuesta de la consulta de firebase



    useEffect(() => {
        //trae la instancia al que conectamos con firestore
        const db = getFirestore()
        // creo una const para traer la coleccion a la que queremos consultar y 
        // definimos cual para poder acceder a la info
        const itemCollection = collection(db, 'item')
        getDocs(itemCollection).then((result) => {
            setItem(result.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
            setItemCopy(result.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
        })
    }, [])


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