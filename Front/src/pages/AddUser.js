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
    <div className="container">
      <h2>Ajouter un utilisateur</h2>
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
        <button type="submit" className="btn btn-primary">Ajouter</button>
      </form>
    </div>
  );
};

export default AddUser;
