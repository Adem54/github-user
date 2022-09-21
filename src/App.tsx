import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Content from "./components/dashboard/Content";
import Home from "./components/home";
import { NotFound } from "./components/notFound";
import ProtectedRoute from "./components/protectedRoute";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <main className="mainWrapper">
      <Routes>
        <Route path="/" element={<Home/>}/>
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
