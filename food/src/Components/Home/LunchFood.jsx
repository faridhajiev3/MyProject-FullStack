import React, { useContext } from 'react'
import { FoodContext } from '../../Global/GlobalState'
import { CiStar } from "react-icons/ci";
import { Link } from 'react-router-dom';

export default function LunchFood() {
    const { lunch, addProductDetail } = useContext(FoodContext)
    
    return (
        <div className='popular-Product'>
            {
                lunch.map((item) => (
                    <div className='pro' key={item.id}>
                        <div className='hero'>
                            <Link to={`/productdetail/${item.id}`}>
                                <img className='productimg' src={item.productImage} alt="" />
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
                            <div>
                                <button onClick={()=>addProductDetail(item.id)} className='btn'>Add To Card</button>
                            </div> 
                            <p className='productPrices'>${item.price}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
