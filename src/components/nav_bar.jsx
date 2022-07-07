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
                        <Link to="/" style={{textDecoration: 'none'}}><li>Home</li></Link>
                        <Link to="/store" style={{textDecoration: 'none'}}><li>Store</li></Link>
                        <Link to="/social media" style={{textDecoration: 'none'}}><li>Social Media</li></Link>
                    </ul>
                </div>
                {/* <div className='searchForm'>
                    <form className="d-flex" role="search">
                        <input 
                        className="form-control me-2" 
                        type="search" 
                        placeholder="Search" 
                        aria-label="Search" 
                        />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div> */}
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
