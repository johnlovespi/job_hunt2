import React, { Component } from 'react';
import './JobForm.css';

// function handleKeyPress(e, cb) {
//   if (e.key === 'Enter') cb();
// }

class JobForm extends Component {
render(){
  return (
    <div className="p_title">
      <h2>Post A Job</h2>

        <div id="form">
          <form>
            <input type="text" name="name" value={this.props.jobsFormName} onChange={this.props.updateFormName}/>
            <input type="text" name="title" value={this.props.jobsFormTitle} onChange={this.props.updateFormTitle}/>
            <input type="text" name="description"value={this.props.jobsFormDescription} onChange={this.props.updateFormDescription}/>
            <input type="text" name="url" value={this.props.jobsFormUrl} onChange={this.props.updateFormUrl}/>
            <input type="text" name="contact" value={this.props.jobsFormContact} onChange={this.props.updateFormContact}/>
            <input type="text" name="phone" value={this.props.jobsFormPhone} onChange={this.props.updateFormPhone}/>
            <button> Submit Post </button>
          </form>
        </div>
  </div>
   );
  }
}
export default JobForm;
