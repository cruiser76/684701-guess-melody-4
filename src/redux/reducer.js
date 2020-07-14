import questions from './../components/mocks/questions.js';
import {ActionType} from './action-type.js';
import {extend} from './../utils.js';

const initialState = {
  errors: 0,
  maxErrors: 3,
  step: -1,
  questions
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ActionType.INCREMENT_STEP:
      return extend(state, {step: state.step + action.payload});
    case ActionType.INCREMENT_ERRORS:
      return extend(state, {errors: state.errors + action.payload});
    case ActionType.RESET_GAME:
      return extend(state, initialState);
    default:
      return state;
  }
}
