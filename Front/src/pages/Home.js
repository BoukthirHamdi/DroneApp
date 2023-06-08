import React,{useEffect ,useState} from 'react'
import { Link, useNavigate, BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from '../comp/NavBar';
import { getUsersRoute } from '../utils/APIRoutes';
import axios from "axios";
const Home = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [userExist, setUserExist] = useState(false)
  useEffect(()=>{
    if(!localStorage.getItem('drone-admin-user')){
      navigate('/login');
    }
    if (localStorage.getItem('drone-admin-user')) {
      setUserExist(true)
      const getUsers = async () => {
        const { data } = await axios.get(getUsersRoute);
        if (data) {
          setUsers(data.userData)
        }
      }
      getUsers();
    };
  },[])
  
  return (
    <div className='container-page'>
      <NavBar />
      <div className="mx-auto flex justify-between w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">Dashboard</h1>
      </div>
      <div className="mx-auto max-w-7xl py-2 sm:px-6 lg:px-8">
      <div className='w-[50%] bg-slate-100 p-2 overflow-y-scroll'>
        <h4>Users List</h4>
      <div class="lg:gap-xl-12 grid gap-x-6 md:grid-cols-3 xl:grid-cols-4">
        {
          users.map((user) => (
            <div class="mb-12 flex flex-col justify-center items-center">
          <img src={user.images}
            class="mx-auto w-[60px] h-[60px] mb-4 rounded-full shadow-lg dark:shadow-black/20" alt="" style={{maxWidth: 100+'px'}} />

          <p class="mb-2 font-bold">{user.name}</p>
          <p class="text-neutral-500 dark:text-neutral-300">{user.grade}</p>
        </div>
          ))
        }
        
      </div>
      </div>
      </div>
    </div>
  )
}

export default Home