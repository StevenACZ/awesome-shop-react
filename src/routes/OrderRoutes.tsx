// React
import React from 'react';

// React Router
import { Route, Switch } from 'react-router';

// Components
import Orders from '../pages/Orders';
import OrderDetail from '../pages/OrderDetail';
import PageNotFound from '../pages/PageNotFound';

interface Props {}

const OrderRoutes: React.FC<Props> = () => {
  return (
    <Switch>
      <Route path="/orders/my-orders/:id" component={OrderDetail} />
      <Route path="/orders/my-orders" component={Orders} />
      <Route path="*" component={PageNotFound} />
    </Switch>
  );
};

export default OrderRoutes;
