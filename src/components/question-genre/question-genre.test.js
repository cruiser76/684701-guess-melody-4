import React from 'react';
import renderer from 'react-test-renderer';
import QuestionGenre from './question-genre.jsx';

const questions = {
  type: `genre`,
  genre: `disco`,
  answers: [{
    src: `https://upload.wikimedia.org/wikipedia/commons/6/66/Bach_-_cantata_140._4._chorale.ogg`,
    genre: `rock`,
  }, {
    src: `https://upload.wikimedia.org/wikipedia/commons/6/66/Bach_-_cantata_140._4._chorale.ogg`,
    genre: `disco`,
  }, {
    src: `https://upload.wikimedia.org/wikipedia/commons/6/66/Bach_-_cantata_140._4._chorale.ogg`,
    genre: `rock`,
  }, {
    src: `https://upload.wikimedia.org/wikipedia/commons/6/66/Bach_-_cantata_140._4._chorale.ogg`,
    genre: `disco`
  }]
};

it(`QuestionGenre sould render`, () => {
  const tree = renderer
    .create(
        <QuestionGenre
          questions={questions}
          onAnswer={() => {}}
        />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
