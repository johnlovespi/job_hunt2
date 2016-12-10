import React, { Component } from 'react';
// import Landp from './Landp/Landp.jsx';
import JobForm from './JobForm/JobForm.jsx';
// import DisplayItem from './DisplayItem/DisplayItem.jsx';
import DisplayItemList from './DisplayItemList/DisplayItemList.jsx';


class App extends Component {
  constructor(props){
    super();
    this.state = {
      name: '',
      title: '',
      descripition: '',
      url: '',
      contact:'',
      phone:''
    }
  }


//inputs for all val for db rows

updateFormName(e){
  this.setState({
    name: e.target.value,
  });
}
updateFormTitle(e){
  this.setState({
    title: e.target.value,
  });
}
updateFormDescription(e){
  this.setState({
    descripition: e.target.value,
  });
}
updateFormUrl(e){
  this.setState({
    url: e.target.value,
  });
}
updateFormContact(e){
  this.setState({
    contact: e.target.value,
  });
}
updateFormPhone(e){
  this.setState({
    phone: e.target.value,
  });
}

// This function will post to db jobs row
postJobs() {
fetch('/db/job_hunt2', {
    headers: {
      'Content-Type': 'application/json'
    },
      method: 'POST',
      body: JSON.stringify({
        name: this.state.name,
        title: this.state.title,
        descripition: this.state.descripition,
        url: this.state.url,
        contact:this.state.contact,
        phone:this.state.phone
      })
  })
  .then(this.setState ({
     name: '',
     title: '',
     descripition: '',
     url: '' ,
     contact:'',
     phone:''
  }))
  .then(this.getAllJobs())
  .catch(err => console.log(err));

}



componentDidMount() {
  getAllJob()
  .then(allJobs =>
    this.setState({ data: allJobs })
  )
  .catch((error) => {
    throw error;
  })
}

getAllJob() {
  return fetch('/db/jobs_hunt2')
  .then(r => r.json())
  .then(data => indexByKeyName(data, 'id'));
}

// getAllJobs(){
//   fetch(`/db/job_hunt2`)
//   .then(r=> r.json())
//   .then((data)=>{
//     this.setState({
//       jobs:data
//     });
//   })
//   .catch(err => console.log(err))

// }


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

        updateFormName={event => this.updateFormName(event)}

        updateFormTitle={event => this.updateFormTitle(event)}
        updateFormDescription={event => this.updateFormDescription(event)}
        updateFormUrl={event => this.updateFormUrl(event)}
        updateFormContact={event => this.updateFormContact(event)}
        updateFormPhone={event => this.updateFormPhone(event)}
        postJobs={event => this.postJobs(event)}

      />
      <DisplayItemList
        getAllJobs={this.getAllJob.bind(this)}
        jobs={this.state.jobs}
        />



      </div>

    );
  }
}

export default App;


