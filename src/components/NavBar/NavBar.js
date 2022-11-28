import React from 'react';
import BurguerButton from '../BurguerButton/BurguerButton';
import '../NavBar/NavBar.css'
import { useState } from 'react';

function NavBar() {

    const [ clicked, setClicked ] = useState(false)
    console.log(clicked)
    const handleClick = () => {
        //cuando esta true lo pasa a false y viceversa
        setClicked(!clicked)
    }

    return (
        <>
            <nav>
                <h2>Navbar <span>Responsive</span></h2>
                <div className={`listPage ${clicked ? 'active' : ''}`}>
                    <a href='/'>Home</a>
                    <a href='/'>Shop</a>
                    <a href='/'>About</a>
                    <a href='/'>Contact</a>
                    <a href='/'>Blog</a>
                </div>
                <div className='burguer'>
                    <BurguerButton clicked={clicked} handleClick={handleClick}/>
                </div>
            </nav>
        </>

    )
}

export default NavBar


