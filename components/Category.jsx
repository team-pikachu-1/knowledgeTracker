import React from 'react';
import ReactDom from 'react-dom';
import { Link, useHistory } from 'react-router-dom';

function Category (props) {
  const history = useHistory();

    // onclick function
    // handleClick = (e) => {
    //     this.props.history.push("/topics");
    // }
 
    return (
      // <button className="category" >{props.categoryName}</button>
      <button >
        <Link className="actionButton" to="/topics">{props.categoryName}</Link>
        </button>
    );
}

export default Category