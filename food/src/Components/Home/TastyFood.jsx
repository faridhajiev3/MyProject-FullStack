import React, { useContext } from 'react'
import { FoodContext } from '../../Global/GlobalState'
import { CiStar } from "react-icons/ci";
import { CiShoppingBasket } from "react-icons/ci";

export default function TastyFood() {
    const { info, addProductDetail } = useContext(FoodContext)
    return (
        <div className='popular-Product'>
            {
                info.map((item) => (
                    <div className='pro' key={item.id}>
                        <div className='hero'>
                            <img onClick={()=>addProductDetail(item.id)} className='productImage' src={item.productImage} alt="" />
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
                            <p className='productPrice'>${item.price}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

