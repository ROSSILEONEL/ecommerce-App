import { useContext } from "react";
import { CartContext } from "../context/CartContext";


const useCartContext = () => {
    
    if (!useCartContext) {
        throw new Error("useCartContext must be used within a CartProvider")
    }
    return useContext(CartContext);
};


export default useCartContext