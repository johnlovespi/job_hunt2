import React, { Component } from 'react';
//import JobForm from './JobForm/JobForm.jsx';
import './DisplayItem.css';

const DisplayItem = props =>(

  <div className="box">
        <h2>Name: {props.name}</h2>
        <h3>Title: {props.title}</h3>
        <h3>Descripition: {props.descripition}</h3>
        <h3><a href="">URL: {props.url}</a></h3>
        <h3>Contact/Info: {props.contact}</h3>
        <h3>PhoneNumber: {props.phone}</h3>
        <button onClick={()=> props.deletePost(props.id)}>Delete Post</button>
  </div>

  );


export default DisplayItem;
