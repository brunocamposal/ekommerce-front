import React from 'react';

import Menu from '../menu';

import { Container, Content } from './styles';

const Layout = ({ children }) => {
  return (
    <Container>
      <Menu />
      <Content>{children}</Content>
    </Container>
  );
};

export default Layout;
