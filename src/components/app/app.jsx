import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';

import {incrementStep, incrementErrors, checkNewGame} from './../../redux/actions.js';
import {GameType} from './../../const.js';
import WelcomeScreen from './../welcome-screen/welcome-screen.jsx';
import QuestionArtist from './../question-artist/question-artist.jsx';
import QuestionGenre from './../question-genre/question-genre.jsx';

class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  _renderGameScreen() {
    const {errorCount, questions, step, onAnswer, onWelcomeButtonClick, userErrors} = this.props;
    const question = questions[step];

    if (step === -1) {
      return (
        <WelcomeScreen
          errorCount={errorCount}
          onWelcomeButtonClick={onWelcomeButtonClick}
        />
      );
    }

    if (question) {
      switch (question.type) {
        case GameType.ARTIST:
          return (
            <QuestionArtist
              questions={question}
              onAnswer={onAnswer}
              userErrors={userErrors}
            />
          );
        case GameType.GENRE:
          return (
            <QuestionGenre
              questions={question}
              onAnswer={onAnswer}
              userErrors={userErrors}
            />
          );
      }
    }
    return null;
  }

  render() {
    const {questions, userErrors} = this.props;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderGameScreen()}
          </Route>
          <Route exact path="/dev-artist">
            <QuestionArtist
              questions={questions[0]}
              onAnswer={() => {}}
              userErrors={userErrors}
            />
          </Route>
          <Route exact path="/dev-genre">
            <QuestionGenre
              questions={questions[1]}
              onAnswer={() => {}}
              userErrors={userErrors}
            />
          </Route>
        </Switch>
      </BrowserRouter>);
  }
}

const mapStateToProps = (state) => {
  return {
    step: state.step,
    questions: state.questions,
    errorCount: state.maxErrors,
    userErrors: state.errors
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAnswer: (question, answer) => {
      dispatch(incrementStep());
      dispatch(incrementErrors(question, answer));
      dispatch(checkNewGame());
    },
    onWelcomeButtonClick: () => dispatch(incrementStep())
  };
};

App.propTypes = {
  errorCount: PropTypes.number.isRequired,
  questions: PropTypes.array.isRequired,
  step: PropTypes.number.isRequired,
  onAnswer: PropTypes.func.isRequired,
  onWelcomeButtonClick: PropTypes.func.isRequired,
  userErrors: PropTypes.number.isRequired
};

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
