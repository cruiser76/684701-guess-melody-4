import React from 'react';
import renderer from 'react-test-renderer';
import WelcomeScreen from './welcome-screen';

const errorCount = 3;

const onWelcomeButtonClick = () => {};

it(`welcome-scrin should render errorCount`, () => {
  const tree = renderer
    .create(<WelcomeScreen
      errorCount={errorCount}
      onWelcomeButtonClick = {onWelcomeButtonClick}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
