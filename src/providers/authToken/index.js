import { createContext, useContext, useState } from 'react';

const AuthTokenContext = createContext()

export const AuthTokenProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token") || "")

  const clearToken = () => {
    setToken("")
    localStorage.removeItem('token')
  }

  const getToken = () => {
    setToken(localStorage.getItem("token"))
  }

  return (
    <AuthTokenContext.Provider value={{ token, getToken, clearToken }}>
      {children}
    </AuthTokenContext.Provider>
  )
}

export const useToken = () => useContext(AuthTokenContext)

