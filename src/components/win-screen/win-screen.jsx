import React from 'react';
import PropTypes from 'prop-types';

const WinScreen = (props) => {

  const {questionsCount, errorsCount, onReplayBtnClick} = props;
  const correctlyQuestionsCount = questionsCount - errorsCount;

  return (
    <section className="result">
      <div className="result__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83" /></div>
      <h2 className="result__title">Вы настоящий меломан!</h2>
      <p className="result__total">Вы ответили правильно на {correctlyQuestionsCount} вопросов и совершили {errorsCount} ошибки</p>
      <button className="replay" type="button"
        onClick={onReplayBtnClick}
      >Сыграть ещё раз</button>
    </section>
  );
};

WinScreen.propTypes = {
  questionsCount: PropTypes.number.isRequired,
  errorsCount: PropTypes.number.isRequired,
  onReplayBtnClick: PropTypes.func.isRequired,
};

export default WinScreen;

