import React, { useEffect, useState } from 'react'
import "./productdetail.css"
import { CiStar } from "react-icons/ci"; 
import api from '../../Api/api'
import { Link, useParams } from 'react-router-dom'
import { useContext } from 'react'
import { FoodContext } from '../../Global/GlobalState'
import Slider from "react-slick";
import Suprise from '../Suprise/Suprise'; 
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

export default function ProductDetail() {
    const { addProductDetail, lunch, cart, decrementQuantity } = useContext(FoodContext)

    const settings = {
        focusOnSelect: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 500
    };

    const [read, setRead] = useState({})
    const { id } = useParams()

    useEffect(() => {
        async function axiosDetail() {
            try {
                const response = await api.get("lunch/" + id)
                setRead(response.data)
            } catch (error) {
                console.log(error, "sehv")
            }
        }
        axiosDetail()
    }, [])


    return (
        <div>
            <div>
                <Header/>
            </div>
            <div className='node'>
                <h2>Product Detail</h2>
                <p>We bring to you the unforgettable moment with our delicious dishes</p>
            </div>
            <div className='port3'>
                <div className='product'>
                    <div>
                        <img src={read.productImage2} alt="" />
                    </div>
                    <div>
                        <div className='plate'>
                            <div>
                                <h2 className='bad'>{read.productName}</h2>
                                <div className='cheefname'>
                                    <p>{read.name} DonJoe</p>
                                    <p>star</p>
                                </div>
                            </div>
                            <div>
                                <p className='token'>{read.price}</p>
                            </div>
                        </div>
                        <div>
                            <p className='greens'>Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus winter purslane kale. Celery potato scallion desert raisin horseradish spinach carrot soko. Lotus root water spinach fennel kombu maize bamboo shoot green bean swiss chard seakale pumpkin onion chickpea gram corn pea. Brussels sprout coriander water chestnut gourd swiss chard.</p>
                            <div className='type1'>
                                <p>Category:</p>
                                <p>Breakfast,Seafood,Main Menu</p>
                            </div>
                            <div className='type2'>
                                <p>Tags:</p>
                                <p>Shrimp,Vegetables</p>
                            </div>
                            <div className='output'>
                                <div>
                                    <button onClick={() => addProductDetail(read.id)} className='tocard'>ADD TOCART</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <h2 className='good'>You May Also Like</h2>
                    </div>
                    <div className='slider-container'>
                        <Slider {...settings}>
                            {
                                lunch.map((item) => (
                                    <div className='pro' key={item.id}>
                                        <div className='hero'>
                                            <Link to={`/productdetail/${item.id}`}>
                                                <img className='productimg2' src={item.productImage} alt="" />
                                            </Link>
                                        </div>
                                        <div className='content'>
                                            <p className='productName'>{item.productName}</p>
                                            <div className='spoiler'>
                                                <div>
                                                    <p className='auterName'>{item.name} <span className='sourname'>{item.sourname}</span></p>
                                                </div>
                                                <span className='line2'></span>
                                                <div>
                                                    <CiStar />
                                                    <CiStar />
                                                    <CiStar />
                                                    <CiStar />
                                                    <CiStar />
                                                </div>
                                            </div>
                                            <p className='productPrices'>${item.price}</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </Slider>
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
