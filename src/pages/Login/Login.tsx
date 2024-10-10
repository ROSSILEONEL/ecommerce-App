import styles from './Login.module.css'
import { useEffect, useState } from 'react'
import { toast } from 'sonner'
import { useNavigate } from 'react-router-dom'
export const Login = () => {

const [loginData , setLoginData] = useState({email: '', password: ''})
const navigate = useNavigate()
const handledChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setLoginData({
    ...loginData,
    [e.target.name]: e.target.value
  })
}
 
const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault()
  if(loginData.email.trim() === '' || loginData.password.trim() === '') {
    toast.error('All fields are required')
    return
  }
   
  setLoginData({
    email: '',
    password: ''
  })
  toast.success('Login successfully')
  localStorage.setItem('user', JSON.stringify(loginData.email))
  navigate('/dashboard')
}

useEffect(() => {
  console.log(loginData)
}, [loginData])


  return (

    <div className={styles.containerLogin}>
        <h1>Login</h1>
    <form onSubmit={handleSubmit}>
        <div className={styles.formControlLogin}>
            <label htmlFor="email">Email</label>
            <input 
            type="email"
            id="email "
            name="email"
            value={loginData.email}
            onChange={handledChange}
            />
            </div>

<div className={styles.formControlLogin}>

            <label htmlFor="password">Password</label>
            <input 
            type="password"
            id="password"
            name="password"
            value={loginData.password}
            onChange={handledChange}
            />
            </div>
            <button type="submit">Login</button>
    </form>
    
    </div>
  )
}
