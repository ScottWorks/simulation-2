import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class WizardOne extends Component {
  constructor() {
    super();
    this.state = {
      img: ''
    };
  }

  handleChange(key, value) {
    this.setState({
      [key]: value
    });
  }

  render() {
    const { img } = this.state;

    return (
      <div>
        <h1>Wizard Two</h1>
        <h3>Add New Listing</h3>
        <Link to={'/'}>
          <button>Cancel</button>
        </Link>
        <div>
          <label>
            Image URL
            <input
              type="text"
              value={img}
              onChange={(e) => this.handleChange('img', e.target.value)}
            />
          </label>
          <Link to={'/wizard/one'}>
            <button>Previous Page</button>
          </Link>
          <Link to={'/wizard/three'}>
            <button>Next Page</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default WizardOne;
