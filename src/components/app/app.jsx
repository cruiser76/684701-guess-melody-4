import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';

import {incrementStep, incrementErrors, resetGame} from './../../redux/actions.js';
import {GameType} from './../../const.js';
import WelcomeScreen from './../welcome-screen/welcome-screen.jsx';
import QuestionArtist from './../question-artist/question-artist.jsx';
import QuestionGenre from './../question-genre/question-genre.jsx';
import withActivePlayer from './../../hocs/with-active-player/with-active-player.jsx';
import withUserAnswer from './../../hocs/with-user-answer/with-user-answer.jsx';
import WinScreen from './../win-screen/win-screen.jsx';
import GameOverScreen from '../game-over-screen/game-over-screen.jsx';

const ArtistQuestionScreenWrapped = withActivePlayer(QuestionArtist);
const GenreQuestionScreenWrapped = withActivePlayer(withUserAnswer(QuestionGenre));

class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  _renderGameScreen() {
    const {errorCount, questions, step, onAnswer, onWelcomeButtonClick, userErrors, onReplayBtnClick} = this.props;
    const question = questions[step];

    if (step === -1) {
      return (
        <WelcomeScreen
          errorCount={errorCount}
          onWelcomeButtonClick={onWelcomeButtonClick}
        />
      );
    }

    if (question && (userErrors < errorCount)) {
      switch (question.type) {
        case GameType.ARTIST:
          return (
            <ArtistQuestionScreenWrapped
              questions={question}
              onAnswer={onAnswer}
              userErrors={userErrors}
            />
          );
        case GameType.GENRE:
          return (
            <GenreQuestionScreenWrapped
              questions={question}
              onAnswer={onAnswer}
              userErrors={userErrors}
            />
          );
      }
    } else if ((questions.length <= step) && (userErrors < errorCount)) {
      return (
        <WinScreen
          questionsCount={questions.length}
          errorsCount={userErrors}
          onReplayBtnClick={onReplayBtnClick}
        />
      );
    } else if (userErrors >= errorCount) {
      return (
        <GameOverScreen
          onReplayBtnClick={onReplayBtnClick}
        />
      );
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
            <ArtistQuestionScreenWrapped
              questions={questions[0]}
              onAnswer={() => {}}
              userErrors={userErrors}
            />
          </Route>
          <Route exact path="/dev-genre">
            <GenreQuestionScreenWrapped
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
      dispatch(incrementErrors(question, answer));
      dispatch(incrementStep());
    },
    onWelcomeButtonClick: () => dispatch(incrementStep()),
    onReplayBtnClick: () => dispatch(resetGame())
  };
};

App.propTypes = {
  errorCount: PropTypes.number.isRequired,
  questions: PropTypes.array.isRequired,
  step: PropTypes.number.isRequired,
  onAnswer: PropTypes.func.isRequired,
  onWelcomeButtonClick: PropTypes.func.isRequired,
  userErrors: PropTypes.number.isRequired,
  onReplayBtnClick: PropTypes.func.isRequired,
};

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
