
import './App.css';
import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import Home2 from './Components/Home2/Home2';
import Dashboard from './Components/Dashboard/Dashboard';
import PostDetails from './Components/Posts/PostDetails/PostDetails';



function App() {

 
  return (
    <div className="App">
      <h1>Social Buddy</h1>
      
      <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

         
          <li>
            <Link to="/Home">Home2</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>

        <hr />

        
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        
          <Route  path="/Home">
            <Home/>
          </Route>


          <Route  path="/Home">
            <Home2/>
          </Route>
          <Route path="/post/:postid">
            <PostDetails></PostDetails>
          </Route>
         
          <Route path="/dashboard">
            <Dashboard></Dashboard>
          </Route>
        </Switch>
      </div>
    </Router>
      
    </div>
  );
}

export default App;
