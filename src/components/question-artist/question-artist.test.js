import React from 'react';
import renderer from 'react-test-renderer';

import QuestionArtist from './question-artist.jsx';

const questions = {
  type: `artist`,
  track: {
    src: `https://upload.wikimedia.org/wikipedia/commons/6/66/Bach_-_cantata_140._4._chorale.ogg`,
    artist: `MIT Concert Choir`
  },
  answers: [{
    picture: `https://api.adorable.io/avatars/128/0`,
    artist: `MIT Concert Choir`,
  }, {
    picture: `https://api.adorable.io/avatars/128/1`,
    artist: `er tert ert ert `,
  }, {
    picture: `https://api.adorable.io/avatars/128/2`,
    artist: `er wrt ertewrt dfg`,
  }]
};


it(`QuestionArtist sould render`, () => {
  const tree = renderer
    .create((
      <QuestionArtist
        questions={questions}
        onAnswer={() => {}}
        userErrors={3}
      />), {
      createNodeMock: () => {
        return {};
      }
    }).toJSON();

  expect(tree).toMatchSnapshot();
});
