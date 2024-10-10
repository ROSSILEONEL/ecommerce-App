import { Products } from "../interfaces/products";
// --> retorna una promesa con un contrato , en este caso un array de Products 



//--> --> --> --> --> get Products <-- <-- <-- <-- <--
export const getProducts = async (page:number): Promise<Products[]> =>{
  try {
    // const response = await fetch("http://localhost:5000/products");
    // const response = await fetch(`http://localhost:5000/products?_page=${page}&_per_page=25`);
    const response = await fetch(`http://localhost:5000/products?_page=${page}&_per_page=25`);
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
    
//--> --> --> --> --> create Product <-- <-- <-- <-- <--
export const createProduct = async (product: Products): Promise<Products> =>{
  console.log('llego el producto aca -->', product);
  try {
    const response = await fetch("http://localhost:5000/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });
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

