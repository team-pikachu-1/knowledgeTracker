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

function App() {
  return (
    <Router>
        <header>
                <h1>Knowledge Tracker</h1>
        </header>
      <div id="main_container">
        <Switch>
          <Route path="/signup" component={Signup} />
          <Route path="/">
            <Login />
            <Link to="/signup">Click here to sign up</Link>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App