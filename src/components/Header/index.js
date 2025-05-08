import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import { FiSearch } from "react-icons/fi";
import { BsCurrencyRupee } from "react-icons/bs";
import Context from '../../context/context';
import './index.css';

const Header = () => {
    const [input, setInput] = useState("");
    const navigate = useNavigate();
    const {isLoginSuccessful, setIsLoginSuccessful, total} = useContext(Context)
    const onClickLogout = () => {
        localStorage.removeItem('isAuthenticated');
        setIsLoginSuccessful(false);
        navigate('/user-login')
    };
    const onClickCart = () => {
        if(!isLoginSuccessful) {
            alert('Please login to view the cart');
            return;
        }
        navigate('/cart');
    };
    const handleSearch = () => {
        if (input.trim() !== "") {
            navigate(`/search-list-page?query=${encodeURIComponent(input)}`);
        }
    };

    return (
                <>
                        <nav className='nav-container'>
                            <ul>
                                <li>
                                    <Link className='main-heading' to='/'>thegiftshop.in</Link>
                                </li>
                                <li>
                                    <div className="search-container">
                                        <input
                                            type="text"
                                            className="head-search-bar"
                                            placeholder="Search thegiftshop.in"
                                            value={input}
                                            onChange={(e) => setInput(e.target.value)}
                                        />
                                        <button className="head-search-btn" onClick={handleSearch}>
                                            <FiSearch className="head-search-icon" />
                                        </button>
                                    </div>
                                </li>
                                <li>
                                    <Link className='header-para-abt' to='/about'>About Us</Link>
                                </li>
                                <li>
                                    <Link className='header-para' to='/contact'>Contact Us</Link>
                                </li>
                                <li>
                                    {isLoginSuccessful ? (
                                        <>
                                        <div className='d-flex flex-row'>
                                            <div>
                                                <Dropdown>
                                                    <Dropdown.Toggle className='account-dropdown' variant="link" id="dropdown-basic">
                                                        My Account
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu>
                                                        <Dropdown.Item as={Link} onClick={onClickLogout} to="/user-login">Logout</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </div>
                                            <Link to='/cart'>
                                                <button className='logout-btn'>
                                                    <img className='cart-sm-img' src='https://img.icons8.com/?size=100&id=DIl2xHkbnHPz&format=png&color=000000' alt='cart small img'/>
                                                    Cart
                                                    </button>
                                            </Link>
                                        </div>
                                        </>
                                    ) : (
                                        <div>
                                            <Link to='/user-login'>
                                                <Dropdown>
                                                    <Dropdown.Toggle className='account-dropdown' variant="link" id="dropdown-basic">
                                                        My Account
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu>
                                                        <Dropdown.Item as={Link} to="/user-login">User Login</Dropdown.Item>
                                                        <Dropdown.Item as={Link} to="/admin-login">Admin Login</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </Link>
                                        </div>
                                    )}
                                </li>
                            </ul>
                        </nav>
                        <nav className='nav-con-2'>
                            <Dropdown>
                                <Dropdown.Toggle className='category-dropdown' variant="link" id="dropdown-category">
                                    Browse By Category
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item as={Link} to="/wedding-gifts">Category 1</Dropdown.Item>
                                    <Dropdown.Item as={Link} to="/wedding-gifts">Category 2</Dropdown.Item>
                                    <Dropdown.Item as={Link} to="/wedding-gifts">Category 3</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Dropdown>
                                <Dropdown.Toggle className='category-dropdown' variant="link" id="dropdown-material">
                                    Browse By Material
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item as={Link} to="/wedding-gifts">Material 1</Dropdown.Item>
                                    <Dropdown.Item as={Link} to="/wedding-gifts">Material 2</Dropdown.Item>
                                    <Dropdown.Item as={Link} to="/wedding-gifts">Material 3</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Dropdown>
                                <Dropdown.Toggle className='category-dropdown' variant="link" id="dropdown-occasion">
                                    Browse By Occasion
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item as={Link} to="/wedding-gifts">Occasion 1</Dropdown.Item>
                                    <Dropdown.Item as={Link} to="/wedding-gifts">Occasion 2</Dropdown.Item>
                                    <Dropdown.Item as={Link} to="/wedding-gifts">Occasion 3</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Link to='/wedding-gifts'>
                                <p className='nav-para'>Gifts Below 200</p>
                            </Link>
                            <div className='cart-con' onClick={()=> onClickCart()}>
                                <p className='nav-para-2'><BsCurrencyRupee/>{total}.00</p>
                                <img className='cart-img' src='https://img.icons8.com/?size=100&id=FkGFpk7snhqe&format=png&color=000000' alt=''/>
                            </div>
                        </nav>
                    </>
                )
}

export default Header;



