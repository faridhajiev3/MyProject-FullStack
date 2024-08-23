import React, { useState } from 'react'
import "./menu.css"
import LunchFood from '../Home/LunchFood'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useContext } from 'react'
import { FoodContext } from '../../Global/GlobalState'
import { IoIosArrowDropdown } from "react-icons/io";
import { IoIosArrowDropup } from "react-icons/io";
import Suprise from '../Suprise/Suprise';
import MainImages from '../MainImages/MainImages';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

export default function Menu() {
    const { lunch } = useContext(FoodContext)
    const [startIndex, setStartIndex] = useState(0);

    const handleNext = () => {
        if (startIndex < lunch.length - 3) {
            setStartIndex(startIndex + 1);
        }
    };

    const handlePrev = () => {
        if (startIndex > 0) {
            setStartIndex(startIndex - 1);
        }
    };

    return (
        <div>
            <div>
                <Header />
            </div>
            <div className='coffe'>
                <h2>Menu</h2>
                <p>The various dishes are waiting for your coming to enjoy its</p>
            </div>
            <div className='port'>
                <h2 className='good'>Breakfast Time</h2>
                <div>
                    <LunchFood />
                </div>
                <div className='btncenter'>
                    <button className='load'>Load More</button>
                </div>
            </div>
            <div>
                <div className='daily'>
                    <div className='sunny'>
                        <img src="https://sun-themes.com/html/fooday/assets/images/product/product-decorate.jpg" alt="" />
                    </div>
                    <div className='conten'>
                        <p className='choise'>chef choise</p>
                        <h2 className='cial'>Daily Special</h2>
                        <div className='slider'>
                            {
                                lunch.slice(startIndex, startIndex + 3).map((item) => (
                                    <div className='aute' key={item.id}>
                                        <div>
                                            <img src={item.productImage} alt="" />
                                        </div>
                                        <div className='sliderimg'>
                                            <p className='voluptate'>{item.info}</p>
                                            <p className='velit'>{item.spoiler}</p>
                                        </div>
                                        <div>
                                            <p>{item.price}</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className='alt'>
                            <div onClick={handlePrev}><IoIosArrowDropup /></div>
                            <div onClick={handleNext}><IoIosArrowDropdown /></div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Suprise />
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}
