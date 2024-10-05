import Cards from 'react-credit-cards-2'
import 'react-credit-cards-2/dist/es/styles-compiled.css'
import styles from './CardCredit.module.css'
import { useState } from 'react'
import {toast} from 'sonner'
import  useCartContext  from '../../../hooks/useCartContext'
export const CardCredit = () => {

const { dispatch } = useCartContext()
interface CardData {
    number: string
    name: string
    expiry: string
    cvc: string
    focus: 'number' | 'name' | 'expiry' | 'cvc'| ''
  }

const [cardData, setCardData] = useState<CardData>({
  number: '',
  name: '',
  expiry: '',
  cvc: '',
  focus: ''
})

const { number, name, expiry, cvc, focus  } = cardData

const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const { name, value } = e.target
  setCardData({ ...cardData, [name]: value })
}

const handleInputFocus = (e: React.FocusEvent<HTMLInputElement>) => {
  const { name } = e.target
  setCardData({ ...cardData, focus: name })
}


const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault()
  // validar que los campos no esten vacios 
    if ([number, name, expiry, cvc].includes('')) {
     toast.error('All fields are required')
      return
    }

    setCardData({
        number: '',
        name: '',
        expiry: '',
        cvc: '',
        focus: ''
      })
      dispatch({type:'CLEAR_CART'})
  }




  return (
    <div className={styles.container}>
        <div>
              <Cards number={number} name={name} expiry={expiry} cvc={cvc} focused={focus  } />
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formControl}>
                <label htmlFor="number">Card Number</label>
                <input
                type="text"
                name="number" 
                id="number" 
                value={number}
                onChange={handleInputChange} 
                onFocus={handleInputFocus} />
            </div>
            <div className={styles.formControl}>
                <label htmlFor="name">Card Name</label>
                <input 
                type="text" 
                name="name" 
                id="name" 
                value={name}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                />
            </div>

<div className={styles.formInputGrup}>
            <div className={styles.formControl}>
                <label htmlFor="expiry">
                  Card Expiry
                </label>
                <input 
                type="text" 
                name="expiry" 
                id="expiry"
                value={expiry}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                />
            </div>
  <div  className={styles.formControl}>

                <label htmlFor="name">
                  Card Cvc
                </label>
                <input 
                type="text" 
                name="cvc" 
                id="cvc" 
                value={cvc}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                />
  </div>
</div>
<button type='submit' className={styles.buyButton}>Buy Now </button>
        </form>
    </div>
  )
}
