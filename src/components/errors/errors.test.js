import React from 'react';
import renderer from 'react-test-renderer';

import Errors from './errors.jsx';

const userErrors = 3;

it(`Errors renders correctly`, () => {
  const tree = renderer
    .create(
        <Errors
          userErrors={userErrors}
        />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
