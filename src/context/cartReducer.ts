import { CartProduct } from "../interfaces"

export interface CartState{
    cartItems: CartProduct[]
}



export const initialState:CartState = {
   cartItems: []
}

export interface CartAction{
    type: "ADD_TO_CART" | "REMOVE_FROM_CART" | "INCREMENT" | "DECREMENT"
    // type: string
    payload: CartProduct
}

export const TYPE :{[key:string]:string} = {
    ADD_TO_CART: "ADD_TO_CART",
    REMOVE_FROM_CART: "REMOVE_FROM_CART",
    INCREMENT: "INCREMENT",
    DECREMENT: "DECREMENT"
}


export const cartReducer =(state:CartState,action:CartAction):CartState=>{

    
    switch(action.type){
        case TYPE.ADD_TO_CART:{
        const {id}= action.payload
    //   validar si el item ya existe en el carrito
    const existingItem = state.cartItems.find(item => item.id === action.payload.id);
    
    console.log(state.cartItems);
    

    if (existingItem) {
        return {
            ...state,
            cartItems: state.cartItems.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item)
        }
    } else {
        return{
            ...state,
            cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }]
        }
    }
        }

        case TYPE.REMOVE_FROM_CART:{
          
            const {id}= action.payload
            const existingItem = state.cartItems.find(item => item.id === action.payload.id);
            if(existingItem && existingItem.quantity > 1){
                return {
                    ...state,
                    cartItems: state.cartItems.map(item=> item.id === id ? {...item, quantity: item.quantity - 1} : item)
                }
            }else{
                return{
                    ...state,
                    cartItems: state.cartItems.filter(item=> item.id !== id)
                }
            }
        }
        
        default:{
           
   
    
            return state
        }
        

    
    }
}