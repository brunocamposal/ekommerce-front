import { createContext, useContext, useState } from 'react';
import { axiosInstance } from '../../shared/utils/AxiosDefault'
import { useEffect } from "react"

const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([])

  const getProducts = () => {
    axiosInstance
      .get("/api/inventories/")
      .then((response) => setProducts(response.data.results))
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <ProductsContext.Provider value={{ products, getProducts }}>
      {children}
    </ProductsContext.Provider>
  )
}

export const useProducts = () => useContext(ProductsContext)

