import React from 'react';
import ReactDom from 'react-dom';
// import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

// IMPORTING COMPONENTS
import CategoriesContainer from "./CategoriesContainer";
// import SubmissionForm from "./SubmissionForm";

function Dashboard() {
  return (
    <div>
      <h1> hello there </h1>
      <CategoriesContainer />
      {/* <SubmissionForm /> */}
    </div>
  )
}

export default Dashboard