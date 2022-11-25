import React from 'react';
import '../NavBar/NavBar.css'

function NavBar() {
    return(
        <>
        <nav>
            <h2>Navbar <span>Responsive</span></h2>
            <div className='listPage'>
                <a href='/'>Home</a>
                <a href='/'>Shop</a>
                <a href='/'>About</a>
                <a href='/'>Contact</a>
                <a href='/'>Blog</a>
            </div>
        </nav>
        </>

    )
}

export default NavBar


