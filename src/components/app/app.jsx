import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import WelcomeScreen from './../welcome-screen/welcome-screen.jsx';
import QuestionArtist from './../question-artist/question-artist.jsx';
import QuestionGenre from './../question-genre/question-genre.jsx';

const onWelcomeButtonHandler = () => {
  return;
};

const App = (props) => {

  const {errorCount} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <WelcomeScreen
            errorCount={errorCount}
            onWelcomeButtonClick={onWelcomeButtonHandler}
          />
        </Route>
        <Route exact path="/dev-artist">
          <QuestionArtist />
        </Route>
        <Route exact path="/dev-genre">
          <QuestionGenre />
        </Route>
      </Switch>
    </BrowserRouter>);
};

App.propTypes = {
  errorCount: PropTypes.number.isRequired,
};

export default App;
