import { Link, NavLink } from 'react-router-dom';
import logo from '../nike_logo.png';
import '../styles.css';
import Announcement from './Announcement';
import Cart from './cart';
// import CartWidget from './cart_widge';

export default function NavBar() {
    return (
        <>
        <Announcement />
        <header>
            <div className="navBar">
                <div className="logo">
                    <img src={logo} alt="pageLogo"/>
                </div>
                <div className="menu">
                    <ul>
                        <Link to="/"><li>Home</li></Link>
                        <Link to="/store"><li>Store</li></Link>
                        <Link to="/social media"><li>Social Media</li></Link>
                    </ul>
                </div>
                <div className="btn-group">
                    <NavLink to="/category/Air Jordan">
                        <button type="button" className="btn btn-dark">Air Jordan</button>
                    </NavLink>
                    <NavLink to="/category/Air Max">
                        <button type="button" className="btn btn-dark">Air Max</button>
                    </NavLink>
                    <NavLink to="/category/Air Force">
                        <button type="button" className="btn btn-dark">Air Force</button>
                    </NavLink>
                    <NavLink to="/category/adidas">
                        <button type="button" className="btn btn-dark">Yeezy</button>
                    </NavLink>
                </div>
                <div className='cartIcon'>
                    {/* <CartWidget/> */}
                    <Cart />
                </div>
            </div>
        </header>

        </>
    );
  }
