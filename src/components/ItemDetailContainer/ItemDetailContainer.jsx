import React from 'react'
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { products } from "../../asyncmock";
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {

    const { id } = useParams();
    const [product, setProducto] = useState();

    useEffect(() => {
        const producto = products.filter((p) => p.id == id);
        setProducto(producto);
    }, [id]);


    return  product ? <ItemDetail product={product} /> : <h1>...cargando</h1>
}

export default ItemDetailContainer
