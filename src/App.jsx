import React from 'react';
import {
  BrowserRouter as Router, 
  Switch,
  Route,
  Link 
} from 'react-router-dom'

// IMPORTING COMPONENTS
import Login from '../components/Login.jsx'
import Signup from '../components/Signup.jsx'
import Dashboard from '../components/Dashboard.jsx'
import TopicsContainer from "../components/TopicsContainer";
import SubmissionForm from "../components/SubmissionForm";
import Card from "../components/Card";

function App() {
  return (
    <Router>
        <header>
                <h1>Knowledge Tracker</h1>
        </header>
      <div id="main_container">
        <Switch>
          <Route exact path="/card" component={Card} />
          <Route exact path="/topics" component={TopicsContainer} /> 
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/signup" component={Signup} />
          <Route path="/" component={Login} />
        </Switch>
      </div>
    </Router>
  )
}

export default App;