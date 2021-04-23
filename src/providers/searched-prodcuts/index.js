import { createContext, useContext, useState } from 'react';

import { useEffect } from "react"

const SearchedProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
    const [searchedProducts, setSearchedProducts] = useState([])

    const getSearchedProducts = (products) => {
        setSearchedProducts(products)
    }

    useEffect(() => {
        getSearchedProducts()
    }, [searchedProducts])

    return (
        <SearchedProductsContext.Provider value={{ searchedProducts, getSearchedProducts }}>
            {children}
        </SearchedProductsContext.Provider>
    )
}

export const useSearchedProducts = () => useContext(SearchedProductsContext)

