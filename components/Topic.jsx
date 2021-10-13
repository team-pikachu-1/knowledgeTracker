import React from 'react';
import ReactDom from 'react-dom';
import { Link } from 'react-router-dom';


function Topic (props) {

    // onclick function
    const showTopic = (e) => {
        e.preventDefault();
    }
    console.log(props.topicName)
    return (
        // <button className="topic" onClick={(e) => showTopic(e)}>{props.topicName}</button>
        <button >
        <Link className="actionButton" cardTitle={props.topicName} to="/card">{props.topicName}</Link>
        </button>
    );
}

export default Topic