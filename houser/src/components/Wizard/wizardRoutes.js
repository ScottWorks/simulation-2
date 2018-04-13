import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import WizardOne from './WizardOne';
import WizardTwo from './WizardTwo';
import WizardThree from './WizardThree';

class WizardRoutes extends Component {
  render() {
    return (
      <Switch>
        <Route path={'/wizard/three'} component={WizardThree} />
        <Route path={'/wizard/two'} component={WizardTwo} />
        <Route path={'/wizard/one'} component={WizardOne} />
      </Switch>
    );
  }
}

export default WizardRoutes;
