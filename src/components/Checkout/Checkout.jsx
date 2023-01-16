import React, { useContext } from 'react'
import { products } from '../../asyncmock';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import './Checkout.css'
import { CartContext } from '../../Context/CartContext';

const Checkout = () => {

    const { getTotal } = useContext(CartContext);

    const sendOrder = () => {
        const order = {
            buyer:{
                name: 'Ariel', phone:'1234',
                email: 'ariel@coder.com'
            },
            items:[{
                name:'iphone',
                price: 2000
            }],
            total: getTotal(),
        }

        // referencia a base de datos
        const db = getFirestore();
        //referencia a colleccion, pasar parametro de orden de colleccion en firestore
        const orderCollection = collection(db,'orders')
        //Llamo funcion addDoc, para traer ordenes y enviar, como es una promesa uso .then
        //le paso el ID como parametro
        addDoc(orderCollection,order).then(({id}) => alert('Orden generada! '))
    };

    return (
        <div>
            <h1>Finalizar compra</h1>
            {products.map((product) => {
                return(
                    <div className='buyOrder'>
                        <img src={product.img} width={50} height={50} alt="" />
                        <p>{product.name}</p>
                        <p>{product.price}</p>
                    </div>
                );
            })}
            <h3>Total: ${getTotal()}</h3>
            <div>
                <button onClick={() => sendOrder()}>Generar orden</button>
            </div>
        </div>
    );
};

export default Checkout
