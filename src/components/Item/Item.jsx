import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({ products }) => {
    console.log(products);
    return (
        <div>
            <div>
                <img src={products.img} width={100} height={100} alt="" />
                <Link to={`/item/${products.id}`}><p>{products.name}</p></Link>
            </div>
        </div>
    )
}

export default Item