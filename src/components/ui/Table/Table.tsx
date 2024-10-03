import useCartContext from '../../../hooks/useCartContext'
import { CartProduct } from '../../../interfaces/products'
import { toast } from 'sonner'
import styles from './Table.module.css'

export const Table = () => {
  const {state, dispatch} = useCartContext()

  const removeCart = (item: CartProduct) =>{  
  dispatch({type: 'REMOVE_FROM_CART', payload: item})
  toast.error('Removed item')
  }
  const addToCart = (item: CartProduct) =>{  
  dispatch({type: 'ADD_TO_CART', payload: item})
  toast.success('Added to cart')
  }
  
  const deleteItem = (item: CartProduct) =>{
    dispatch({type: 'DELETE_ITEM', payload: item})
    toast.error('Deleted item')
  }
  
  const totalPayment = () =>{
  const total= state.cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
  return total
}

return (
 <>
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
                      <button className={styles.modalButtonRemove}
                      onClick={() => removeCart(item)}
                      >-1</button>
                  </td>
                  <td>{item.quantity}</td>
                  <td>
                      <button 
                      className={styles.modalButtonAdd}
                      onClick={() => addToCart(item)}
                      >+1</button>
                  </td>
                  <td><button onClick={() => deleteItem(item)}>
                     🗑
                      </button></td>
              </tr>
              ))}
          </tbody>
      </table>
      <div className={styles.modalTotalContainer}>
<h3>Total: ${totalPayment()}</h3>
      </div>
 </>
)
}


