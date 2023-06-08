import React, { useEffect, useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';

import {
  useJsApiLoader,
  GoogleMap,
  Marker,
} from '@react-google-maps/api';

const firebaseConfig = {
    apiKey: "AIzaSyAete17op_gkPfm6GKeoAwka_BEVyqjUwo",
    authDomain: "gps-tracker-6b30b.firebaseapp.com",
    databaseURL: "https://gps-tracker-6b30b-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "gps-tracker-6b30b",
    storageBucket: "gps-tracker-6b30b.appspot.com",
    messagingSenderId: "32869981339",
    appId: "1:32869981339:web:571e3304e00b20857f7a3e",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const mapOptions = {
  zoomControl: false,
  streetViewControl: false,
  mapTypeControl: false,
  fullscreenControl: false,
  draggable: true,
  gestureHandling: 'cooperative',
};

const SetMap = () => {
  const [data, setData] = useState(null);
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyD_3hmJ3D9sXx9KQTlCWCFtUHtzd051cX0",
  });

  useEffect(() => {
    // Set up real-time listener
    const databaseRef = firebase.database().ref();
    databaseRef.on('value', (snapshot) => {
      const fetchedData = snapshot.val();
      setData(fetchedData);
    });

    // Clean up the listener on component unmount
    return () => {
      databaseRef.off('value');
    };
  }, []);

  const center = {
    lat: data ? data.LAT : 0,
    lng: data ? data.LNG : 0,
  };

  return isLoaded ? (
    <div className='max-h-screen h-[80%]'>
      <GoogleMap
        center={center}
        zoom={18}
        mapContainerStyle={{ width: '100%', height: '100%' }}
        options={mapOptions}
      >
        <Marker position={center} draggable={false} />
      </GoogleMap>
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default SetMap;
