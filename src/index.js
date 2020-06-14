import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app/app.jsx';

const init = () => {
  const settings = {
    errorCount: 3
  };

  ReactDOM.render(
      <App
        errorCount = {settings.errorCount ? settings.errorCount : 1}
      />,
      document.querySelector(`#root`)
  );
};

init();
