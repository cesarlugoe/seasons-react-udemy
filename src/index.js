import ReactDOM from 'react-dom';
import React from 'react';
import SeasonDisplay from './SeasonDisplay';
import Loader from './Loader';
import useLocation from './useLocation';

const App = () => {
   const [errorMessage, userLatitude] = useLocation();

   let content;
   if (errorMessage) {
      content = <div>Error: {errorMessage}</div>;
   } else if (userLatitude) {
      content = <SeasonDisplay userLatitude={userLatitude}/>;
   } else {
      content = <Loader message="Please, accept location request" />;
   }

   return <div className="border red">{content}</div>;
};

ReactDOM.render(
   <App />, 
   document.querySelector('#root')
   );