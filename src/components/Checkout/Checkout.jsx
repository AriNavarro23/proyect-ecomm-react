import React from 'react'
import { products } from '../../asyncmock';
// import { collection, getFirestore } from "module";

const Checkout = () => {

    /*const sendOrder = () => {
        const order = {
            buyer:{
                name: 'Ariel', phone:'1234',
                email: 'ariel@coder.com'
            },
            items:[{
                name:'iphone',
                price: 2000
            }],
            total: 2000
        }

        // referencia a base de datos
        const db = getFirestore();

        //referencia a colleccion, pasar parametro de orden de colleccion en firestore
        const orderCollection = collection(db,'')
    } */

    return (
        <div>
            <h1>Finalizar comprasa</h1>
            {products.map((product) => {
                return(
                    <div className=''>
                        <img src={product.img} width={50} height={50} alt="" />
                        <p>{product.name}</p>
                        <p>{product.price}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default Checkout
