import { Hero } from "../../components/ui/Hero/Hero.tsx"
import { useEffect, useState } from "react" 
import { CardProduct } from "../../components/ui/CardProduct/CardProduct.tsx"
import styles from "./Home.module.css"
import { getProducts } from "../../service/products.ts"
import { Products } from "../../interfaces/products.ts"
import { Toaster } from "sonner"

export const Home = () => {
  
  const [products , setProducts] = useState<Products[]>([])
  const [loading , setLoading] = useState(true)
  const [error , setError] = useState(false)
  
  


useEffect(()=>{
getProducts().then((data)=>{
  setProducts(data)
  setLoading(false)
  setError(false)
}).catch(()=>{
  setLoading(false)
  setError(true)
}).finally(()=>{
  setLoading(false)
})



},[])


  
  return (
    <div>
      
      <Hero />
      <Toaster position="bottom-right"  richColors />
      <div className={styles.container}>
{loading && <div>Loading...</div>} 
{error && <div>Error , something went wrong</div>}
      {products.map((product) => (
        <CardProduct key={product.id} product={product} />
      ))}
      </div>
      
    </div>
  )
}
