import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Wizard extends Component {
  render() {
    return (
      <div>
        <h1>Wizard</h1>
        <h3>Add New Listing</h3>
        <Link to={'/'}>
          <button>Cancel</button>
        </Link>
        <div>
          <label>
            Property Name
            <input type="text" />
          </label>
          <label>
            Address
            <input type="text" />
          </label>
          <label>
            City
            <input type="text" />
          </label>
          <label>
            State
            <input type="text" />
          </label>
          <label>
            Zip
            <input type="text" />
          </label>
        </div>
        <button>Complete</button>
      </div>
    );
  }
}

export default Wizard;
