import React, {Fragment, PureComponent} from 'react';
import PropTypes from 'prop-types';

export default class AudioPlayer extends PureComponent {
  render() {
    const {onPlayButtonClick, isLoading, isPlaying, children} = this.props;

    return (
      <Fragment>
        <button className={`track__button track__button--${isPlaying ? `pause` : `play`}`}
          type="button"
          disabled={isLoading}
          onClick={() => onPlayButtonClick()}
        >
        </button>
        <div className="track__status">
          {children}
        </div>
      </Fragment>
    );
  }
}

AudioPlayer.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  onPlayButtonClick: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};
