import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import WJMain from './views/main';

function App() {
  return (
    <BrowserRouter>
      <WJMain />
    </BrowserRouter>
  );
}

export default React.memo(App);
