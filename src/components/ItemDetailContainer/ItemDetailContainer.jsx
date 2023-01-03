import React from 'react'
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {

    const { id } = useParams();
    const [product, setProducto] = useState();

    useEffect(() => {
        const db = getFirestore();
        const orderDoc = doc(db, "item", id);
        getDoc(orderDoc).then(result => {
            if (result.exists()) {
                setProducto({ ...result.data() })
            }
        })
    }, []);


    return product ? <ItemDetail product={product} /> : <h1>...cargando</h1>
}

export default ItemDetailContainer
