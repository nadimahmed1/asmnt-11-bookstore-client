import { useEffect } from "react";
import { useState } from "react"

const useProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {

        fetch('allProducts.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    },)
    return [products]
}
export default useProducts;