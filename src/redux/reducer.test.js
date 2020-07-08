import reducer from './reducer.js';
import questions from './../components/mocks/questions.js';
import {ActionType} from './actionType.js';

it(`Reducer without add parameters return initial state`, () => {
  expect(reducer(undefined, {})).toEqual({
    errors: 0,
    maxErrors: 3,
    step: -1,
    questions
  });
});

it(`Reducer sould inc curr step`, () => {
  expect(reducer({
    step: -1,
    errors: 0
  }, {
    type: ActionType.INCREMENT_STEP,
    payload: 1
  })).toEqual({
    step: 0,
    errors: 0
  });

  expect(reducer({
    step: -1,
    errors: 0
  }, {
    type: ActionType.INCREMENT_STEP,
    payload: 0
  })).toEqual({
    step: -1,
    errors: 0
  });
});

it(`Reducer sould inc error`, () => {
  expect(reducer({
    step: 0,
    errors: 0
  }, {
    type: ActionType.INCREMENT_ERRORS,
    payload: 1
  })).toEqual({
    step: 0,
    errors: 1
  });

  expect(reducer({
    step: 1,
    errors: 1
  }, {
    type: ActionType.INCREMENT_ERRORS,
    payload: 1
  })).toEqual({
    step: 1,
    errors: 2
  });
});
