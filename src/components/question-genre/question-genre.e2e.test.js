import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import QuestionGenre from './question-genre.jsx';

configure({adapter: new Adapter()});

const mock = {
  questions: {
    type: `genre`,
    genre: `disco`,
    answers: [{
      src: `1`,
      genre: `rock`,
    }, {
      src: `2`,
      genre: `disco`,
    }, {
      src: `3`,
      genre: `rock`,
    }, {
      src: `4`,
      genre: `disco`
    }]
  }
};

it(`clicking on the artist button will trigger the event handler and pass the question and answer as parameters`, () => {
  const {questions} = mock;
  const onAnswer = jest.fn((...args) => [...args]);
  const userAnswer = [false, false, true, false];

  const screen = shallow(
      <QuestionGenre
        questions={questions}
        onAnswer={onAnswer}
      />
  );

  const form = screen.find(`form`);
  const inputThree = screen.find(`input`).at(2);

  inputThree.simulate(`change`, {target: {checked: true}});
  form.simulate(`submit`, {preventDefault() {}});

  expect(onAnswer).toHaveBeenCalledTimes(1);

  expect(onAnswer.mock.calls[0][0]).toMatchObject(questions);
  expect(onAnswer.mock.calls[0][1]).toMatchObject(userAnswer);

  expect(
      screen.find(`input`).map((it) => it.prop(`checked`))
  ).toEqual(userAnswer);
});
