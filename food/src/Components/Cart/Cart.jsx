import React, { useContext } from 'react'
import "./cart.css"
import { FoodContext } from '../../Global/GlobalState'
import { FaPlus } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
import { FiMinus } from "react-icons/fi";
import Header from '../Header/Header';

export default function Cart() {
    const { cart, deleteCart, incrementQuantity, decrementQuantity } = useContext(FoodContext)

    const totalPrice = ()=>{
        return cart.reduce((index, item)=> index + item.price * item.quantity, 0)
    }
    return (
        <div>
            <div>
                <Header/>
            </div>
            <div className='view'>
                <h2>Product Cart</h2>
                <p>We hope you will like this product and give us 5 star rating</p>
            </div>
            <div className='port'> 
                <table className='table1'>
                    <thead>
                        <tr>
                            <th className='mainhead'></th>
                            <th className='mainhead'></th>
                            <th className='mainhead'>Product</th>
                            <th className='mainhead'>Price</th>
                            <th className='mainhead'>Quantity</th>
                            <th className='mainhead'>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((item) => (
                                <tr>
                                    <td onClick={() => deleteCart(item.id)} className='xxx'><IoCloseSharp /></td>
                                    <td>
                                        <img src={item.productImage} alt="" />
                                    </td>
                                    <td>{item.productName}</td>
                                    <td>${item.price}</td>
                                    <td className='dec'><span onClick={()=>incrementQuantity(item.id)}><FaPlus/></span> {item.quantity}  <span onClick={()=>decrementQuantity(item.id)}><FiMinus/></span></td>
                                    <td>{item.quantity * item.price} </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                <div>
                    <h2>Ümumi tutar: {totalPrice()} AZN</h2>
                </div>
            </div>
        </div>
    )
}
