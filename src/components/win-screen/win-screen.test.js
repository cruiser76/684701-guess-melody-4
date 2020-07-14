import React from 'react';
import renderer from 'react-test-renderer';

import WinScreen from './win-screen.jsx';

it(`Win-screen render correctly`, () => {
  const tree = renderer
    .create(
        <WinScreen
          onReplayBtnClick={() => {}}
          questionsCount={4}
          errorsCount={1}
        />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
