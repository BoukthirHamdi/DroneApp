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

const ListWanted = () => {
  const [wanteds, setWanteds] = useState([]);
  const [wantedExist, setWantedExist] = useState(false)
  const [isOpen, setIsOpen] = useState(false);
  const [editIsOpen, setEditIsOpen] = useState(false);
  const [wantedEdit, setWantedEdit] = useState()

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

const handleEdit= (id, event) =>{
  event.preventDefault();
  setEditIsOpen(true);
  setWantedEdit(id);
  
}
  }


  return (

    <div className='container-page'>
    <NavBar selected="listwanted" />
    <div className='flex gap-4 pt-4'>
        {
        wanteds.map((wanted) => (
        <div class="col-bg-6">
                  <div class="card">
                    <div class="card-header bg-4 p-3 text-center">
                      <div class="icon icon-shape imgWanted bg-gradient-primary shadow text-center border-radius-lg">
                        <img src='https://www.mnp.ca/-/media/foundation/integrations/personnel/2020/12/16/13/57/personnel-image-4483.jpg?h=800&w=600&hash=9D5E5FCBEE00EB562DCD8AC8FDA8433D' className='w-full h-full border-radius-lg'  />
                      </div>
                    </div>
                    <div class="card-body pt-0 p-3 text-center">
                      <h6 class="text-center mb-0">{wanted.name}</h6>
                      <span class="text-xs">Belong Interactive</span>
                      <hr class="horizontal dark my-3"/>
                      <button class="btn btn-outline-primary btn-sm mb-0">Show More</button>
                    </div>
                  </div>
                </div>
        ))}
      </div>
      </div>
    
  )
}


export default ListWanted