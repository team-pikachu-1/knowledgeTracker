import React from 'react';
import ReactDom from 'react-dom';


function Category (props) {

    // onclick function
    
 
    return (
        <button className="category">{props.categoryName}</button>
    );
}

export default Category