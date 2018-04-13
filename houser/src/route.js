import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import wizardRoutes from './components/Wizard/wizardRoutes';
// import WizardTwo from './components/Wizard/WizardTwo';
// import WizardThree from './components/Wizard/WizardThree';

export default (
  <Switch>
    <Route path={'/wizard'} component={wizardRoutes} />
    <Route path={'/'} component={Dashboard} />
  </Switch>
);
