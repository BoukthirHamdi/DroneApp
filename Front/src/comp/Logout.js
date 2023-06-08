import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const logout = () => {
      localStorage.removeItem('drone-admin-user');
      navigate('/login');
    };

    logout();
  }, [navigate]);

  return <div>Logout</div>;
};

export default Logout;
