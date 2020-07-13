import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import QuestionArtist from './question-artist.jsx';

configure({adapter: new Adapter()});

const mock = {
  questions: {
    type: `artist`,
    track: {
      src: `1`,
      artist: `2`
    },
    answers: [{
      picture: `1`,
      artist: `11`,
    }, {
      picture: `2`,
      artist: `22`,
    }, {
      picture: `3`,
      artist: `33`,
    }]
  }
};


const mockEvent = {
  preventDefault() {}
};

it(`click on user answer sould pass to the callback data-object from which this answer was created`, () => {
  const {questions} = mock;
  const onAnswer = jest.fn();
  const userAnswer = {
    artist: `11`,
    picture: `1`
  };

  const screen = shallow(<QuestionArtist
    onAnswer={onAnswer}
    questions={questions}
    userErrors={3}
    renderPlayer={()=> {}}
  />);

  const answerOne = screen.find(`input`).at(0);

  answerOne.simulate(`change`, mockEvent);

  expect(onAnswer).toHaveBeenCalledTimes(1);

  expect(onAnswer.mock.calls[0][0]).toMatchObject(questions);
  expect(onAnswer.mock.calls[0][1]).toMatchObject(userAnswer);

});
