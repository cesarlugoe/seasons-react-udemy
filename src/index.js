import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import SeasonDisplay from './SeasonDisplay';

export default class App extends Component {

   state = {
      isLoading: true,
      userLatitude: null,
      errorMessage: ''
   }

   componentDidMount() {
      this.setState({
         isLoading: false,
      });
      this.getUserLatitude()
   }

   getUserLatitude() {
      window.navigator.geolocation.getCurrentPosition(
         position => this.setState({ userLatitude: position.coords.latitude }),
         err => this.setState({ errorMessage: err.message })  
      );
   }

  render() {
     const { isLoading, userLatitude, errorMessage } = this.state;
   
    return (
      <div>
         {isLoading?  <h1>...Loading</h1> : null}
         { (errorMessage && !userLatitude)? <h1> Error: { errorMessage }</h1> : null }
         { (!errorMessage && userLatitude)? <SeasonDisplay userLatitude={userLatitude}/> : null }
      </div>
    )
  };
}


ReactDOM.render(
   <App />, 
   document.querySelector('#root')
   );