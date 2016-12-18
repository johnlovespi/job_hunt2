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
           <p><strong>Name</strong></p><input type="text" placeholder=""        name="name"         onChange={props.updateFormName} />
           <p><strong>title</strong></p><input type="text" placeholder=""       name="title"        onChange={props.updateFormTitle} />
           <p><strong>description</strong></p><input type="text" placeholder="" name="description"  onChange={props.updateFormDescription} />
           <p><strong>url</strong></p><input type="text" placeholder=""         name="url"          onChange={props.updateFormUrl} />
           <p><strong>contact</strong></p><input type="text" placeholder=""   name="contact"          onChange={props.updateFormContact} />
           <p><strong>phone</strong></p><input type="text" placeholder=""    name="phone"             onChange={props.updateFormPhone} />

           <button id="btn" onClick={props.postJobs}> Submit Post </button>
          </form>
        </div>
    </div>
  );
}

export default JobForm;
