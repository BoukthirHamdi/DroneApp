import React, {useEffect, useState} from 'react'
import { RiCloseLine } from "react-icons/ri";
import axios from "axios";
import { getUserRoute, updateUserRoute } from '../utils/APIRoutes'
const imageMimeType = /image\/(png|jpg|jpeg)/i;
const EditUser = (props) => {
    const userIdEdit = props.id;
    const isOpen = props.setIsOpen;
    const [file, setFile] = useState(null);
    const [fileDataURL, setFileDataURL] = useState("");
    const [user, setUser] = useState({
        name: '',
        username: '',
        password: '',
        grade: '',
        role: '',
        email: '',
        phone: '',
        images:''
      });


    const imageHandler = (e) => {
        const file = e.target.files[0];
        if (!file.type.match(imageMimeType)) {
          alert("Image mime type is not valid");
          return;
        }
        setFile(file);
    };

    useEffect(() => {
        let fileReader,
          isCancel = false;
        if (file) {
          fileReader = new FileReader();
          fileReader.onload = (e) => {
            const { result } = e.target;
            if (result && !isCancel) {
              setFileDataURL(result);
              setUser(prevState => {
                return { ...prevState, images: result }
              });
            }
          };
          fileReader.readAsDataURL(file);
        }
        return () => {
          isCancel = true;
          if (fileReader && fileReader.readyState === 1) {
            fileReader.abort();
          }
          
        };
        
      }, [file]);

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
      };

    useEffect(()=>{
        const getUserById = async () =>{
            const {data} =await axios.get(`${getUserRoute}/${userIdEdit}`)
            
        if(data == undefined){
            alert("Cannot Find the user")
        }else{
            setUser(data.userDataId)
            
        }
        }
        getUserById();
        
    },[])
    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const response = await axios.post( updateUserRoute, {user, userIdEdit});
        if(response.data.status){
            window.location.href = '/listusers'
          }
        } catch (error) {
          console.log(error);
        }
      };

  return (
    <>
    
    <div className='darkBG' onClick={() => isOpen(false)} />


    
    <div class="col-xl-4 col-lg-5 col-md-6 d-flex flex-column mx-auto card py-2 px-3 rounded centered">
      <div class="mb-4">
        <h3 class="font-weight-bolder text-info text-gradient" style={{textAlign: "center"}}>Edit User</h3>
        <p class="mb-0" style={{textAlign: "center"}}>You are editing some personal info </p>
      </div>
      <button className='closeBtn' onClick={() => isOpen(false)}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
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
          <label htmlFor="role">Role</label>
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
            
          />
        </div>
        <div className="form-group">
          <label htmlFor="images">Image</label>
          <input
           type={"file"}
            accept="img/png, image/jpeg, image/jpg"
            onChange={imageHandler}
            className="form-control"
            
          />
        </div>
        <button type="submit" class="btn bg-gradient-info w-100 mt-4 mb-0">Update</button>
      </form>
    </div>  
    </>
  )
}

export default EditUser