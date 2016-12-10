import React, { Component} from 'react';
// import JobForm from './JobForm/JobForm.jsx';
import './DisplayItem.css';

const DisplayItem = props =>(

  <div className="box">
        <h3>{props.name}</h3>
        <h2>{props.title}</h2>
        <h2>{props.descripition}</h2>
        <h2>{props.url}</h2>
        <h2>{props.contact}</h2>
        <h2>{props.phone}</h2>
  </div>

  );


export default DisplayItem;
