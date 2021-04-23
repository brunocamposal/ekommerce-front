import GlobalStyles from './shared/styles/global';

import { Routes } from './routes';
import { MyOrdersPage } from './domains/my-orders/pages/MyOrders'

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Routes />
      {/* <MyOrdersPage /> */}
    </>
  );
};

export default App;
