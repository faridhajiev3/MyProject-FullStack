import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import "./header.css"
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { IoBagHandleSharp } from "react-icons/io5";
import { FaUserAlt } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { FoodContext } from '../../Global/GlobalState';
import { IoClose } from "react-icons/io5";
import { FaBars } from "react-icons/fa6";


export default function () {
    const { cart, deletelunch } = useContext(FoodContext)
    return (
        <header>
            <div className='container'>
                <div className='first-nav'>
                    <div className='row'>
                        <div className='location'>
                            <IoLocationSharp className='location-icon' />
                            <span>160 White Oak Drive Kansas City</span>
                        </div>
                        <div className='phone'>
                            <FaPhoneAlt />
                            <span>
                                012 987 650
                            </span>
                        </div>
                    </div>
                    <div className='row2'>
                        <FaFacebookF />
                        <FaTwitter />
                        <FaPinterest />
                        <FaGooglePlusG className='google' />
                        <span className='line'></span>
                        <div className='user'>
                            <FaUser />
                            <p>My Account</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='second-nav'>
                <div>
                    <Link to="/">
                        <img src="https://sun-themes.com/html/fooday/assets/images/logo.png" alt="" />
                    </Link>
                </div>
                <ul className='navbar'>
                    <li className='copy'>
                        <NavLink className="item-link" to="/">
                            Home
                        </NavLink>
                    </li>
                    <li className='copy'>
                        <NavLink className="item-link" to="/about">
                            About
                        </NavLink>
                    </li>
                    <li className='copy'>
                        <NavLink className="item-link" to="/reservation">
                            Reservation
                        </NavLink>
                    </li>
                    <li className='copy'>
                        <NavLink className="item-link" to="/menu">
                            Menu
                        </NavLink>
                    </li>
                    <li className='copy'>
                        <NavLink className="item-link" to="/dashboard">
                            Dashboard
                        </NavLink>
                    </li>
                    <ul className='icons-support'>
                        <li>
                            <div className='cart-dropdown'>
                                <Link className="item-links icon-hard cart-btn" to="/cart">
                                    <IoBagHandleSharp />
                                </Link>
                                <div className="cart-dropdown-content">
                                    <h3>Səpətiniz</h3>
                                    {
                                        cart.map((item) => (
                                            <ul key={item.id} className='drop'>
                                                <li>
                                                    <img className='drop-img' src={item.productImage} alt="" />
                                                </li>
                                                <li>{item.productName}</li>
                                                <li>
                                                    <IoClose />
                                                </li>
                                            </ul>
                                        ))
                                    }
                                    <div className='cals'>
                                        <Link className='col' to="/cart">Səbətə bax</Link>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <Link className="item-links" to="/report">
                                <MdDashboard />
                            </Link>
                        </li>
                        <li>
                            <Link className="item-links" to="/account">
                                <FaUserAlt />
                            </Link>
                        </li>
                        <li>
                            <div className='cart-drop'>
                                <Link className="item-links">
                                    <FaBars />
                                </Link>
                                <div className="cart-drop-content">
                                    <li className='item-copy'>
                                        <NavLink className="item-link" to="/">
                                            Home
                                        </NavLink>
                                    </li>
                                    <li className='item-copy'>
                                        <NavLink className="item-link" to="/about">
                                            About
                                        </NavLink>
                                    </li>
                                    <li className='item-copy'>
                                        <NavLink className="item-link" to="/reservation">
                                            Reservation
                                        </NavLink>
                                    </li>
                                    <li className='item-copy'>
                                        <NavLink className="item-link" to="/menu">
                                            Menu
                                        </NavLink>
                                    </li>
                                    <li className='item-copy'>
                                        <NavLink className="item-link" to="/dashboard">
                                            Dashboard
                                        </NavLink>
                                    </li>
                                </div>
                            </div>
                        </li>
                    </ul>
                </ul>
            </div>
        </header>
    )
}
