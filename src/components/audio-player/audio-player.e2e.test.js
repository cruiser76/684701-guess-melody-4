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
        isLoading={false}
        onPlayButtonClick={handlePlayButtonClick}
      >
        <audio />
      </AudioPlayer>
  );

  const btnPlay = screen.find(`.track__button`);
  expect(btnPlay).toHaveLength(1);

  btnPlay.simulate(`click`);
  expect(handlePlayButtonClick).toHaveBeenCalledTimes(1);
});
