import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Homepage from './components/Homepage';
import Signup from './components/Signup/SignUp';
import SignIn from './components/Signin/SignIn';
import About from "./components/About";
import Services from './components/Services';
import Contact from './components/Contact';
import DashBoard from './components/dashboard/DashBoard';

function App() {
  return (
    <div className="App">
    <Router>
    <Switch>
    <Route exact path='/'>
      <Homepage />
    </Route> 
    <Route path='/signup'>
          <Signup />
    </Route> 
    <Route path='/signIn'>
          <SignIn />
    </Route>
    <Route path='/dashboard'>
    <DashBoard />
    </Route>
    <Route path='/about'>
    <About/>
    </Route>
    <Route path='/services'>
    <Services/>
    </Route>
    <Route path='/contact'>
    <Contact/>
    </Route>
    </Switch>
  </Router>
    </div>
  );
}

export default App;
