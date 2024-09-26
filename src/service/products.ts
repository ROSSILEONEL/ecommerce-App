import { Products } from "../interfaces/products";


// --> retorna una promesa con un contrato , en este caso un array de Products 
export const getProducts = async (): Promise<Products[]> =>{
    try {
      const response = await fetch("http://localhost:5000/products");
      
      if(!response.ok){
          throw new Error('Failed to fetch products')
        }
        const data = await response.json(); // --> pasamos a json el response
        return data
        
    
} catch (error) {
    console.log(error);
    
    throw new Error('Network error') //--> devuelve un error que es un string
     
      
    }
  }