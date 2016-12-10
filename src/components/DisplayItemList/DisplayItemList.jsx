import React, { Component} 'react';
import DisplayItemList from './DisplayItemList/DisplayItemList.css';
import DisplayItem from './DisplayItem/DisplayItem.jsx';


class DisplayItemList extends Component {

  componentWillMount() {
    this.props.getAllJobs();
  }

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

  render(){
    return(
          <div className="list-container" >
            {this.showCollection(this.props.collection)}
          </div>

      )
  }

}


export default DisplayItemList;
