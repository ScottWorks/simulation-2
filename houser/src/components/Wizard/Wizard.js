import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
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

    return <div />;
  }
}

export default Wizard;
