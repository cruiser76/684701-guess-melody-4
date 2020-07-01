import React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import AudioPlayer from './audio-player.jsx';

configure({adapter: new Adapter()});

it(`Click by Play button toggle className`, () => {
  const handlePlayButtonClick = jest.fn();
  const screen = mount(
      <AudioPlayer
        isPlaying={true}
        src={``}
        onPlayButtonClick={handlePlayButtonClick}
      />
  );
  window.HTMLMediaElement.prototype.play = () => {};
  window.HTMLMediaElement.prototype.pause = () => {};

  const btnPlay = screen.find(`.track__button`);
  expect(btnPlay).toHaveLength(1);

  btnPlay.props().onClick();
  btnPlay.simulate(`click`);
  expect(handlePlayButtonClick).toHaveBeenCalledTimes(1);
  expect(screen.state().isPlaying).toBe(false);
  btnPlay.simulate(`click`);

  const btnPause = screen.find(`.track__button`);
  btnPause.props().onClick();
  expect(screen.state().isPlaying).toBe(true);
  expect(handlePlayButtonClick).toHaveBeenCalledTimes(2);
});
