// React
import React from 'react';

// Styles
import { Page } from './Styles';

// Components
import Header from '../header/Header';
import Signup from '../../auth/sign-up/Signup';

interface Props {}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header />

      <Page>{children}</Page>

      <Signup active={true} />
    </>
  );
};

export default Layout;
