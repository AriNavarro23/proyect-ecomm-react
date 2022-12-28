import { useContext } from "react";
import { Link } from "react-router-dom";
import CartWidget from '../CartWidget/CartWidget'
import { ThemeContext } from "../../Context/ThemeContext";
import './NavBar.css'

const NavBar = ({ categories }) => {
    const color = useContext(ThemeContext)

    return (
        <nav className="NavBar" style={{ backgroundColor: color }}>
            <Link to='/'>
                <h2>LOGO</h2>
            </Link>
            <div className='categories'>
                {categories.map((category) => {
                    return (
                        <Link to={`/category/${category.id}`}>{category.name}</Link>
                    )
                })}
            </div>
            <CartWidget />
        </nav>

    )
}

export default NavBar