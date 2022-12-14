import React from 'react'

const Item = ({ products }) => {
    return (
        <div> {
            products.map((product => {
                return (
                    <div>
                        <img src={product.img} alt="" />
                        <p>{product.name}</p>
                    </div>
                )
            }))
        }
        </div>
    )
}

export default Item