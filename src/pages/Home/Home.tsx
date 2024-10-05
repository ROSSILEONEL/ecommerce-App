import { Hero } from "../../components/ui/Hero/Hero.tsx"
// import { useEffect, useState } from "react" 
import { CardProduct } from "../../components/ui/CardProduct/CardProduct.tsx"
import styles from "./Home.module.css"
import { getProducts } from "../../service/products.ts"
// import { Products } from "../../interfaces/products.ts"
import { Toaster } from "sonner"
import { keepPreviousData, useQuery} from "@tanstack/react-query"
import { useState } from "react"

export const Home = () => {


  
const [page , setPage] = useState(1)
const {data,error,isPending} = useQuery({
    queryKey:['products',page],
    queryFn :() => getProducts(page),
    keepPreviousData: true,
  
  }
  )

 







  return (
    <div>
      
      <Hero />
      <Toaster position="bottom-right"  richColors />
      <div className={styles.container}>
{isPending && <div>Loading...</div>} 
{error && <div>Error , something went wrong</div>}
      {/* {data?.map((product) => (
        <CardProduct key={product.id} product={product} />
      ))} */}
      
     

      {data?.data.map((product) => (
        <CardProduct key={product.id} product={product} />
      ))}
      </div>

      <button onClick={() => setPage(page + 1)}>Load more</button>
    </div>
  )
}
