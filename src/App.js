import React from 'react';
import { BrowserRouter, Route,Switch } from "react-router-dom"
import './App.css';
import Home from './pages/Home'
import Rooms from './pages/Rooms'
import SingleRoom from './pages/SingleRoom'
import Error from './pages/Error'
import Navbar from './component/Navbar'
function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Switch>
    <Route exact path="/" component={Home}/>
     <Route exact path="/rooms/" component={Rooms}/>
    <Route  path="/rooms/:slug" component={SingleRoom}/>
    <Route  component={Error}/> 
    </Switch>
    </BrowserRouter>
  );
}

export default App;
