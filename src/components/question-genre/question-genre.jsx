import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import AudioPlayer from './../audio-player/audio-player.jsx';

class QuestionGenre extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      answers: [false, false, false, false],
      playerId: 0
    };
  }

  render() {
    const {questions, onAnswer} = this.props;
    const {answers: userAnswers, playerId} = this.state;
    const {genre, answers} = questions;

    return (
      <section className="game game--genre">
        <header className="game__header">
          <a className="game__back" href="#">
            <span className="visually-hidden">Сыграть ещё раз</span>
            <img className="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию" />
          </a>

          <svg xmlns="http://www.w3.org/2000/svg" className="timer" viewBox="0 0 780 780">
            <circle className="timer__line" cx="390" cy="390" r="370"
              style={{filter: `url(#blur)`, transform: `rotate(-90deg) scaleY(-1)`, transformOrigin: `center`}} />
          </svg>

          <div className="game__mistakes">
            <div className="wrong"></div>
            <div className="wrong"></div>
            <div className="wrong"></div>
          </div>
        </header>

        <section className="game__screen">
          <h2 className="game__title">Выберите {genre} треки</h2>
          <form className="game__tracks"
            onSubmit={(evt) => {
              evt.preventDefault();
              onAnswer(questions, this.state.answers);
            }}
          >

            {answers.map((el, i) => {
              const src = answers[i].src;
              return (
                <div className="track" key={`${i} - ${el.genre}`}>
                  <AudioPlayer
                    isPlaying={playerId === i}
                    src={src}
                    onPlayButtonClick={() => {
                      this.setState({playerId: playerId === i ? -1 : i});
                    }}
                  />
                  <div className="game__answer">
                    <input className="game__input visually-hidden" type="checkbox" name="answer" value={`answer-${i}`} id={`answer-${i}`}
                      checked={userAnswers[i]}
                      onChange={(evt) => {
                        const value = evt.target.checked;
                        this.setState({
                          answers: [...userAnswers.slice(0, i), value, ...userAnswers.slice(i + 1)]
                        });
                      }}
                    />
                    <label className="game__check" htmlFor={`answer-${i}`}>Отметить</label>
                  </div>
                </div>
              );
            })}
            <button className="game__submit button" type="submit">Ответить</button>
          </form>
        </section>
      </section>
    );
  }
}

QuestionGenre.propTypes = {
  questions: PropTypes.shape({
    genre: PropTypes.string.isRequired,
    answers: PropTypes.arrayOf(PropTypes.shape({
      src: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired
    })).isRequired
  }).isRequired,
  onAnswer: PropTypes.func.isRequired
};

export default QuestionGenre;
