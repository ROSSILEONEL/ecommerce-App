import logo from '../../../assets/logo.svg'
import cart from '../../../assets/cart.svg'
import styles from './NavBar.module.css'

export default function NavBar() {
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
<img src={cart} alt="carrito del ecommerce" />
        </div>
    </div>
  )
}
