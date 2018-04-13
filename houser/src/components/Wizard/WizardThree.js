import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';

class Wizard extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      address: '',
      city: '',
      state: '',
      zip: '',
      mortgage: '',
      desiredRent: '',
      redirect: false
    };

    this.addProperty = this.addProperty.bind(this);
    // this.calculateRecommendedRent = this.calculateRecommendedRent.bind(this);
  }

  handleChange(key, value) {
    this.setState({
      [key]: value
    });
  }

  addProperty() {
    const {
      name,
      address,
      city,
      state,
      zip,
      mortgage,
      desiredRent
    } = this.state;
    axios
      .post('/api/house', {
        name,
        address,
        city,
        state,
        zip,
        mortgage,
        desiredRent
      })
      .then(() => {
        this.setState({
          name: '',
          address: '',
          city: '',
          state: '',
          zip: '',
          mortgage: '',
          desiredRent: '',
          redirect: true
        });
      });
  }

  // calculateRecommendedRent() {
  //   const {  }
  // }

  render() {
    const { mortgage, desiredRent, redirect } = this.state;

    if (redirect) {
      return <Redirect to="/somewhere" />;
    }

    return (
      <div>
        <h1>Wizard Three</h1>
        <h3>Add New Listing</h3>
        <Link to={'/'}>
          <button>Cancel</button>
        </Link>
        <div>
          <label>
            Monthly Mortgage Amount
            <input
              type="text"
              value={mortgage}
              onChange={(e) => this.handleChange('name', e.target.value)}
            />
          </label>
          <label>
            Desired Monthly Rent
            <input
              type="text"
              value={desiredRent}
              onChange={(e) => this.handleChange('address', e.target.value)}
            />
          </label>
          <Link to={'/wizard/two'}>
            <button>Previous Page</button>
          </Link>
        </div>
        <button onClick={this.addProperty}>Complete</button>
      </div>
    );
  }
}

export default Wizard;
