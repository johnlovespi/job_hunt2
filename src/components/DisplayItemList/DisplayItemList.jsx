import React, { Component } from 'react';
import DisplayItem from '../DisplayItem/DisplayItem.jsx';


class DisplayItemList extends Component {
  showCollection(collection) {

    return collection.map((jobs,index) =>
     <article className = "border"
        key={index} onClick={()=>this.props.changeSelection(index)}>
          <DisplayItem
            key={jobs.index}
            name={jobs.name}
            title={jobs.title}
            descripition={jobs.descripition}
            url={jobs.url}
            contact={jobs.contact}
            phone={jobs.phone}
          />
    </article>
  );

}
  componentWillMount() {
    this.props.getAllJobs();
  }

  render(){
    return(
          <div className="list-container" >
            {this.showCollection}
          </div>

      )
  }
}


export default DisplayItemList;
