import React, { useEffect, useState } from 'react'
import styles from './Dashboard.module.css'
import { useNavigate } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'sonner'
import { createProduct } from '../../service/products.ts'
import { Products } from '../../interfaces/products'
export const Dashboard = () => {

const mutation = useMutation( {
  mutationFn: (newProduct:Products)=>{
  return createProduct(newProduct)
 }
})




const [product, setProduct] = useState({
  amiiboSeries: '',
  character: '',
  gameSeries: '',
  head: '',
  image: '',
  name: '',
  release: '',
  tail: '',
  type: '',
  price:0
})

  const navigate= useNavigate()

  useEffect(()=>{
   
    
    
      const userLogin = localStorage.getItem('user')
      if(!userLogin){
        navigate('/login')
      }
    },[])

    
    const handleLogout = () => {
      localStorage.removeItem('user')
      navigate('/login')
    }

    const handleChange= (e: React.ChangeEvent<HTMLInputElement>)=>{
      setProduct({
        ...product,
        [e.target.name]: e.target.value
      })
      
      
    }
 
    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
    mutation.mutate(product)
    }
 
  return (
    <div className={styles.container}>

    <div>
      <h1> Dashboard</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
    <br />
    <form  onSubmit={handleSubmit} >

      <div className={styles.formControlLogin}>
      <label htmlFor="amiiboSeries">Amiibo Series</label>
    <input type="text"
    id="amiiboSeries"
    name="amiiboSeries"
    value={product.amiiboSeries}
    onChange={handleChange}
    required
    />
    </div>

      <div className={styles.formControlLogin}>
      <label htmlFor="character">character</label>
    <input type="text"
    id="character"
    name="character"
    value={product.character}
    onChange={handleChange}
    required
    />
    </div>

      <div className={styles.formControlLogin}>
      <label htmlFor="gameSeries">gameSeries</label>
    <input type="text"
    id="gameSeries"
    name="gameSeries"
    value={product.gameSeries}
    onChange={handleChange}
    required
    />
    </div>
    
 <div className={styles.formControlLogin}>
        <label htmlFor="head">Head</label>
        <input
          type="text"
          id="head"
          name="head"
          value={product.head}
          onChange={  handleChange}
          required
        />
      </div>
      <div className={styles.formControlLogin}>
        <label htmlFor="image">Image</label>
        <input
          type="text"
          id="image"
          name="image"
          value={product.image}
          onChange={handleChange}
          required
        />
      </div>
      <div className={styles.formControlLogin}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={product.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className={styles.formControlLogin}>
        <label htmlFor="release">Release Date</label>
        <input
          type="text"
          id="release"
          name="release"
          value={product.release}
          onChange={handleChange}
          
        />
      </div>

 
    
      <div className={styles.formControlLogin}>
        <label htmlFor="tail">Tail</label>
        <input
          type="text"
          id="tail"
          name="tail"
          value={product.tail}
          onChange={handleChange}
          required
        />
      </div>
      <div className={styles.formControlLogin}>
        <label htmlFor="type">Type</label>
        <input
          type="text"
          id="type"
          name="type"
          value={product.type}
          onChange={handleChange}
          required
        />
      </div>
      <div className={styles.formControlLogin}>
        <label htmlFor="price">Price</label>
        <input
          type="text"
          id="price"
          name="price"
          value={product.price}
          onChange={handleChange}
          required
        />
      </div>
      {/* <div className={styles.formControlLogin}>
        <label htmlFor="id">ID</label>
        <input
          type="text"
          id="id"
          name="id"
          value={product.id}
          onChange={handleChange}
          required
        />
      </div> */}
        <div>
          <button type="submit" >Add Product</button>
          </div>

    </form>
    </div>
  )
}
