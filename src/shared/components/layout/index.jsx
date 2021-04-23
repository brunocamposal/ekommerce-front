import Navbar from '../menu/Navbar';

import { Container, Content } from './styled';

const Layout = ({ children }) => {
  return (
    <Container>
      <Navbar />
      <Content>{children}</Content>
    </Container>
  );
};

export default Layout;
