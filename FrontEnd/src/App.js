import React from 'react';
import './App.css';
import Index from './component';
import { Provider } from 'react-redux';
import  store  from './store/store';


class App extends React.Component{
  // state = {
  //   fishes: []
  // }
  
  
  // componentDidMount(){
  //   fetch('http://localhost:3005/fishes/')
  //   .then(response => response.json())
  //   .then(data => {
  //     this.setState({
  //       fishes: data
  //     })
  //   })
  // }

    render(){

    //  const {fishes} = this.state
    //  const availableFishes = this.state.loading ? "loading..." : this.state.fishes
      return (
        <div>
          <Provider store = {store}>
              <Index  />
        </Provider >
          
        </div>
        
      );
    }
}

export default App;


// /**
//  * EasyHTTP Library
//  * Library for making HTTP requests
//  *
//  * @version 3.0.0
//  * @author  Damilola Oyeyipo
//  * @license MIT
//  *
// **/

// class EasyHTTP {
//   // Make an HTTP GET Request 
//   async get(url) {
//     const response = await fetch(url);
//     const resData = await response.json();
//     return resData;
//   }

//   // Make an HTTP POST Request
//   async post(url, data) {
//     const response = await fetch(url, {
//       method: 'POST',
//       headers: {
//         'Content-type': 'application/json'
//       },
//       body: JSON.stringify(data)
//     });

//     const resData = await response.json();
//     return resData;
   
//   }

//    // Make an HTTP PUT Request
//    async put(url, data) {
//     const response = await fetch(url, {
//       method: 'PUT',
//       headers: {
//         'Content-type': 'application/json'
//       },
//       body: JSON.stringify(data)
//     });
    
//     const resData = await response.json();
//     return resData;
//   }

//   // Make an HTTP DELETE Request
//   async delete(url) {
//     const response = await fetch(url, {
//       method: 'DELETE',
//       headers: {
//         'Content-type': 'application/json'
//       }
//     });

//     const resData = await 'Resource Deleted...';
//     return resData;
//   }

// }

// export const http = new EasyHTTP();