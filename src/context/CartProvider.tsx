import { useReducer , FC , ReactNode} from "react";
import { CartContext } from "./CartContext";
import { cartReducer, initialState } from "./cartReducer";


interface CartProviderProps {
    children: ReactNode
}


export const CartProvider : FC<CartProviderProps> = ({ children }) => {

    const [state, dispatch] = useReducer(cartReducer, initialState)
const value={state, dispatch}


    return (
        <CartContext.Provider value={ value }>
            {children}
        </CartContext.Provider>
    )
}