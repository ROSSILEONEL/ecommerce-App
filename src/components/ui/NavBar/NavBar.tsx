import logo from '../../../assets/logo.svg'
import cart from '../../../assets/cart.svg'
import styles from './NavBar.module.css'
import { useEffect, useState } from 'react'
import { CartModal } from '../CartModal/CartModal'
import useCartContext from '../../../hooks/useCartContext'
import { useNavigate , useLocation } from 'react-router-dom'


export default function NavBar() {

const {state : {cartItems}} = useCartContext()
const navigate = useNavigate()
const location = useLocation()

useEffect(()=>{},[cartItems])

const [showCartModal, setShowCartModal] = useState<boolean>(false)



const navigateToHome = () => {
  navigate('/')
}
const handledShowCartModal = ():void => {
  setShowCartModal(!showCartModal)
  console.log(showCartModal)
}

  return (
    <div className={styles.navbarContainer}>
        <div className={styles.navbarDetail} onClick={navigateToHome}>
            <img src={logo} alt="logo del ecommerce" width={50} height={50} />
        <div >
            <span>ITSUMI</span>
        </div>
        </div>
{location.pathname !== '/checkout'  && ( <>
  <div className={styles.navbarCartContainer}>
        <p className={styles.navbarCart}>{cartItems.length===0 ? '' : cartItems.length}</p>
        <img src={cart} alt="carrito del ecommerce"   onClick={handledShowCartModal}/>
        </div>
        {showCartModal&& (<CartModal handledShowCartModal={handledShowCartModal} />)}
</> )}
       
    </div>
  )
}






