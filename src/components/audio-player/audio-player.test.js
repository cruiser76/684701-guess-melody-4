import React from 'react';
import renderer from 'react-test-renderer';

import AudioPlayer from './audio-player.jsx';

const mock = {
  track: {
    src: `https://upload.wikimedia.org/wikipedia/commons/1/14/WAMozartContredanseKV609N2.OGG`
  }
};

it(`AudioPlayer is rendered correctly`, () => {
  const {track} = mock;

  const tree = renderer.create(<AudioPlayer
    isPlaying={false}
    onPlayButtonClick={() => {}}
    src={track.src}
    isLoading={false}
  >
    <audio />
  </AudioPlayer>, {
    createNodeMock: () => {
      return {};
    }
  }).toJSON();

  expect(tree).toMatchSnapshot();
});

