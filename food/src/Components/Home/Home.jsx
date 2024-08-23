import React from 'react'
import "./home.css"
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoBagHandleSharp } from "react-icons/io5";
import { FaBus } from "react-icons/fa";
import { FaGift } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import TastyFood from './TastyFood';
import LunchFood from './LunchFood';
import Suprise from '../Suprise/Suprise';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';


export default function Home() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };
    return (
        <div>
            <div>
                <Header/>
            </div>
            <Slider {...settings}>
                <div>
                    <div className='backeat'>
                        <div className='page'>
                            <h3 className='fadeinup'>Deliciousness jumping into the mouth</h3>
                            <h4 className='enjoy'>Let Enjoy The Rhym Of Fooday Dishes</h4>
                            <button className='btn'>READ MORE</button>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='backeatt'>
                        <div className='page'>
                            <h3 className='fadeinup'>Deliciousness jumping into the mouth</h3>
                            <h4 className='enjoy'>Let Enjoy The Rhym Of Fooday Dishes</h4>
                            <button className='btn'>READ MORE</button>
                        </div>
                    </div>
                </div>
            </Slider>
            <div>
                <div className='services-icon'>
                    <div>
                        <div className='bag'>
                            <IoBagHandleSharp />
                        </div>
                        <p>Online Order</p>
                    </div>
                    <div>
                        <div className='bag'>
                            <FaBus />
                        </div>
                        <p>Fast Delivery</p>
                    </div>
                    <div>
                        <div className='bag'>
                            <FaGift />
                        </div>
                        <p>Special Gift</p>
                    </div>
                    <div>
                        <div className='bag'>
                            <FaUsers />
                        </div>
                        <p>Friendly Support</p>
                    </div>
                </div>
            </div>
            <div className='port'>
                <div>
                    <h2 className='popular'>Popular Product</h2>
                    <p className='good'>Tasty And Good Price
                    </p>
                    <TastyFood />
                </div>
                <div>
                    <div className='dishes'>
                        <div className='honey'>
                            <img className='mistake' src="https://sun-themes.com/html/fooday/assets/images/banner-img-1.jpg" alt="" />
                            {/* <div>
                                <p className='cake'>HONEY CAKE</p>
                                <p className='new'>NEW DISHES THIS WEEK</p>
                                <button className='mistakeBtn'>Read More</button>
                            </div> */}
                        </div>
                        <div className='honey'>
                            <img className='mistake' src="https://sun-themes.com/html/fooday/assets/images/banner-img-2.jpg" alt="" />
                            {/* <div>
                                <p className='cake'>HONEY CAKE</p>
                                <p className='new'>NEW DISHES THIS WEEK</p>
                                <button className='mistakeBtn'>Read More</button>
                            </div> */}
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <h2 className='popular'>New Product</h2>
                        <p className='good'>Lunch And Dinner</p>
                    </div>
                    <LunchFood />
                </div>
                <div>
                    <div className='backimages'>
                        <p className='event'>BIGGEST EVENT - SALE <span>50% OFF</span> IN THIS WEEK</p>
                        <p className='des-des'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt</p>
                        <button>Read More</button>
                    </div>
                </div>
            </div>
            <Suprise />
            <div>
                <Footer/>
            </div>
        </div>
    )
}
