// React
import React from 'react';

// Styles
import { Page } from './Styles';

// Components
import Header from '../header/Header';

interface Props {}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header />

      <Page>{children}</Page>
    </>
  );
};

export default Layout;
