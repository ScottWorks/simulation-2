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
      redirect: false
    };

    this.addProperty = this.addProperty.bind(this);
  }

  addProperty() {
    const { name, address, city, state, zip } = this.state;
    axios
      .post('/api/house', {
        name,
        address,
        city,
        state,
        zip
      })
      .then(() => {
        this.setState({
          name: '',
          address: '',
          city: '',
          state: '',
          zip: '',
          redirect: true
        });
      });
  }

  handleChange(key, value) {
    this.setState({
      [key]: value
    });
  }

  render() {
    const { name, address, city, state, zip, redirect } = this.state;

    if (redirect) {
      return <Redirect to="/somewhere" />;
    }

    return (
      <div>
        <h1>Wizard</h1>
        <h3>Add New Listing</h3>
        <Link to={'/'}>
          <button>Cancel</button>
        </Link>
        <div>
          <label>
            Property Owner
            <input
              type="text"
              value={name}
              onChange={(e) => this.handleChange('name', e.target.value)}
            />
          </label>
          <label>
            Address
            <input
              type="text"
              value={address}
              onChange={(e) => this.handleChange('address', e.target.value)}
            />
          </label>
          <label>
            City
            <input
              type="text"
              value={city}
              onChange={(e) => this.handleChange('city', e.target.value)}
            />
          </label>
          <label>
            State
            <input
              type="text"
              value={state}
              onChange={(e) => this.handleChange('state', e.target.value)}
            />
          </label>
          <label>
            Zip
            <input
              type="text"
              value={zip}
              onChange={(e) => this.handleChange('zip', e.target.value)}
            />
          </label>
        </div>
        <button onClick={this.addProperty}>Complete</button>
      </div>
    );
  }
}

export default Wizard;
