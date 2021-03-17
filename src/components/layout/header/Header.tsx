// React
import React from 'react';

// React Router
import { NavLink } from 'react-router-dom';
import Button from '../../button/Button';

// Styles
import {
  HeaderStyled,
  Logo,
  Search,
  Navbar,
  Links,
  Profile,
  HeaderContainer,
} from './Styles';

interface Props {}

const Header: React.FC<Props> = () => {
  return (
    <HeaderStyled>
      <HeaderContainer>
        <Logo>
          <NavLink to="/">
            <h2>Awesome</h2>
          </NavLink>
        </Logo>

        <Search>
          <label>
            <input type="text" placeholder="Search" />
          </label>
          <Button>Search</Button>
        </Search>

        <Navbar>
          <Links></Links>
          <Profile>
            <Button>Sign in</Button>
            <Button>Sign up</Button>
          </Profile>
        </Navbar>
      </HeaderContainer>
    </HeaderStyled>
  );
};

export default Header;
