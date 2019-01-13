import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import SeasonDisplay from './SeasonDisplay';
import Loader from './Loader';

export default class App extends Component {

   state = {
      userLatitude: null,
      errorMessage: ''
   }

   componentDidMount() {
      this.getUserLatitude()
   }

   getUserLatitude() {
      window.navigator.geolocation.getCurrentPosition(
         position => this.setState({ userLatitude: position.coords.latitude }),
         err => this.setState({ errorMessage: err.message })  
      );
   }

  render() {
     const { userLatitude, errorMessage } = this.state;
   
      if (errorMessage && !userLatitude) {
         return <div> Error: { errorMessage }</div>;
      }

      if (!errorMessage && userLatitude) {
         return <SeasonDisplay userLatitude={userLatitude}/> 
      }

      return < Loader message="Please, accept location request" />;
  };
}


ReactDOM.render(
   <App />, 
   document.querySelector('#root')
   );