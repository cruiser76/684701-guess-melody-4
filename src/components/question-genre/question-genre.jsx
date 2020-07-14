import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import Errors from './../errors/errors.jsx';

class QuestionGenre extends PureComponent {

  render() {
    const {questions, onAnswer, userErrors, renderPlayer, userAnswers, onChange} = this.props;
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

          <Errors
            userErrors={userErrors}
          />
        </header>

        <section className="game__screen">
          <h2 className="game__title">Выберите {genre} треки</h2>
          <form className="game__tracks"
            onSubmit={(evt) => {
              evt.preventDefault();
              onAnswer();
            }}
          >

            {answers.map((el, i) => {
              const src = answers[i].src;
              return (
                <div className="track" key={`${i} - ${el.genre}`}>
                  {renderPlayer(src, i)}
                  <div className="game__answer">
                    <input className="game__input visually-hidden" type="checkbox" name="answer" value={`answer-${i}`} id={`answer-${i}`}
                      checked={userAnswers[i]}
                      onChange={(evt) => {
                        const value = evt.target.checked;
                        onChange(i, value);
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
  onAnswer: PropTypes.func.isRequired,
  userErrors: PropTypes.number.isRequired,
  renderPlayer: PropTypes.func.isRequired,
  userAnswers: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired
};

export default QuestionGenre;
