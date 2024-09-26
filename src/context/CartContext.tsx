import { createContext,Dispatch } from "react"
import { CartAction, CartState } from "../context/cartReducer"


interface CartContexType{
    state: CartState
    dispatch: Dispatch<CartAction>
}

// export const CartContext = createContext({} as CartContexType)
export const CartContext = createContext<CartContexType|undefined>(undefined)
