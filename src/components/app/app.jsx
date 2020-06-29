import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import {GameType} from './../../const.js';
import WelcomeScreen from './../welcome-screen/welcome-screen.jsx';
import QuestionArtist from './../question-artist/question-artist.jsx';
import QuestionGenre from './../question-genre/question-genre.jsx';

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      step: -1
    };
  }

  _renderGameScreen() {
    const {errorCount, questions} = this.props;
    const {step} = this.state;
    const question = questions[step];

    if (step === -1 || step >= questions.length) {
      return (
        <WelcomeScreen
          errorCount={errorCount}
          onWelcomeButtonClick={() => this.setState({step: 0})}
        />
      );
    }

    if (question) {
      switch (question.type) {
        case GameType.ARTIST:
          return (
            <QuestionArtist
              questions={question}
              onAnswer={() => {
                this.setState((prevState) => ({step: prevState.step + 1}));
              }}
            />
          );
        case GameType.GENRE:
          return (
            <QuestionGenre
              questions={question}
              onAnswer={() => {
                this.setState((prevState) => ({step: prevState.step + 1}));
              }}
            />
          );
      }
    }
    return null;
  }

  render() {
    const {questions} = this.props;

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
            />
          </Route>
          <Route exact path="/dev-genre">
            <QuestionGenre
              questions={questions[1]}
              onAnswer={() => {}}
            />
          </Route>
        </Switch>
      </BrowserRouter>);

  }
}

App.propTypes = {
  errorCount: PropTypes.number.isRequired,
  questions: PropTypes.array.isRequired
};

export default App;
