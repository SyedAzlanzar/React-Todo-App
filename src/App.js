import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// importing components 
import Todolist from "./component/Todolist";
import Signup from './component/Signup/Signup';
import Signin from './component/Signin/Signin';



function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Signup />} />
        <Route path='/Signin/Signin' element={<Signin />} />
        <Route path='/Todolist' element={<Todolist />} />
      </Routes>


    </BrowserRouter>
  );
}

export default App;
