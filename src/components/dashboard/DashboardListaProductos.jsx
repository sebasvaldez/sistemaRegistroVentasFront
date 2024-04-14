import { useState, useEffect } from "react"
import {getProductsRequest} from "../../config/axiosConnection.js"

export const DashboardListaProductos = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () =>{
      const {data} = await getProductsRequest();
      setProducts(data);
      console.log(data)
    }
    getProducts();
  }, []);

  return (
    <div>{JSON.stringify(products)}</div>
  )
}
