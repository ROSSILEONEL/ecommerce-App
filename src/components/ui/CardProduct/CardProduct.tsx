import { CartContext } from '../../../context/CartContext'
import styles from './CardProduct.module.css'
import { FC, useContext } from 'react'
import { TYPE } from '../../../context/cartReducer'
import { Products } from '../../../interfaces'
import { CartProduct } from '../../../interfaces/products'


interface Props {
  product: Products,
}




// --> :FC<Props>   funcional components
export const CardProduct:FC<Props> = ({product}) => {
  const {dispatch}= useContext(CartContext)


  const item: CartProduct = {
    id: product.id,
  name: product.name,
image: product.image,
quantity: 1,
}

const addToCart = (item) =>{
  dispatch({type: TYPE.ADD_TO_CART, payload: item})
}


  return (
    <div className={styles.cardContainer}>
        <img className={styles.cardImage} src={product.image} alt={product.name} />
        <div className={styles.cardDetail}>
            <h3 className={styles.cardTitle}>{product.name}</h3>
            <div className={styles.cardBody}>
                <p className={styles.cardType}>{product.type}</p>
                <p className={styles.cardPrice}>price <small>00</small></p>
            </div>
            <button className={styles.cardButton} onClick={() => addToCart(item)}>Add to Cart</button>
        </div>
        </div>
  )
}
