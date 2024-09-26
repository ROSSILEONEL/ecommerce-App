import styles from './CartModal.module.css'
import Close from '../../../assets/close.svg'
import { useContext } from 'react'
import { FC } from 'react'


interface Props {
    handledShowCartModal: () => void
}

export const CartModal:FC<Props> = ({handledShowCartModal}) => {
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
                <tr>
                    <td>name</td>
                    <td>
                        <button className={styles.modalButtonRemove}>-1</button>
                    </td>
                    <td>12</td>
                    <td>
                        <button className={styles.modalButtonAdd}>+1</button>
                    </td>
                </tr>
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
