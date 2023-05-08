import React,{useEffect} from 'react'
import { Link, useNavigate, BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from '../comp/NavBar';


const Home = () => {
  const navigate = useNavigate();
  useEffect(()=>{
    if(!localStorage.getItem('drone-admin-user')){
      navigate('/login');
    }
  },[])
  
  return (
    <div className='container-page'>
      <NavBar selected="home"/>
      <div className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ps ps--active-y">Hello</div>
    </div>
  )
}

export default Home