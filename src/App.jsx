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

function App() {
  return (
    <Router>
        <header>
                <h1>Knowledge Tracker</h1>
        </header>
      <div id="main_container">
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/signup" component={Signup} />
          <Route path="/" component={Login} />
        </Switch>
      </div>
    </Router>
  )
}

export default App