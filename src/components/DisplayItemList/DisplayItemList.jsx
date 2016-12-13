import React, { Component } from 'react';
import DisplayItem from '../DisplayItem/DisplayItem.jsx';
import './DisplayItemList.css';

class DisplayItemList extends Component {
showCollection(collection) {
    return collection.map((job,index) =>
      <article
        className = "border"
        key={index}
        onClick={()=>this.props.changeSelection(index)}>
        <DisplayItem
          name={job.name}
          title={job.title}
          descripition={job.descripition}
          url={job.url}
          contact={job.contact}
          phone={job.phone}
          deletePost={this.props.deletePost}
        />
      </article>
  );
}
  render(){
    return(
      <div className="list-container" >
      {this.showCollection(this.props.jobs)}
      </div>
    )
  }
}


export default DisplayItemList;
            // {this.showCollection(this.props.listArray)}
