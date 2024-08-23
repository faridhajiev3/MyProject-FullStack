import { useState } from "react";


function useProduct(initialState = {}){
    const [product, setProduct] = useState(initialState)

    const handleChange=(e)=>{
        const {name, value} = e.target
        setProduct((prev)=>({...prev, [name]: value}))
    }

    return{
        product, handleChange
    }
}
export default useProduct