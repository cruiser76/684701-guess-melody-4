import React from 'react';
import renderer from 'react-test-renderer';

import {App} from './app.jsx';

const errorCount = 3;

const questions = [
  {
    type: `artist`,
    track: {
      src: `https://upload.wikimedia.org/wikipedia/commons/6/66/Bach_-_cantata_140._4._chorale.ogg`,
      artist: `MIT Concert Choir`
    },
    answers: [{
      picture: ``,
      artist: `MIT Concert Choir`,
    }, {
      picture: ``,
      artist: `er tert ert ert `,
    }, {
      picture: ``,
      artist: `er wrt ertewrt dfg`,
    }]
  },
  {
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
  }
];

it(`App should render App`, () => {
  const tree = renderer
    .create(
        <App
          errorCount={errorCount}
          questions={questions}
          userErrors={0}
          onWelcomeButtonClick={()=>{}}
          onAnswer={()=>{}}
          step={-1}
        />, {
          createNodeMock: () => {
            return {};
          }
        }).toJSON();

  expect(tree).toMatchSnapshot();
});
