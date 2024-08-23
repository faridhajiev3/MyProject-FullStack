import React from 'react'
import "./suprise.css"
import { IoIosSend } from "react-icons/io";

export default function Suprise() {
    return (
        <div className='subcribe'>
            <div>
                <img className='flowors' src="https://sun-themes.com/html/fooday/assets/images/background/bg5.png" alt="" />
            </div>
            <div>
                <h3>Subcribe Us Now</h3> 
                <p>Get more news and delicious dishes everyday from us</p>
            </div>
            <div className='place'>
                <input type="email" placeholder='Email' />
                <div className='sends'>
                    <IoIosSend />
                </div>
            </div>
            <div>
            </div>
            <div></div>
        </div>
    )
}
