import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import MountType from "./components/MountType";
import MountName from "./components/MountName";
import MountGen from "./components/MountGen";
import { useState } from "react";

function App() {
  const [mode, setmode] = useState('light')
  const togglemode = () => {
    if (mode === 'light') {
      setmode('dark')
      document.body.style.backgroundColor = '#0F0F0F'
    }
    else {
      setmode('light')
      document.body.style.backgroundColor = 'white'
    }
  }
  return (
    <>
      <BrowserRouter>
        <Navbar mode={mode} toggle={togglemode} />
        <Routes>
          <Route exact key={'home'} path='/' element={<Home />}></Route>
          <Route exact key={'type'} path='/searchType' element={<MountType mode={mode} />}></Route>
          <Route exact key={'name'} path='/searchName' element={<MountName mode={mode} />}></Route>
          <Route exact key={'gen'} path='/searchGen' element={<MountGen mode={mode} />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
