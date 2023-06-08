import React, { useEffect, useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';
import axios from "axios";
import { RiCloseLine } from "react-icons/ri";
import { getWantedCinRoute } from './APIRoutes';

const secondaryAppConfig = {
  apiKey: "AIzaSyCEl-cDrAYDBSWa9NvudrwkQL_Cy1lp700",
  authDomain: "wanted-detection.firebaseapp.com",
  databaseURL: "https://wanted-detection-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "wanted-detection",
  storageBucket: "wanted-detection.appspot.com",
  messagingSenderId: "434713660380",
  appId: "1:434713660380:web:7cb9424a7318361cad1d19"
};

const secondaryApp = firebase.initializeApp(secondaryAppConfig, "SECONDARY_APP");

const WantedDetection = () => {
  const [data, setData] = useState(null);
  const [warningOpen, setWarningOpen] = useState(false);

  useEffect(() => {
    const databaseRef = secondaryApp.database().ref();
    databaseRef.on('value', (snapshot) => {
      const fetchedData = snapshot.val();
      setData(fetchedData);
    });

    return () => {
      databaseRef.off('value');
    };
  }, []);

  const getWantedCin = async (data) => {
    try {
      const response = await axios.get(`${getWantedCinRoute}/${data.Cin}`);
      const { userData } = response.data;
      console.log("Real-time fetch from MongoDB: ", userData);
      return !!userData;
    } catch (error) {
      console.error("An error occurred while fetching data:", error);
      return false;
    }
  };

  useEffect(() => {
    if (data) {
      console.log("Realtime fetch from Firebase: " + data.Cin);
      const checkIfWanted = async () => {
        const isWanted = await getWantedCin(data);
        if(isWanted){
            setWarningOpen(true);
        }
        
      };
      checkIfWanted();
    }
  }, [data]);

  return <>{warningOpen && 
  <>
    <div className='darkBG' onClick={() => setWarningOpen(false)} />
    <div class="col-xl-4 col-lg-5 col-md-6 d-flex flex-column mx-auto card py-2 px-3 rounded centered">
      <div class="mb-4">
        <h3 class="font-weight-bolder text-info text-gradient" style={{textAlign: "center"}}>WARNING</h3>
        <p class="mb-0" style={{textAlign: "center"}}>Wanted Person has been detected </p>
      </div>
      <button className='closeBtn' onClick={() => setWarningOpen(false)}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
        </button>
      
    </div>
  </>
  }</>;
};

export default WantedDetection;
