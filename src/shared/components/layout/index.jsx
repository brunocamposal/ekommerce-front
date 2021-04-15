import Navbar from '../menu/Navbar';

import { Container, Content } from './styles';

const Layout = ({ children }) => {
  return (
    <Container>
      <Navbar />
      <Content>{children}</Content>
    </Container>
  );
};

export default Layout;
