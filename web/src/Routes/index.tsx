import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Landing from '../pages/Landing';
import OrphanagesMap from '../pages/OrphanagesMap';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Landing} exact />
        <Route path="/App" component={OrphanagesMap} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
