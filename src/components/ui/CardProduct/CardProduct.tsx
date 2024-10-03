
import styles from './CardProduct.module.css'
import { FC } from 'react'
import { Products } from '../../../interfaces'
import { CartProduct } from '../../../interfaces/products'
import useCartContext from '../../../hooks/useCartContext'
import { toast } from 'sonner'


interface Props {
  product: Products,
}




// --> :FC<Props>   funcional components
export const CardProduct:FC<Props> = ({product}) => {
  const { dispatch }= useCartContext()


  const item: CartProduct = {
    id: product.id,
  name: product.name,
image: product.image,
price: product.price,
quantity: 1
}

const addToCart = (item: CartProduct) =>{
  dispatch({type: 'ADD_TO_CART', payload: item})
  toast.success('Added to cart')
}


  return (
    <div className={styles.cardContainer}>
        <img className={styles.cardImage} src={product.image} alt={product.name} />
        <div className={styles.cardDetail}>
            <h3 className={styles.cardTitle}>{product.name}</h3>
            <div className={styles.cardBody}>
                <p className={styles.cardType}>{product.type}</p>
                <p className={styles.cardPrice}>$ <small>{product.price}</small></p>
            </div>
            <button className={styles.cardButton} onClick={() => addToCart(item)}>Add to Cart</button>
        </div>
        </div>
  )
}
