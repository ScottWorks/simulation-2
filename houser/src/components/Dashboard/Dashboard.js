import React, { Component } from 'react';
import House from '../../components/House/House';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      houseArray: []
    };

    this.getProperties = this.getProperties.bind(this);
    this.deleteProperty = this.deleteProperty.bind(this);
  }

  componentDidMount() {
    this.getProperties();
  }

  getProperties() {
    axios.get('/api/houses').then((nodeRes) => {
      this.setState({
        houseArray: nodeRes.data
      });
    });
  }

  deleteProperty(id) {
    axios.delete('/api/houses/' + id).then((nodeRes) => {
      this.getProperties();
    });
  }

  render() {
    const { houseArray } = this.state;
    const houseList = houseArray.map((elem, idx) => {
      return (
        <div key={idx}>
          <House
            id={elem.id}
            name={elem.name}
            address={elem.address}
            city={elem.city}
            state={elem.state}
            zip={elem.zip}
            deleteProperty={this.deleteProperty}
          />
        </div>
      );
    });

    return (
      <div>
        <div>
          <h1>Dashboard</h1>
          <Link to={'/wizard'}>
            <button>Add New Property</button>
          </Link>
          <h3>Home Listings</h3>
        </div>
        {houseList}
      </div>
    );
  }
}

export default Dashboard;
