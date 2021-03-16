// React
import React from 'react';

// React Router
import { Route, Switch } from 'react-router';

// Components
import Index from '../pages/Index';
import PageNotFound from '../pages/PageNotFound';
import ProductDetail from '../pages/ProductDetail';
import Products from '../pages/Products';

import BuyRoutes from './BuyRoutes';
import OrderRoutes from './OrderRoutes';
import AdminRoutes from './AdminRoutes';

interface Props {}

const Routes: React.FC<Props> = () => {
  return (
    <Switch>
      <Route path="/buy" component={BuyRoutes} />
      <Route path="/orders" component={OrderRoutes} />
      <Route path="/admin" component={AdminRoutes} />

      <Route path="/products/:id" component={ProductDetail} />
      <Route path="/products" component={Products} />
      <Route exact path="/" component={Index} />

      <Route path="*" component={PageNotFound} />
    </Switch>
  );
};

export default Routes;
