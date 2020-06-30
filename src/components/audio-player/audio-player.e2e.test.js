import React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import AudioPlayer from './audio-player.jsx';

configure({adapter: new Adapter()});

it(`Click by Play button toggle className`, () => {
  const handlePlayButtonClick = jest.fn();
  jest.spyOn(window.HTMLMediaElement.prototype, `pause`)
    .mockImplementation(() => {});
  const screen = mount(
      <AudioPlayer
        isPlaying={false}
        src={``}
        onPlayButtonClick={handlePlayButtonClick}
      />
  );

  const btnPlay = screen.find(`.track__button`);
  expect(btnPlay.hasClass(`track__button--play`)).toBe(true);
  btnPlay.props().onClick();
  // btnPlay.simulate(`click`);
  expect(btnPlay.hasClass(`track__button--play`)).toBe(true);


  // expect(handlePlayButtonClick).toHaveBeenCalledTimes(1);

  // const btnPause = screen.find(`.track__button`);
  // btnPlay.props().onClick();
  // btnPlay.simulate(`click`);
  // expect(btnPlay.hasClass(`track__button--play`)).toBe(true);
  // expect(handlePlayButtonClick).toHaveBeenCalledTimes(1);
});
