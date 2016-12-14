import React, { Component } from 'react';
import './DisplayApiList.css';

import DisplayApiItem from '../DisplayApiItem/DisplayApiItem.jsx';


class DisplayApiList extends Component {
  showApi() {
    console.log('*********', this.props.apilist);
      return this.props.apilist.map((apil,index) =>

        <DisplayApiList
            jobtitle={apil.jobtitle}
            company={apil.company}
            city={apil.city}
            snippiet={apil.snippiet}
            formattedRelativeTime={apil.formattedRelativeTime}
            url={apil.url}
            key={index}
          />

   );
}
render(){
    return(
      <div className="list-cont">
       {this.showApi()}
      </div>
      );

   }

}
export default DisplayApiList;
