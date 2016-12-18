import React, { Component } from 'react';
//import JobForm from './JobForm/JobForm.jsx';
import './DisplayItem.css';

const DisplayItem = props =>(

  <div className="box">

        <h3>Name:{props.name}</h3>
        <h2>Title:{props.title}</h2>
        <h2>Descripition:{props.descripition}</h2>
        <h2><a href="">URL:{props.url}</a></h2>
        <h2>Contact/Info:{props.contact}</h2>
        <h2>PhoneNumber: {props.phone}</h2>

        <button onClick={()=> props.deletePost(props.id)}>Delete Post</button>
  </div>

  );


export default DisplayItem;
