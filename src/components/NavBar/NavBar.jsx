import { useContext } from "react";
import { Link } from "react-router-dom";
import Cart from '../Cart/Cart'
import { ThemeContext } from "../../Context/ThemeContext";
import './NavBar.css'
import logo from '../../assets/logoDesignCoffee.png'

const NavBar = ({ categories }) => {
    const color = useContext(ThemeContext)

    return (
        <nav className="NavBar" style={{ backgroundColor: color }}>
            <Link to='/' className="logo">
                <img src={logo} alt="logo"></img>
            </Link>
            <div className='categories'>
                {categories.map((category) => {
                    return (
                        <Link to={`/category/${category.id}`}>{category.name}</Link>
                    )
                })}
            </div>
            <Cart />
        </nav>

    )
}

export default NavBar