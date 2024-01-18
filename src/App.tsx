import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './paginas/home/Home';
import Navbar from './components/NavBar/Navbar';
import Footer from './components/Footer/Footer';
import Login from './paginas/Login/Login';
import Cadastro from './paginas/Cadastro/Cadastro';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <>
     <AuthProvider>
    <BrowserRouter>
        <Navbar />
          <div className='min-h-[80vh]'>
          <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/home" element={<Home />} />
        </Routes>

          </div>
          <Footer />
        </BrowserRouter>
        </AuthProvider>
    </>
);
}
export default App; 