import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class WizardOne extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      address: '',
      city: '',
      state: '',
      zip: ''
    };
  }

  handleChange(key, value) {
    this.setState({
      [key]: value
    });
  }

  render() {
    const { name, address, city, state, zip } = this.state;

    return (
      <div>
        <h1>Wizard One</h1>
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
          <Link to={'/wizard/two'}>
            <button>Next Page</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default WizardOne;
