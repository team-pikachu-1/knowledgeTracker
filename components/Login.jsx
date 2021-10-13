import React from 'react';
import ReactDom from 'react-dom';
import { Link } from 'react-router-dom'

class Login extends React.Component {
  // event handler 
  render() {
    return (
        <div>
            <div id="login_container">
            <form id="login" action="/dashboard" method="GET">
                  <label for="username">Username</label><br />
                  <input type="text" id="username" name="username"></input><br />
                  <label for="password">Password</label><br />
                  <input type="password" id="password" name="password"></input><br />
                  <button id="login_button" type="submit" >Log In</button>
              </form>
              <Link to="/signup">Click here to sign up</Link>
            </div>
        </div>
    );
    }
}

export default Login;