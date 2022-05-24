import React from 'react';
import Home from './components/home/component/Home';
import NewQuestion  from "./components/newQuestion/component/NewQuestion";
import './App.css';
import { Route, Routes } from "react-router-dom";
import Sidebar from './components/siderbar/component/Sidebar';


function App() {
  return (
    <div className="main"> 
    <Sidebar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/new" element={<NewQuestion />}></Route>
      </Routes>
    </div>
  );
}

export default App;
