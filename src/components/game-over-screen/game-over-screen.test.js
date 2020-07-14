import React from 'react';
import renderer from 'react-test-renderer';

import GameOverScreen from './game-over-screen.jsx';

it(`Game-over-screen render correctly`, () => {
  const tree = renderer
    .create(
        <GameOverScreen
          onReplayBtnClick={() => {}}
        />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
