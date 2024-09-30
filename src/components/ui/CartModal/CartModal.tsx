import styles from './CartModal.module.css'
import Close from '../../../assets/close.svg'
import useCartContext from '../../../hooks/useCartContext'
import trash from '../../../assets/trash.svg'
import { CartProduct } from '../../../interfaces/products'

import { FC } from 'react'


interface Props {
    handledShowCartModal: () => void
}
                                


export const CartModal:FC<Props> = ({handledShowCartModal}) => {
    const {state, dispatch} = useCartContext()
    console.log(state);


const removeCart = (item: CartProduct) =>{  
dispatch({type: 'REMOVE_FROM_CART', payload: item})
}

    return (
    <div className={styles.modalContainer}>
        <button className={styles.modalCloseButton} onClick={handledShowCartModal}>
        
        <img src={Close} alt="Close" /></button>
        <table className={styles.modalTable}>
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Delete</th>
                    <th>Quantity</th>
                    <th>Add</th>
                </tr>
            </thead>
            <tbody>
                {state.cartItems?.map((item) => (
                    <tr key={item.id}>
                    <td>
                        <p>{item.name}</p>
                    </td>
                    <td>
                        <button className={styles.modalButtonRemove}>-1</button>
                    </td>
                    <td>{item.quantity}</td>
                    <td>
                        <button className={styles.modalButtonAdd}>+1</button>
                    </td>
                    <td><button onClick={() => removeCart(item)}>
                        <img src={trash} alt="" />
                        </button></td>
                </tr>
                ))}
            </tbody>
        </table>
        <div className={styles.modalTotalContainer}>
<h3>Total: 400,00</h3>
        </div>
        <div className={styles.modalButtonContainer}>
            <button>checkout</button>
        </div>
        
        </div>
  )
}
