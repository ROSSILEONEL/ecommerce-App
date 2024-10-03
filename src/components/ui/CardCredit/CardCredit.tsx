import Cards from 'react-credit-cards-2'
import 'react-credit-cards-2/dist/es/styles-compiled.css'
import styles from './CardCredit.module.css'
import { useState } from 'react'
export const CardCredit = () => {


  interface CardData {
    number: string
    name: string
    expiry: string
    cvc: string
    focus: string
  }
const [cardData, setCardData] = useState<CardData>({
  number: '',
  name: '',
  expiry: '',
  cvc: '',
  focus: ''
})

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
  const { number, name, expiry, cvc } = cardData


if ([number, name, expiry, cvc].includes('')) {
  alert('Please fill in all fields')
  return
}

  // if (!number || !name || !expiry || !cvc) {
  //   alert('Please fill in all fields')
  //   return
  // }

setCardData({
  number: '',
  name: '',
  expiry: '',
  cvc: '',
  focus: ''
})

  console.log(cardData)
}




  return (
    <div className={styles.container}>
        <div>
            {/* Cards */}
<Cards number={'4242424242424242'} name={'John Doe'} expiry={'04/24'} cvc={'123'} />
        </div>
        <form action="">

            <div className={styles.formControl}>
                <label htmlFor="number">Card Number</label>
                <input type="text" name="number" id="number" />
            </div>
            <div className={styles.formControl}>
                <label htmlFor="name">Card Name</label>
                <input type="text" name="name" id="name" />
            </div>


            {/* grupo */}

<div className={styles.formInputGrup}>
            <div className={styles.formControl}>
                <label htmlFor="expiry">
                  Card Expiry
                </label>
                <input type="text" name="expiry" id="expiry" />
            </div>
  <div  className={styles.formControl}>

                <label htmlFor="name">
                  Card Cvc
                </label>
                <input type="text" name="cvc" id="cvc" />
  </div>
</div>
        </form>
    </div>
  )
}
