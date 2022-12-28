import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({ product }) => {

    return (
        <div>
            <div>
                <img src={product.img} width={100} height={100} alt="" />
                <Link to={`/item/${product.id}`}><p>{product.name}</p></Link>
            </div>
        </div>
    )
}

export default Item