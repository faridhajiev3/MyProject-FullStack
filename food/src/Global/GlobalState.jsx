import { createContext, useEffect, useState } from "react";
import api from "../Api/api";


export const FoodContext = createContext(null)

export default function FoodContextProvider({ children }) {
    const [info, setInfo] = useState([])
    const [lunch, setLunch] = useState([])
    const [cart, setCart] = useState([]) 
    async function MexicosFood() {
        try {
            const response1 = await api.get("foods")
            const response2 = await api.get("lunch")
            setInfo(response1.data)
            setLunch(response2.data)
        } catch (error) {
            console.log(error, "sehv")
        }
    }

    useEffect(() => {
        MexicosFood()
    }, [])


    const addProductDetail = (id) => {
        const checkExist = cart.find(item => item.id === id)
        if (checkExist) {
            const noExit = cart.filter((item) => item.id !== id)
            setCart([...noExit, { ...checkExist, quantity: checkExist.quantity + 1 }])
        } else {
            setCart((prev) => [...prev, { ...lunch.find((item) => item.id == id), quantity: 1 }])
        }
    }

    const deleteCart = (id) => {
        setCart(cart.filter((item) => (item.id !== id)))
    }

    const incrementQuantity = (id) => {
        setCart((prev) => prev.map((item) => (
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        )))
    }

    const decrementQuantity = (id) => {
        setCart((prev) =>
            prev.map((item) => (
                item.id === id ? { ...item, quantity: item.quantity - 1 } : item
            ))
        )
    }

    async function addToCard(pro) {
        try {
            const product = await api.post("lunch", pro)
            setLunch((prev) => [...prev, product.data])
        } catch (error) {
            console.log(error, "sehv var")
        }
    }
    
    const deletelunch = async(id)=>{
        try {
            await api.delete(`lunch/${id}`)
            MexicosFood()
        } catch (error) {
            console.log(error, "sehv var")
        }
    }
    return (
        <FoodContext.Provider value={{deletelunch, addToCard, decrementQuantity, incrementQuantity, deleteCart, cart, info, lunch, addProductDetail }}>
            {children}
        </FoodContext.Provider>
    )
}