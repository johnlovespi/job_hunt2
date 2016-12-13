import React, { Component } from 'react';

//import DisplayApiItem from './DisplayApiItem.css'

const DisplayApiItem = props =>(


  <div className="box2">
    <h4>jobtitle:{props.jobtitle}</h4>
    <h4>company:{props.company}</h4>
    <h4>city:{props.city}</h4>
    <h4>snippet:{props.snippet}</h4>
    <h4>{props.formattedRelativeTime}</h4>
    <h4><a herf="">link:{props.url}</a></h4>

</div>

)

export default DisplayApiItem;
