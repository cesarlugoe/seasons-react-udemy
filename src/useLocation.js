import {useState, useEffect } from 'react';

const useLocation = () => {
   const [userLatitude, setUserLatitude] = useState(null);
   const [errorMessage, setErrorMessage] = useState('');

   useEffect(() => {
      window.navigator.geolocation.getCurrentPosition(
         position => setUserLatitude(position.coords.latitude),
         err => setErrorMessage(err.message)  
      );
   }, []);
   return [errorMessage, userLatitude];
};

export default useLocation; 