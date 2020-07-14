import React from "react";
import PropTypes from "prop-types";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withAudio from "./with-audio-player.jsx";

configure({adapter: new Adapter()});

const Player = (props) => {
  const {onPlayButtonClick, children} = props;
  return (
    <div>
      <button onClick={onPlayButtonClick} />
      {children}
    </div>
  );
};

Player.propTypes = {
  onPlayButtonClick: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};

it(`Checks that HOC's callback turn on audio (play)`, () => {
  const PlayerWrapped = withAudio(Player);
  const wrapper = mount(<PlayerWrapped
    isPlaying={false}
    onPlayButtonClick={() => {}}
    src=""
  />);


  const playEvent = jest.spyOn(window.HTMLMediaElement.prototype, `play`).mockImplementation(()=> {});
  wrapper.instance().componentDidMount();
  wrapper.find(`button`).simulate(`click`);
  expect(playEvent).toHaveBeenCalledTimes(1);
});

it(`Checks that HOC's callback turn off audio (pause)`, () => {
  const PlayerWrapped = withAudio(Player);
  const wrapper = mount(<PlayerWrapped
    isPlaying={true}
    onPlayButtonClick={() => {}}
    src=""
  />);

  const pauseEvent = jest.spyOn(window.HTMLMediaElement.prototype, `pause`).mockImplementation(()=> {});
  wrapper.instance().componentDidMount();
  wrapper.find(`button`).simulate(`click`);
  expect(pauseEvent).toHaveBeenCalledTimes(1);
});
