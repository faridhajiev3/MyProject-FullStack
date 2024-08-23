import React, { useContext } from 'react'
import "./report.css" 
import { FoodContext } from '../../Global/GlobalState'
import useProduct from '../Hooks/GlobalHooks'

export default function Report() {
    const { addToCard, lunch, deletelunch } = useContext(FoodContext)
    const { product, handleChange } = useProduct({
        productName: "",
        price: 0,
        productImage: "",
        type: ""
    })

    const onSubmit = (e) => {
        e.preventDefault()

        addToCard(product) 
    }
    return (
        <div>
            <div className="dashboard-container">
                <form onSubmit={onSubmit} className="product-form">
                    <h2>Əlavə et</h2>
                    <input
                        type="text"
                        placeholder="Məhsul adı"
                        onChange={handleChange}
                        name='productName'
                    />
                    <input
                        type="number"
                        placeholder="Qiymət"
                        onChange={handleChange}
                        name='price'
                    />
                    <select
                        onChange={handleChange}
                        className='caps'
                        name='type'
                    >
                        <option className='caps' value="">Kateqoriya seçin</option>
                        <option className='caps' value="Desert">Desert</option>
                        <option className='caps' value="Sup">Sup</option>
                        <option className='caps' value="Fast food">Fast food</option>
                    </select>
                    <input
                        type="text"
                        placeholder="Məhsul şəkili URL"
                        onChange={handleChange}
                        name='productImage'
                    />
                    <button>Əlavə et</button>
                </form>
            </div>
            <div className="product-list">
                <table className='table1'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Məhsul Adı</th>
                            <th>Qiymət</th>
                            <th>Kateqoriya</th>
                            <th>Sil</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            lunch.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.productName}</td>
                                    <td>{item.price}</td>
                                    <td>{item.type}</td>
                                    <td onClick={()=> deletelunch(item.id)}>X</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
