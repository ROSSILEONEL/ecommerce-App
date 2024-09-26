import logo from '../../../assets/logo.svg'
import cart from '../../../assets/cart.svg'
import styles from './NavBar.module.css'
import { useState } from 'react'
import { CartModal } from '../CartModal/CartModal'

export default function NavBar() {

const [showCartModal, setShowCartModal] = useState(false)

const handledShowCartModal = () => {
  setShowCartModal(!showCartModal)
  console.log(showCartModal)
}

  return (
    <div className={styles.navbarContainer}>
        <div className={styles.navbarDetail}>
            <img src={logo} alt="logo del ecommerce" width={50} height={50} />
        <div >
            <span>Ecommerce</span>
        </div>

        </div>
        <div className={styles.navbarCartContainer}>
        <p className={styles.navbarCart}>2</p>
        <img src={cart} alt="carrito del ecommerce"   onClick={handledShowCartModal}/>
        </div>
        {showCartModal&& (<CartModal handledShowCartModal={handledShowCartModal} />)}
    </div>
  )
}






