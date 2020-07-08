import {ActionType} from './actionType.js';
import {GameType} from './../const.js';

export function incrementStep() {
  return {
    type: ActionType.INCREMENT_STEP,
    payload: 1
  };
}

const isArtistAnswerCorrect = (question, userAnswer) => {
  return userAnswer.artist === question.track.artist;
};

const isGenreAnswerCorrect = (question, userAnswer) => {
  return userAnswer.every((it, i) => {
    return it === (question.answers[i].genre === question.genre);
  });
};

export function incrementErrors(question, answer) {
  let isAnswerCorrect = false;

  switch (question.type) {
    case GameType.ARTIST:
      isAnswerCorrect = isArtistAnswerCorrect(question, answer);
      break;
    case GameType.GENRE:
      isAnswerCorrect = isGenreAnswerCorrect(question, answer);
      break;
  }

  return {
    type: ActionType.INCREMENT_ERRORS,
    payload: isAnswerCorrect ? 0 : 1
  };
}

export function checkNewGame() {
  return {
    type: ActionType.CHECK_NEW_GAME
  };
}
