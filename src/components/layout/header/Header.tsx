// React
import React from 'react';
import { NavLink } from 'react-router-dom';

// Styles
import { HeaderStyled } from './Styles';

interface Props {}

const Header: React.FC<Props> = () => {
  return (
    <HeaderStyled>
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink to="/products">Products</NavLink>
      <NavLink to="/buy/my-cart">Cart</NavLink>
      <NavLink to="/buy/select-address">Select Address</NavLink>
      <NavLink to="/buy/checkout">Checkout</NavLink>
      <NavLink to="/orders/my-orders">Orders</NavLink>
      <NavLink to="/admin/manage-products">Manage Products</NavLink>
      <NavLink to="/admin/manage-orders">Manage Order</NavLink>
      <NavLink to="/admin/manage-users">Manage Users</NavLink>
    </HeaderStyled>
  );
};

export default Header;
