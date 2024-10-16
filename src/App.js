import React, { createContext, useState } from "react";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Main from "./components/Main";
import Login from "./components/Login";
import "./css/header.css"
import "./css/footer.css"
import UserMypage from "./components/UserMypage";
import { MyContext } from "./context/MyContext";
import Category from "./components/Category";
import Restaurant from "./components/Restaurant";
import Pay from "./components/Pay";
function App() {
  const [user,setUser] = useState('');
  return (
    <BrowserRouter>
      <MyContext.Provider value={{user,setUser}}>
        <Routes>
          <Route path="/" element={<Main />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/user" element={<UserMypage />}/>
          <Route path="/category/:idx" element={<Category />}/>
          <Route path="/restaurant/:idx" element={<Restaurant />}/>
          <Route path="/pay" element={<Pay />}/>
        </Routes>
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;
