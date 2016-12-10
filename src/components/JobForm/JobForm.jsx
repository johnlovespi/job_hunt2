import React, { Component } from 'react';
import './JobForm.css';

// function handleKeyPress(e, cb) {
//   if (e.key === 'Enter') cb();
// }
const JobForm = (props)=> {
return (
    <div className="p_title">
      <h2>Post A Job</h2>
        <div id="form">
          <form>
            <input type="text" placeholder="name"        name="name"         onChange={props.updateFormName} />
            <input type="text" placeholder="title"       name="title"        onChange={props.updateFormTitle} />
            <input type="text" placeholder="description" name="description"  onChange={props.updateFormDescription} />
            <input type="text" placeholder="url"         name="url"          onChange={props.updateFormUrl} />
            <input type="text" placeholder="contact"   name="contact"          onChange={props.updateFormContact} />
            <input type="text" placeholder="phone"    name="phone"             onChange={props.updateFormPhone} />
            <button onClick={props.postJobs}> Submit Post </button>
          </form>
        </div>
    </div>
  );
}

export default JobForm;
