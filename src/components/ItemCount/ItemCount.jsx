import React, { useState } from 'react'
import './ItemCount.css'

const ItemCount = ({ onChangeCount }) => {
    const [value, setValue] = useState(0)

    // Funcion que suma contador 
    const handlerAddCount = () => {
        onChangeCount(value + 1)
        setValue(value + 1)
    }

    // Funcion que suma contador 
    const handlerSubstractCount = () => {
        onChangeCount(value - 1)
        setValue(value - 1)
    }

    return (
        <div>
            <h4>Add Item</h4>
            <div className='containerInput'>
                <button onClick={() => handlerSubstractCount()}>-</button>
                <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
                <button onClick={() => handlerAddCount()}>+</button>
            </div>
        </div>
    )
}

export default ItemCount