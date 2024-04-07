import React from 'react';
import VideoEx from './components/Main/VideoEx';
import Footer from './components/Footer/Footer';
import Nav from './components/Navigation/Nav';
import Film from './components/Main/Film';
import Main from './components/Main/Main';
import DarkMode from './components/DarkMode/DarkMode';
import { Router } from '@mui/icons-material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Detail from './components/Detail/Detail';
import Dashboard from './components/DashBoard/Dashboard';

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='film/:id' element={<Detail/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;