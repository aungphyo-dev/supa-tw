"use client"
import React, {createContext, useContext} from "react";
import Cookies from "js-cookie";
import axios from "axios";

const AuthContext = createContext({})
const AuthContextProvider = ({children}:{children : React.ReactNode}) => {
    const AXIOSC = axios.create({
        baseURL: 'http://127.0.0.1:8000/api',
        headers: {
            Authorization: "Bearer " + Cookies.get("auth"),
        },
    })
  return <AuthContext.Provider value={AXIOSC}>
      {children}
  </AuthContext.Provider>
}
export const useAuthContext =() => useContext<any>(AuthContext)
export default AuthContextProvider