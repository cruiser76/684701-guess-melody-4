import React from 'react';
import PropTypes from 'prop-types';

import WelcomeScreen from './../welcome-screen/welcome-screen.jsx';

const onWelcomeButtonHandler = () => {
  return;
};

const App = (props) => {

  const {errorCount} = props;

  return <
    WelcomeScreen
    errorCount={errorCount}
    onWelcomeButtonClick={onWelcomeButtonHandler}
  />;
};

App.propTypes = {
  errorCount: PropTypes.number.isRequired,
};

export default App;
