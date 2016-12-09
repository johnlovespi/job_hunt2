import React, { Component } from 'react';
// import Landp from './Landp/Landp.jsx';
import JobForm from './JobForm/JobForm.jsx';
import DisplayItem from './DisplayItem/DisplayItem.jsx';

class App extends Component {
  constructor(props){
    super();
    this.state = {
      name: '',
      title: '',
      descripition: '',
      url: '',
      contact:'',
      phone:'',


    }
  }

postJobs() {
  fetch('/db/jobs', {
    headers: {
      'Content-Type': 'application/json'
    },
      method: 'POST',
      body: JSON.stringify({
        name: this.state.jobsFormName,
        title: this.state.jobsFormTitle,
        descripition: this.state.jobsFormDescription,
        url: this.state.jobsFormUrl,
        contact:this.state.jobsFormContact,
        phone:this.state.jobsFormPhone,
      })
  })
  .then(this.setState ({
     name: '',
     title: '',
     descripition: '',
     url: '' ,
     contact:'',
     phone:'',
  }))
  // .then(this.)
  .catch(err => console.log(err));

}


updateFormName(e){
  this.setState({
    updateFormName:e.target.value,
  });
}
updateFormTitle(e){
  this.setState({
    updateFormTitle:e.target.value,
  });
}
updateFormDescription(e){
  this.setState({
    updateFormDescription:e.target.value,
  });
}
updateFormUrl(e){
  this.setState({
    updateFormUrl:e.target.value,
  });
}
updateFormContact(e){
  this.setState({
    updateFormContact:e.target.value,
  });
}
updateFormPhone(e){
  this.setState({
    updateFormPhone:e.target.value,
  });
}

render(){
    return (
      <div>
      <JobForm
        jobsFormName={this.state.jobsFormName}
        jobsFormTitle={this.state.jobsFormTitle}
        jobsFormDescription={this.state.jobsFormDescription}
        jobsFormUrl={this.state.jobsFormUrl}
        jobsFormContact={this.state.jobsFormContact}
        jobsFormPhone={this.state.jobsFormPhone}

        updateFormName={event => this.update.updateFormName(event)}
        updateFormTitle={event => this.update.updateFormTitle(event)}
        updateFormDescription={event => this.update.updateFormDescription(event)}
        updateFormUrl={event => this.updateFormUrl(event)}
        updateFormContact={event => this.updateFormContact(event)}
        updateFormPhone={event => this.updateFormPhone(event)}

      />
      <DisplayItem

       />

      </div>

    );
  }
}

export default App;


