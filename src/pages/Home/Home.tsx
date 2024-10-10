import { Hero } from "../../components/ui/Hero/Hero.tsx"
// import { useEffect, useState } from "react" 
import { CardProduct } from "../../components/ui/CardProduct/CardProduct.tsx"
import styles from "./Home.module.css"
import { getProducts } from "../../service/products.ts"
import { Products } from "../../interfaces/products.ts"
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

     

      {data?.data.map((product: Products) => (
        <CardProduct key={product.id} product={product} />
      ))}
      </div>
<div>

<div className={styles.paginationContainer}>

<button 
onClick={() => setPage(page - 1)}
className={styles.paginationButton}
disabled  ={page === 1}
>Prev</button>


<div className={styles.paginationActive}>
<span>{page}</span>
</div>

      <button onClick={() => setPage(page + 1)}
        className={styles.paginationButton}
        >Next</button>


</div>


    </div>
</div>
  )
}
