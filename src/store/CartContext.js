import { createContext, useState } from "react";

const cartContext = createContext({
    products: [],
    addProduct: (prod) => {},
    removeProduct: (id) => {},
    endPoint: "2ecfbeed89e44f15b9f52b530ff50a78"
})

const CartContextProvider = props => {
    const endPoint = "2ecfbeed89e44f15b9f52b530ff50a78";

    const [products,setProducts] = useState([]);

    const addProduct = item => {
        setProducts(prev => {
            const atIndex = prev.findIndex(prod => prod.name === item.name);
            if(atIndex === -1){
                return [...prev,item]
            }
            prev[atIndex] = {...prev[atIndex], quantity: Number(prev[atIndex].quantity) + 1}
            return prev;
        })
    }

    const removeProduct = id => {
        setProducts(prev => {
            const atIndex = prev.findIndex(prod => prod.id === id);
            if(atIndex === -1){
                return prev;
            }
            if(Number(prev[atIndex].quantity) > 1){
                prev[atIndex] = {...prev[atIndex], quantity: Number(prev[atIndex].quantity) - 1}
                return prev;
            }else{
                return prev.filter(prod => prod.id !== id);
            }
        })
    }

    const context = {
        products, addProduct, removeProduct, endPoint
    }
    return <cartContext.Provider value={context}>
        {props.children}
    </cartContext.Provider>
}

export {cartContext, CartContextProvider};