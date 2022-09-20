import React from "react";

import Home from "./components/home";
import "./App.css";
import { useAuth0 } from "@auth0/auth0-react";
import Content from "./components/dashboard/Content";
import {BrowserRouter,Routes,Route,} from "react-router-dom";
import ProtectedRoute from "./components/protectedRoute";
import { NotFound } from "./components/notFound";





function App() {
  const { loginWithRedirect, logout, isAuthenticated,isLoading,user } = useAuth0();

  return (
    <BrowserRouter>
      
    <div className="App">
      <main className="mainWrapper">
      {/* {isLoading ? <h2>Loading...</h2> : isAuthenticated ? <Content/> :   <LoginSignup /> } */}
      {/* <LoginSignup /> */}
  
  
      <Routes>
        {/* <Route path="/" element={<Content/>}/> */}
        <Route path="/" element={<Home/>}/>
        {/* <Route path="/" element={<Home/>}/> */}
        {/* <Route path="/dashboard" element={<ProtectedRoute><Content/></ProtectedRoute>}  />
        boyle kullanirsak children ile  gostermek zorundayiz Outlet ile gosteremeyiz
       Ama asagidaki gibi kullanir isek o zaman sadece Outlet ile datayi alabiliriz...
       Cunku zaten ProtectedRoute un childreni yok dikkat edelim...karistirmayalim
       Bu arada children ile Outlet ayn sey degil cok fark var arada
       Outlet nested Route lar icin kullanilyor
       ama children ise componentler icinde kalan jsx elementleri icin kullanilir
       ve children her zaman 1 tane element icinde olmalidir bir parent olmalidir mutlaka kapsayici
       ama Outlet oyle degil nested olarak birden fazla route u dinamik olarak gostermeye yarar
       bu iki farki ayiralim onemli
       */}
        <Route  element={<ProtectedRoute/>}>
          <Route path="/dashboard" element={<Content/>}/>
         
        </Route>   
        <Route path="*" element={<NotFound/>}/>   
      </Routes>   
      </main>
    </div>
    </BrowserRouter>
  );
}

export default App;
