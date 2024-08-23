import React from 'react'
import "./footer.css"
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa"; 
import { FaPinterest } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { SlEnvolopeLetter } from "react-icons/sl";
export default function Footer() {
    return (
        <div className='footerback'>
            <div className='footerwidth'>
                <div className='footerslider'>
                    <div>
                        <img src="https://sun-themes.com/html/fooday/assets/images/logo-ft.png" alt="" />
                        <p className='adipis'>Eiusmod consectetur adipisicing elit, sed do eiusmod tempor incididunt ut</p>
                        <p className='dolor'>Lorem ipsum dolor sit amet, eiusmod consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div className='sosial-icon'>
                            <div className='face'>
                                <FaFacebookF />
                            </div>
                            <div className='face'>
                                <FaTwitter />
                            </div>
                            <div className='face'>
                                <FaPinterest />
                            </div>
                            <div className='face'>
                                <FaGoogle />
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2>Contact Us</h2>
                        <div className='info-icon'>
                            <FaLocationDot className='local' />
                            <div class="info-text">
                                <p className='drive'>157 White Oak Drive Kansas City </p>
                                <p>689 Lynn Street South Boston</p>
                            </div>
                        </div>
                        <div className='info-icon'>
                            <FaPhoneAlt className='local' />
                            <div class="info-text">
                                <p className='drive'>
                                    (617)-276-8031</p>
                                <p>(617)-276-8031</p>
                            </div>
                        </div>
                        <div className='info-icon'>
                            <SlEnvolopeLetter className='local' />
                            <div class="info-text">
                                <p className='drive'>admin@fooday.com</p>
                                <p>support@fooday.com</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2>Useful Link</h2>
                        <ul className='nav-link'>
                            <li>About Us</li>
                            <li>Customer Service</li>
                            <li>Contact Us</li>
                            <li>Latest News</li>
                            <li>FAQs</li>
                            <li>Product Support</li>
                        </ul>
                    </div>
                    <div>
                        <h2>Open Hour</h2>
                        <div>
                            <ul className='nav-items'>
                                <li>
                                    Tuesday:
                                    .............................
                                    7AM - 9PM</li>
                                <li>Wednesday:
                                    ........................
                                    7AM - 9PM</li>
                                <li>Thursday:
                                    ...........................
                                    7AM - 9PM</li>
                                <li>Friday:
                                    .................................
                                    7AM - 9PM</li>
                                <li>Saturday:
                                    ............................
                                    7AM - 9PM</li>
                                <li>
                                    Sunday:
                                    ...............................
                                    7AM - 9PM
                                </li>
                                <li>
                                    Monday:
                                    ...............................
                                    Close
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
