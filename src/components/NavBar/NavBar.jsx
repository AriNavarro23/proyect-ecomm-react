import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {

    const categories = [
        { id: 1, name: "MarketPlace" },
        { id: 2, name: "About" },
        { id: 3, name: "Contact" }
    ]

    return (
        <nav className="NavBar" >
            <h2>LOGO</h2>
            <div className='categories'>
                {categories.map((category, index) => {
                    return (
                        <a href="" key={index}>{category.name}</a>
                    )
                })}
            </div>
            <CartWidget />
        </nav>

    )
}

export default NavBar