import {createContext, useContext, useState} from 'react';

const AuthTokenContext = createContext()

export const TokenProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token") || false)

  const clearToken = () => {
    setToken(false)
    localStorage.clear()
  }

  const getToken = () => {
    setToken(localStorage.getItem("token"))
  }

  return (
    <TokenContext.Provider value={{ token, getToken, clearToken }}>
      {children}
    </TokenContext.Provider>
  )
}

export const useToken = () => useContext(TokenContext)

