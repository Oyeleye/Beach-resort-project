import React from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Route from 'react-router-dom/Route';



function App() {
  return (
     <Router>
        <Route path="/" exact strict render={
         ()=> {
            return ( <h1>Welcome home</h1>);
         }
        }/>

        <Route path="/Rooms" exact strict render={
         ()=> {
            return ( <h1>Check the rooms</h1>);
         }
        }/>

        <Route path="/SingleRooms" exact strict render={

         ()=> {
            return ( <h1>Check our single rooms</h1>);
         }
        }/>

        <Route path="/Error" exact strict render={
         ()=> {
            return ( <h1>Error Page</h1>);
         }
        }/>
     </Router>
  );
}

export default App;
