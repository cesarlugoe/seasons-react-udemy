import ReactDOM from 'react-dom';
import React, { Component } from 'react'

export default class App extends Component {

   state = {
      isLoading: true,
      currentPosition: null,
      errorMessage: ''
   }

   componentDidMount() {
      this.setState({
         isLoading: false,
      });
      this.getCurrentPosition()
   }

   getCurrentPosition() {
      window.navigator.geolocation.getCurrentPosition(
         position => this.setState({ currentPosition: position.coords.latitude }),
         err => this.setState({ errorMessage: err.message })  
      );
   }

  render() {
     const { isLoading, currentPosition, errorMessage } = this.state;
   
    return (
      <div>
         {isLoading?  <h1>...Loading</h1> : null}
         { (errorMessage && !currentPosition)? <h1> Error: { errorMessage }</h1> : null }
         { (!errorMessage && currentPosition)? <h1> Latitude : { currentPosition }</h1> : null }
      </div>
    )
  };
}


ReactDOM.render(
   <App />, 
   document.querySelector('#root')
   );