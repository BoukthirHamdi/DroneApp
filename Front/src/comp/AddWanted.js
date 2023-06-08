import React, { useState, useEffect } from 'react';
import {addWantedRoute } from '../utils/APIRoutes';
import axios from 'axios';
import { RiCloseLine } from "react-icons/ri";
const imageMimeType = /image\/(png|jpg|jpeg)/i;
const AddWanted = ({setWantedAddIsOpen}) => {
  const [file, setFile] = useState(null);
  const [fileDataURL, setFileDataURL] = useState("");
  const [wanted, setWanted] = useState({
    name: '',
    cin: '',
    adress: '',
    stars: '',
    birthday: {
        day:'',
        month:'',
        year:''
    },
    file: '',
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
          setWanted(prevState => {
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
    setWanted({ ...wanted, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    
    
    try {
      const response = await axios.post( addWantedRoute, wanted);
      console.log(response.data.status);
      if(response.data.status){
        setWanted({
            name: '',
            cin: '',
            adress: '',
            stars: '',
            birthday: {
                day:'',
                month:'',
                year:''
            },
            file: '',
            images:''
          });
        window.location.href = '/listwanted'
      }
      
      
    } catch (error) {
      console.log(error);
    }
  };

  
  
  
  

  return (
    <>
    
    <div className='darkBG' onClick={() => setWantedAddIsOpen(false)} />


    
    <div class="col-xl-4 col-lg-5 col-md-6 d-flex flex-column mx-auto card py-2 px-3 rounded centered">
      <div class="mb-4">
        <h3 class="font-weight-bolder text-info text-gradient" style={{textAlign: "center"}}>Add User</h3>
        <p class="mb-0" style={{textAlign: "center"}}>Add user to your data base</p>
      </div>
      <button className='closeBtn' onClick={() => setWantedAddIsOpen(false)}>
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
            value={wanted.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="username">CIN</label>
          <input
            type="text"
            className="form-control"
            id="cin"
            name="cin"
            value={wanted.cin}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">adress</label>
          <input
            type="text"
            className="form-control"
            id="adress"
            name="adress"
            value={wanted.adress}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Stars</label>
          <input
            type="number"
            className="form-control"
            id="stars"
            name="stars"
            value={wanted.stars}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="grade">Birthday</label>
          <input
            type="date"
            className="form-control"
            id="birthday"
            name="birthday"
            value={wanted.birthday}
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
        <div className="form-group">
          <label htmlFor="images">Details PDF</label>
          <input
           type={"file"}
            
            // onChange={imageHandler}
            className="form-control"
            
          />
        </div>
        <button type="submit" class="btn bg-gradient-info w-100 mt-4 mb-0">Add</button>
      </form>
    </div>  
    </>
  );
};

export default AddWanted;
