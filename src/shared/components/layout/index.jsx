import Navbar from '../menu/navbar/Navbar';

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
