// import { json } from 'express';
import React from 'react';
import ReactDom from 'react-dom';

function SubmissionForm(props) {
  // onClick function
  function addOption(e) {
    console.log('hello')
    // e.preventDefault();
    const inputVal = document.getElementById("inputBox").value
    console.log(inputVal)
    // fetch(`/api/${props.endpoint}`, {
    //   method: 'POST',
    //   headers: {"Content-Type": "application/json"},
    //   body: JSON.stringify({categoryTitle: inputVal})
    // })
    // .then(res => res.json())
    // .then(console.log(inputVal) 
    //   // change state to include new category?
    //   )
  }

  return (
    <div>
      <h4>Add new {props.name}</h4>
      <input id="inputBox" placeholder="add new here"></input>
      <button className="submitButton" onClick={(e) => addOption(e)}>Submit</button>
      {/* <form id="addOption" action="/api/categories" method="POST">
        <label for="email">Add new category</label><br />
        <input type="text" id="inputVal" name="inputVal"></input><br />
        <button id="addOption_button" type="submit" >Submit</button>
      </form> */}
    </div>
  )
}

export default SubmissionForm;