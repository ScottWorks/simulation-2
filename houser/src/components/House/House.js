import React from 'react';

function House(props) {
  return (
    <div>
      <p>Property Owner: {props.name}</p>
      <p>Address: {props.address}</p>
      <p>City: {props.city}</p>
      <p>State: {props.state}</p>
      <p>Zip: {props.zip}</p>
      <button onClick={() => props.deleteProperty(props.id)}>Delete</button>
    </div>
  );
}

export default House;
