import React, { useState } from 'react';
import { adduserRoute } from '../utils/APIRoutes';
import axios from 'axios';

const AddUser = () => {
  const [user, setUser] = useState({
    name: '',
    username: '',
    password: '',
    grade: '',
    role: '',
    email: '',
    phone: '',
    images: []
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post( adduserRoute, user);
      console.log(response);
      setUser({
        name: '',
        username: '',
        password: '',
        grade: '',
        role: '',
        email: '',
        phone: '',
        images: []
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div class="col-xl-4 col-lg-5 col-md-6 d-flex flex-column mx-auto">
      <div class="mb-4">
        <h3 class="font-weight-bolder text-info text-gradient" style={{textAlign: "center"}}>Add User</h3>
        <p class="mb-0" style={{textAlign: "center"}}>Enter your Username and Password to sign in</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={user.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            className="form-control"
            id="username"
            name="username"
            value={user.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="grade">Grade</label>
          <input
            type="text"
            className="form-control"
            id="grade"
            name="grade"
            value={user.grade}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="role">Rôle</label>
          <input
            type="text"
            className="form-control"
            id="role"
            name="role"
            value={user.role}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">phone</label>
          <input
            type="text"
            className="form-control"
            id="phone"
            name="phone"
            value={user.phone}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" class="btn bg-gradient-info w-100 mt-4 mb-0">Ajouter</button>
      </form>
    </div>  
    
  );
};

export default AddUser;
