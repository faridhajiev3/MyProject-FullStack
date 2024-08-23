import React, { useEffect } from 'react'
import "./reservation.css"
import { FaUser } from "react-icons/fa";
import { GiKnifeFork } from "react-icons/gi";
import Suprise from '../Suprise/Suprise';
import MainImages from '../MainImages/MainImages';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

export default function Reservation() { 

    return (
        <div>
            <div>
                <Header/>
            </div>
            <MainImages menu={"Reservation"}/>
            <div className='reserborder'>
                <h2 className='good'>Reservation Form</h2>
                <div className='table'>
                    <div className=' online'>
                        <p>We willing to help you make the reservation online to save your time and money or you can call us directly through the customer service hotline: <span className='number'>225-88888</span></p>
                    </div>
                    <div>
                        <div className='inputreser'>
                            <div className='again'>
                                <span className='user-icon'><FaUser /></span>
                                <input placeholder='Username' type="text" name="" id="" />
                            </div>
                            <div className='again'>
                                <span className='user-icon'><FaUser /></span>
                                <input placeholder='Email' type="text" name="" id="" />
                            </div>
                        </div>
                        <div className='inputreser'>
                            <div className='again'>
                                <span className='user-icon'><FaUser /></span>
                                <input placeholder='Username' type="text" name="" id="" />
                            </div>
                            <div className='again'>
                                <span className='user-icon'><FaUser /></span>
                                <input placeholder='Email' type="text" name="" id="" />
                            </div>
                        </div>
                        <div className='inputreser'>
                            <div className='again'>
                                <span className='user-icon'><FaUser /></span>
                                <input placeholder='Username' type="text" name="" id="" />
                            </div>
                            <div className='again'>
                                <span className='user-icon'><FaUser /></span>
                                <input placeholder='Email' type="text" name="" id="" />
                            </div>
                        </div>
                        <div>
                            <textarea name="" id=""></textarea>
                        </div>
                        <div className='sad'>
                            <button className='books'>Book Table</button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className='best'>
                    <h2 className='go'>Fooday Best Service</h2>
                    <div className='kinifes'>
                        <div className='knife'>
                            <div className='fork'>
                                <GiKnifeFork />
                            </div>
                            <p className='spaces'>Reservation</p>
                            <p className='dess'>Lorem ipsum dolor sit amet, tong consecteturto sed eiusmod incididunt utote labore et</p>
                        </div>
                        <div className='knife'>
                            <div className='fork'>
                                <GiKnifeFork />
                            </div>
                            <p className='spaces'>Private Event</p>
                            <p className='dess'>Lorem ipsum dolor sit amet, tong consecteturto sed eiusmod incididunt utote labore et</p>
                        </div>
                        <div className='knife'>
                            <div className='fork'>
                                <GiKnifeFork />
                            </div>
                            <p className='spaces'>Online Order</p>
                            <p className='dess'>Lorem ipsum dolor sit amet, tong consecteturto sed eiusmod incididunt utote labore et</p>
                        </div>
                        <div className='knife'>
                            <div className='fork'>
                                <GiKnifeFork />
                            </div>
                            <p className='spaces'>Fast Delivery</p>
                            <p className='dess'>Lorem ipsum dolor sit amet, tong consecteturto sed eiusmod incididunt utote labore et</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='just'>
                <div className='hong'>
                    <div className='guests'>
                        <div className='cooking'>
                            <p className='month'>12 <span>JUN</span></p>
                            <p className='kong'>Hong Kong Tasty Food Cooking Event</p>
                        </div>
                        <div>
                            <img src="https://sun-themes.com/html/fooday/assets/images/event/event-01.jpg" alt="" />
                        </div>
                        <ul className='times'>
                            <li>
                                <span className='num'>03</span>
                                <span className='cap'>/days</span>
                            </li>
                            <li>
                                <span className='num'>50</span>
                                <span className='cap'>/foods</span>
                            </li>
                            <li>
                                <span className='num'>290</span>
                                <span className='cap'>/guests</span>
                            </li>
                        </ul>
                    </div>
                    <div className='guests'>
                        <div className='cooking'>
                            <p className='month'>12 <span>JUN</span></p>
                            <p className='kong'>Hong Kong Tasty Food Cooking Event</p>
                        </div>
                        <div>
                            <img src="https://sun-themes.com/html/fooday/assets/images/event/event-01.jpg" alt="" />
                        </div>
                        <ul className='times'>
                            <li>
                                <span className='num'>03</span>
                                <span className='cap'>/days</span>
                            </li>
                            <li>
                                <span className='num'>50</span>
                                <span className='cap'>/foods</span>
                            </li>
                            <li>
                                <span className='num'>290</span>
                                <span className='cap'>/guests</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <Suprise/>
            <div>
                <Footer/>
            </div>
        </div>
    )
}
