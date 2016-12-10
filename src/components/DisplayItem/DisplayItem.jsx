import React, { Component} from 'react';
// import JobForm from './JobForm/JobForm.jsx';
import './DisplayItem.css';

const DisplayItem = props =>(

  <div className="box">
        <h3>Name:{props.name}</h3>
        <h2>Title:{props.title}</h2>
        <h2>Descripition:{props.descripition}</h2>
        <h2>URL:{props.url}</h2>
        <h2>Contact/Info:{props.contact}</h2>
        <h2>#:{props.phone}</h2>
  </div>

  );


export default DisplayItem;
