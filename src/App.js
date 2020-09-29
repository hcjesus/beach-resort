import React from 'react';
import "./App.css";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom"; 

import {Route, Switch} from 'react-router-dom';

import NavBar from "./components/navbar";

function App() {
  return (
    <div>
      <NavBar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/rooms/" component={Rooms}/>
        <Route exact path="/rooms/:room" component={SingleRoom}/>
        <Route component={ErrorPage}/>
      </Switch>
    </div>
  );
}

export default App;
