import React from 'react';
import ReactDom from 'react-dom';

class Signup extends React.Component {
  render() {
    return (
        <div>
          
            <div id="signup_container">
              <form id="signup" action="/api/signup" method="POST">
                 <label for="email">Email</label><br />
                  <input type="text" id="email"></input><br />
                  <label for="username">Username</label><br />
                  <input type="text" id="username"></input><br />
                  <label for="password">Password</label><br />
                  <input type="text" id="password"></input><br />
                  <button id="signup_button" type="submit">Sign Up</button>
              </form>
            </div>
        </div>
    );
    }
}

export default Signup;