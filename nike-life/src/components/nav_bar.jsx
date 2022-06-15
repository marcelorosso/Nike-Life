import { Link, NavLink } from 'react-router-dom';
import logo from '../nike_logo.png';
import '../styles.css';
import CartWidget from './cart_widge';

export default function NavBar() {
    return (
        <>
        <header>
            <div className="navBar">
                <div className="logo">
                    <img src={logo} alt="pageLogo"/>
                </div>
                <div className="menu">
                    <ul>
                        <Link to="/"><li>Home</li></Link>
                        <Link to="/store"><li>Store</li></Link>
                        <li><a href="">Social Media</a></li>
                    </ul>
                </div>
                <div className="btn-group">
                    {/* <NavLink to="/store/product/Air Jordan"></NavLink>
                    <NavLink to="/store/product/Air Max"></NavLink>
                    <NavLink to="/store/product/Air Force"></NavLink> */}
                    <button type="button" className="btn btn-dark">Air Jordan</button>
                    <button type="button" className="btn btn-dark">Air Max</button>
                    <button type="button" className="btn btn-dark">Air Force</button>
                </div>
                <div className='cartIcon'>
                    <CartWidget/>
                </div>
            </div>
        </header>

        </>
    );
  }
