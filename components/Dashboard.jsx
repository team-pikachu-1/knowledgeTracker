import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

// IMPORTING COMPONENTS
import CategoriesContainer from "./CategoriesContainer";
import TopicsContainer from "./TopicsContainer";
import SubmissionForm from "./SubmissionForm";

function Dashboard() {
  return (
    // <Router>
      <div>
        <h3> hello there </h3>
        <CategoriesContainer />
        <SubmissionForm />
      </div>
  )
}

export default Dashboard;