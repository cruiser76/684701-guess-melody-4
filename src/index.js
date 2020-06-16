import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app/app.jsx';

const init = () => {
  const Settings = {
    ERROR_COUNT: 3
  };

  ReactDOM.render(
      <App
        errorCount = {Settings.ERROR_COUNT}
      />,
      document.querySelector(`#root`)
  );
};

init();
