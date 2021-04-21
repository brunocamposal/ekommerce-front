import GlobalStyles from './shared/styles/global';

import { Routes } from './routes';
import CardOrder from './domains/my-orders/components/CardOrder'

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Routes />
    </>
  );
};

export default App;
