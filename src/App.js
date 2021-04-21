import GlobalStyles from './shared/styles/global';

import { Routes } from './routes';
import SimpleModal from './domains/my-orders/components/modalOrder/ModalOrder'

const App = () => {
  return (
    <>
      <GlobalStyles />
      {/* <Routes /> */}
      <SimpleModal />
    </>
  );
};

export default App;
