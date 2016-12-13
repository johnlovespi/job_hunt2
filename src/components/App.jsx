import React, { Component } from 'react';
// import Landp from './Landp/Landp.jsx';
import JobForm from './JobForm/JobForm.jsx';
//import DisplayItem from './DisplayItem/DisplayItem.jsx';
import DisplayItemList from './DisplayItemList/DisplayItemList.jsx';
//import Login from './Login/LoginForm.jsx';
//import Signup from './Signup.jsx';
//import ApiFetch from './ApiFetch/ApiFetch.jsx';
import DisplayApiList from './DisplayApiList/DisplayApiList.jsx';



class App extends Component {
  constructor(){
    super();
    this.state = {
      jobs: [],
      apil: [],
      name: '',
      title: '',
      descripition: '',
      url: '',
      contact:'',
      phone:''
    }
  }

   //  Login:{
   //    username: '',
   //    password: ''
   // },

   //  Signup:{
   //    username: '',
   //    password: ''
   //  }




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

//getting all jobs to post to the page

componentDidMount() {
  this.getAllJobs()
  this.fetchJobs()
  // console.log(this.state.data)
}

getAllJobs() {
fetch(`/db/job_hunt2`)
  .then(r => r.json())
  .then((data) => {
      this.setState({
        jobs: data
      });
      console.log("this is all jobs: ", this.state.jobs);
    })
    .catch(err => console.log(err));
  }


//external api
fetchJobs() {
  console.log('FETCHING')
  fetch(`/api`)
  .then(r => r.json())
  .then((data) => {
    console.log(data)
    this.setState({
      apil: data.results,
    })
    console.log('this are api jobs', this.state.apil);
;
})
  .catch(err => console.log(err));
}


//user login/signUp
// trackLoginForm(){
// }
// trackSignupForm(){
// }

//delete button
deletePost(id) {
fetch(`/db/job_hunt2/${id}`, {
  method: 'delete'
})
  .then(() => {
    let jobs = this.state.jobs.filter((jobs)=> {
      return jobs.id !== id;
    });
    this.setState({ jobs });
  })
    .catch(err => console.log(err));
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

        updateFormName={event => this.updateFormName(event)}

        updateFormTitle={event => this.updateFormTitle(event)}
        updateFormDescription={event => this.updateFormDescription(event)}
        updateFormUrl={event => this.updateFormUrl(event)}
        updateFormContact={event => this.updateFormContact(event)}
        updateFormPhone={event => this.updateFormPhone(event)}
        postJobs={event => this.postJobs(event)}

      />



      <DisplayItemList
        getAllJobs={this.getAllJobs.bind(this)}
        deletePost={this.deletePost.bind(this)}
        jobs={this.state.jobs}
        />

        <DisplayApiList
         fetchJobs={this.fetchJobs.bind(this)}
         apilist={this.state.apil}
         />




  </div>


    );
  }
}

export default App;


