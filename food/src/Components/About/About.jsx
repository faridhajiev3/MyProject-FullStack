import React from 'react';
import "./about.css";
import Slider from "react-slick";
import { FaUser } from "react-icons/fa";
import Suprise from '../Suprise/Suprise';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

export default function About() {
    const settings = {
        focusOnSelect: true,
        infinite: true,
        slidesToShow: 7,
        slidesToScroll: 1,
        speed: 500,
        // responsive: [
        //     {
        //         breakpoint: 1200,
        //         settings: {
        //             slidesToShow: 5,
        //             slidesToScroll: 1,
        //         },
        //     },
        // ],
    };
    return (
        <div>
            <div>
                <Header/>
            </div>
            <div className='note'>
                <h2>About Us</h2>
                <p>We bring to you the unforgettable moment with our delicious dishes</p>
            </div>
            <div>
                <div>
                    <h2 className='good'>Fooday Glory Story</h2>
                </div>
                <div className='port2'>
                    <Slider {...settings} className='aboutimages'>
                        <div className='image-container'>
                            <img src="https://sun-themes.com/html/fooday/assets/images/timeline/timeline-1.jpg" alt="" />
                        </div>
                        <div className='image-container'>
                            <img src="https://sun-themes.com/html/fooday/assets/images/timeline/timeline-2.jpg" alt="" />
                        </div>
                        <div className='image-container'>
                            <img src="https://sun-themes.com/html/fooday/assets/images/timeline/timeline-3.jpg" alt="" />
                        </div>
                        <div className='image-container'>
                            <img src="https://sun-themes.com/html/fooday/assets/images/timeline/timeline-4.jpg" alt="" />
                        </div>
                        <div className='image-container'>
                            <img src="https://sun-themes.com/html/fooday/assets/images/timeline/timeline-5.jpg" alt="" />
                        </div>
                        <div className='image-container'>
                            <img src="https://sun-themes.com/html/fooday/assets/images/timeline/timeline-6.jpg" alt="" />
                        </div>
                        <div className='image-container'>
                            <img src="https://sun-themes.com/html/fooday/assets/images/timeline/timeline-7.jpg" alt="" />
                        </div>
                    </Slider>
                </div>
                <div className='port'>
                    <div>
                        <p className='ourr'>Our Special</p>
                        <h2 className='good'>Amazing Featured</h2>
                    </div>
                    <div className='freshs'>
                        <div className='fresh'>
                            <div className='freshimg'>
                                <img src="https://sun-themes.com/html/fooday/assets/images/feature-box-bg.jpg" alt="" />
                            </div>
                            <div className='freshmenu'>
                                <p>FRESH MENU</p>
                            </div>
                        </div>
                        <div className='fresh'>
                            <div className='freshimg'>
                                <img src="https://sun-themes.com/html/fooday/assets/images/feature-box-bg-2.jpg" alt="" />
                            </div>
                            <div className='freshmenu'>
                                <p>FRESH MENU</p>
                            </div>
                        </div>
                        <div className='fresh'>
                            <div className='freshimg'>
                                <img src="https://sun-themes.com/html/fooday/assets/images/feature-box-bg-3.jpg" alt="" />
                            </div>
                            <div className='freshmenu'>
                                <p className='humid'>FRESH MENU</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='backdishes'>
                    <div className='dishe'>
                        <div className='part'>
                            <img src="https://sun-themes.com/html/fooday/assets/images/background/vegetable_01.png" alt="" />
                        </div>
                        <div>
                            <div className='numbers'>
                                <p>103</p>
                                <span>/dishes</span>
                            </div>
                            <img src="https://sun-themes.com/html/fooday/assets/images/counter-1.png" alt="" />
                        </div>
                        <div>
                            <div className='numbers'>
                                <p>2389</p>
                                <span>/customers</span>
                            </div>
                            <img src="https://sun-themes.com/html/fooday/assets/images/counter-2.png" alt="" />
                        </div>
                        <div>
                            <div className='numbers'>
                                <p>20</p>
                                <span>/awards</span>
                            </div>
                            <img src="https://sun-themes.com/html/fooday/assets/images/counter-3.png" alt="" />
                        </div>
                        <div>
                            <div className='numbers'>
                                <p>2589</p>
                                <span>/working hours</span>
                            </div>
                            <img src="https://sun-themes.com/html/fooday/assets/images/counter-4.png" alt="" />
                        </div>
                        <div className='part'>
                            <img src="https://sun-themes.com/html/fooday/assets/images/background/vegetable_02.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className='port'>
                    <div>
                        <h2 className='good'>Make Reservation</h2>
                    </div>
                    <div>
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
                                <div className='sad'>
                                    <button className='books'>Book Table</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <Suprise />
                </div>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}
