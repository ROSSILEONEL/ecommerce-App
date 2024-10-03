import styles from './CartModal.module.css'
import Close from '../../../assets/close.svg'
import { FC } from 'react'
import { Table } from '../Table/Table'
import { useNavigate } from 'react-router-dom'



interface Props {
    handledShowCartModal: () => void
}



export const CartModal:FC<Props> = ({handledShowCartModal}) => {
    
    const navigate = useNavigate()
    
    const handleNavigate = () => {
      navigate('/checkout')
      handledShowCartModal()
    }

    return (
    <div className={styles.modalContainer}>
        <button className={styles.modalCloseButton} onClick={handledShowCartModal}>
        
        <img src={Close} alt="Close" /></button>
       <Table />
        <div className={styles.modalButtonContainer}>
            <button onClick={handleNavigate}>checkout</button>
        </div>
        
        </div>
  )
}
