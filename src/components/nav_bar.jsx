import { Link, NavLink } from 'react-router-dom';
import logo from '../logo_page.jpeg';
import '../styles.css';
import Announcement from './Announcement';
import Cart from './cart';
import Login from './login';

export default function NavBar() {
    return (
        <>
        <Announcement />
        <header>
            <div className="navBar">
                <div className="logo">
                    <Link to="/">
                        <img src={logo} alt="pageLogo"/>
                    </Link>                  
                </div>
                <div className="menu">
                    <ul>
                        <Link to="/" style={{textDecoration: 'none'}}><li>Home</li></Link>
                        <Link to="/store" style={{textDecoration: 'none'}}><li>Store</li></Link>
                        <Link to="/" style={{textDecoration: 'none'}}><li>Social Media</li></Link>
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
                    <Login />
                </div>
                <div className='cartIcon'>
                    <Cart />
                </div>
            </div>
        </header>
        </>
    );
  }
