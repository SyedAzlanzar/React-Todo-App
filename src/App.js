import React,{useState} from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// importing components 
import Todolist from "./component/Todolist";
import Signup from './component/Signup/Signup';
import Signin from './component/Signin/Signin';



function App() {
  const [userId,setUserId] = useState('')

  const getData = (data)=>{
    setUserId(data.user.uid)
  }

 
  



  return (
    <BrowserRouter >
      <Routes>
        <Route path='/' element={<Signup  getData={getData} />} />
        <Route path='/Signin/Signin' element={<Signin getData={getData}  />} />
        <Route path='/Todolist' element={<Todolist userId={userId} />} />
      </Routes>


    </BrowserRouter>
  );
}

export default App;
