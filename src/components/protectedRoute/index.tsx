import React from 'react'
import {Outlet,Navigate} from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const ProtectedRoute = () => {
  const { loginWithRedirect, logout, isAuthenticated,isLoading,user } = useAuth0();
  console.log("ProtectedRoute")
  console.log("isAuthenticated: ",isAuthenticated)
  console.log("isLoading: ",isLoading)
if(isLoading)return <h2>Loading....</h2>  
if(!isAuthenticated)return <Navigate to="/"/>
  return (
    <>
    {/* {children} */}
    <Outlet/>
    </>
  )
}

export default ProtectedRoute
