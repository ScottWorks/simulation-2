import React, { Component } from 'react';
import House from '../../components/House/House';
import { Link } from 'react-router-dom';

class Dashboard extends Component {
  render() {
    return (
      <div>
        <div>
          <h1>Dashboard</h1>
          <Link to={'/wizard'}>
            <button>Add New Property</button>
          </Link>
          <h3>Home Listings</h3>
        </div>
        <div>
          <p>Owner Name: </p>
          <p>Address: </p>
          <p>City: </p>
          <p>State: </p>
          <p>Zip: </p>
        </div>
      </div>
    );
  }
}

export default Dashboard;
