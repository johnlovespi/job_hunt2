import React, { Component } from 'react';

import DisplayApiItem from '../DisplayApiItem/DisplayApiItem.jsx';


class DisplayApiList extends Component {

render(){
    console.log('*********', this.props.apilist);
    const apistuff = this.props.apilist.map((apil,index) =>
        <DisplayApiItem
            jobtitle={apil.jobtitle}
            company={apil.company}
            city={apil.city}
            snippiet={apil.snippiet}
            formattedRelativeTime={apil.formattedRelativeTime}
            url={apil.url}
            key={index}
          />
    )

    return(
      <div className="list-cont">
       {apistuff}
      </div>
      );

   }

}
export default DisplayApiList;


//   componentWillMount() {
//     this.props.fetchJobs();
// }
          // <button onClick={this.props.searchJobs}></button>
          // <input
            // type = "hidden"
            // placeholder= "searchJobs"
            // onChange={this.props.trackSearch}/>
