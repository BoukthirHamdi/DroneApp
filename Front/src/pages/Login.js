import React, {useState, useEffect} from 'react'
// import { toast, ToastContainer } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
// import 'react-toastify/dist/ReactToastify.css';
import { loginRoute } from '../utils/APIRoutes';
import axios from "axios" 


const Login = () => {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    username:"",
    password:""
});

const handleSubmit = async (event) =>{
  event.preventDefault();
  const { password, username } = values;
  const {data} = await axios.post(loginRoute, {
      username,
      password,
  });
  if(data.status === false){
      console.log(data.msg);
  }
  if (data.status === true) {
      localStorage.setItem('drone-admin-user',JSON.stringify(data.user))
      navigate("/");
  }
};

useEffect(()=>{
  if(localStorage.getItem('drone-admin-user')){
    navigate('/');
  }
},[])

 

 

  const handleChange = (event) =>{
    setValues({ ...values, [event.target.name]: event.target.value });
    console.log({ ...values, [event.target.name]: event.target.value });
};
  return (
    <div><div class="col-xl-4 col-lg-5 col-md-6 d-flex flex-column mx-auto">
    <div class="card card-plain mt-8">
      <div class="card-header pb-0 text-left bg-transparent">
        <h3 class="font-weight-bolder text-info text-gradient">Welcome back</h3>
        <p class="mb-0">Enter your Username and Password to sign in</p>
      </div>
      <div class="card-body">
        <form role="form" onSubmit={(event)=>handleSubmit(event)}>
          <label>Username</label>
          <div class="mb-3">
            <input type="text" onChange={(e)=> handleChange(e)} class="form-control" name="username" placeholder="Username" aria-label="Username" aria-describedby="username-addon"/>
          </div>
          <label>Password</label>
          <div class="mb-3">
            <input type="password" onChange={(e)=> handleChange(e)} class="form-control" name="password" placeholder="Password" aria-label="Password" aria-describedby="password-addon"/>
          </div>
          
          <div class="text-center">
            <button type="submit" class="btn bg-gradient-info w-100 mt-4 mb-0">Sign in</button>
          </div>
        </form>
      </div>
      
    </div>
  </div></div>
  )
}

export default Login