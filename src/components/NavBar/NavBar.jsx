import { Link } from "react-router-dom";
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'

const NavBar = ({categories}) => {


    return (
        <nav className="NavBar" >
            <h2>LOGO</h2>
            <div className='categories'>
                {categories.map((category) => {
                    return (
                        <Link to={`/category/${category.name}`}>{category.name}</Link>
                    )
                })}
            </div>
            <CartWidget />
        </nav>

    )
}

export default NavBar