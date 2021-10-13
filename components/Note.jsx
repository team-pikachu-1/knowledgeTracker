import React from 'react';
import ReactDom from 'react-dom';
import { Link } from 'react-router-dom';


function Note (props) {

    // onclick function
    const showTopic = (e) => {
        e.preventDefault();
    }
    console.log(props)
    return (
      <div>
        <p>{props.noteName}</p>
      </div>
    );
}

export default Note;