import React, { useState, useEffect } from 'react'
import NavBar from '../comp/NavBar'

import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { getWantedsRoute } from '../utils/APIRoutes';
import { getWantedRoute } from '../utils/APIRoutes';
import { addWantedRoute } from '../utils/APIRoutes';
import { updateWantedRoute } from '../utils/APIRoutes';
import { deleteWantedRoute } from '../utils/APIRoutes';
import  AddWanted  from '../comp/AddWanted';

const ListWanted = () => {
  const [wanteds, setWanteds] = useState([]);
  const [wantedExist, setWantedExist] = useState(false)
  const [isOpen, setIsOpen] = useState(false);
  const [editIsOpen, setEditIsOpen] = useState(false);
  const [wantedAddIsOpen, setWantedAddIsOpen] = useState(false)

  if(localStorage.getItem('drone-admin-user')==null){
    window.location.href = '/login'
  }

  useEffect(() => {
    if (localStorage.getItem('drone-admin-user')) {
      setWantedExist(true)
      const getWanteds = async () => {
        const { data } = await axios.get(getWantedsRoute);
        
        if (data) {
          setWanteds(data.wantedData)
          console.log(wanteds.adress)
        }
      }
      getWanteds();
    };
  }, [])

  const handleDelete = async (wantedID, event) =>{
    event.preventDefault();
    
    const data = await axios.post(deleteWantedRoute, {wantedID});

    if(data.data.status === false){
      console.log(data.msg);
  }
  if (data.data.status === true) {
    console.log("wanted deleted");
    window.location.href = '/listwanteds'
}


}


  return (
    <div className="container-page">
      <NavBar  />
      <div className="mx-auto flex justify-between w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">Wanted List</h1>
            <button class="btn btn-outline-primary btn-sm mb-0" onClick={() => setWantedAddIsOpen(true)}>Add Wanted</button>
      </div>
      <div className="mx-auto max-w-7xl py-2 sm:px-6 lg:px-8">
        <div className='flex flex-wrap gap-4'>
        {wanteds.map((wanted) => (
          <div class="col-bg-6" style={{'width' : 'fit-content'}}>
            <div class="card">
              <div class="card-header bg-4 p-3 text-center">
                <div class="icon icon-shape imgWanted bg-gradient-primary shadow text-center border-radius-lg">
                  <img
                    src={wanted.images}
                    className="w-full h-full border-radius-lg"
                  />
                </div>
              </div>
              <div class="card-body pt-0 p-3 text-center">
                <h6 class="text-center mb-0">{wanted.name}</h6>
                <span class="text-xs">Belong Interactive</span>
                <hr class="horizontal dark my-3" />
                <button class="btn btn-outline-primary btn-sm mb-0">
                  Show More
                </button>
              </div>
            </div>
          </div>
        ))}
        </div>
        
      </div>
      {wantedAddIsOpen && <AddWanted setWantedAddIsOpen={setWantedAddIsOpen}/>}
    </div>
  );
}


export default ListWanted