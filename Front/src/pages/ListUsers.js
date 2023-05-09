import React, { useState, useEffect } from 'react'
import NavBar from '../comp/NavBar'
import AddUser from './AddUser'
import { getUsersRoute } from '../utils/APIRoutes';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { deleteUserRoute } from '../utils/APIRoutes';

const ListUsers = () => {
  const [users, setUsers] = useState([]);
  const [userExist, setUserExist] = useState(false)
  const navigate = useNavigate();
  const [deletePopup, setDeletePopup] = useState(false)
  const [userIdHandler, setUserIdHandler] = useState();

  if(localStorage.getItem('drone-admin-user')==null){
    window.location.href = '/login'
  }
  
  useEffect(() => {
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
  }, [])

  const handleDelete = async (userID, event) =>{
    event.preventDefault();
    
    const data = await axios.post(deleteUserRoute, {userID});
    console.log(data);
    if(data.data.status === false){
      console.log(data.msg);
  }
  if (data.data.status === true) {
    console.log("user deleted");
    window.location.href = '/listusers'
}
  }

  return (
    <div className="container-page">
      <NavBar selected="listusers" />
      <div class="card m-4 w-full" style={{height : "fit-content"}}>
        <div class="card-header pb-0 flex justify-between">
          <h6>Users Table</h6>
          <button class="btn btn-outline-primary btn-sm mb-0">Add User</button>
        </div>
        <div class="card-body px-0 pt-0 pb-2">
          <div class="table-responsive p-0">
            <table class="table align-items-center mb-0">
              <thead>
                <tr>
                  <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                    Name / username
                  </th>
                  <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                    Function
                  </th>
                  <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                    Status
                  </th>
                  <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                    Phone Number / Email
                  </th>
                  <th class="text-secondary opacity-7"></th>
                  <th class="text-secondary opacity-7"></th>
                </tr>
              </thead>
              <tbody>
                
                {
                  users.map((user) => (
                    <tr>
                    <td>
                      <div class="d-flex px-2 py-1">
                        <div>
                          <img
                            src="../assets/img/team-2.jpg"
                            class="avatar avatar-sm me-3"
                            alt="user1"
                          />
                        </div>
                        <div class="d-flex flex-column justify-content-center">
                          <h6 class="mb-0 text-sm">{user.name}</h6>
                          <p class="text-xs text-secondary mb-0">
                            {user.username}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p class="text-xs font-weight-bold mb-0">{user.grade}</p>
                      
                    </td>
                    <td class="align-middle text-center text-sm">
                      <span class="badge badge-sm bg-gradient-success">
                        {user.role}
                      </span>
                    </td>
                    <td class="align-middle text-center">
                      <span class="text-secondary text-xs font-weight-bold">
                        {user.phone}
                      </span>
                      <p class="text-xs text-secondary mb-0">
                            {user.email}
                          </p>
                    </td>
                    <td class="align-middle">
                    <a class="btn btn-link text-dark px-3 mb-0" href="javascript:;"><i class="fas fa-pencil-alt text-dark me-2" aria-hidden="true"></i>Edit</a>
                    </td>
                    <td class="align-middle">
                    <Popup trigger={<a class="btn btn-link pointer text-danger text-gradient px-3 mb-0" ><i class="far fa-trash-alt me-2" aria-hidden="true"></i>Delete</a>} position="bottom center">
                      <div className='flex flex-col items-center'>
                        <h6 class="mb-0 text-sm">Are you sure?</h6>
                        <button class="badge badge-sm bg-gradient-danger pointer" onClick={(event)=>handleDelete(user._id, event)}>Yes</button>
                      </div>
                      
                    </Popup>
                    </td>
                  </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default ListUsers