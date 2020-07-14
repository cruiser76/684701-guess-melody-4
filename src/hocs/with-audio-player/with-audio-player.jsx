import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";

const withAudioPlayer = (Component) => {
  class WithAudioPlayer extends PureComponent {
    constructor(props) {
      super(props);

      this._audioRef = createRef();

      this.state = {
        progress: 0,
        isLoading: true,
        isPlaying: props.isPlaying
      };
    }

    componentDidMount() {
      const {src} = this.props;

      const audio = this._audioRef.current;
      audio.src = src;

      audio.oncanplaythrough = () => this.setState({isLoading: false});

      audio.onplay = () => this.setState({isPlaying: true});

      audio.onpause = () => this.setState({isPlaying: false});

      audio.ontimeupdate = () => this.setState({progress: Math.floor(audio.currentTime)});
    }

    componentDidUpdate() {
      const audio = this._audioRef.current;

      if (this.state.isPlaying) {
        audio.play();
      } else {
        audio.pause();
      }
    }

    componentWillUnmount() {
      const audio = this._audioRef.current;

      audio.oncanplaythrough = null;
      audio.onplay = null;
      audio.onpause = null;
      audio.ontimeupdate = null;
      audio.src = ``;
    }

    render() {
      const {isLoading, isPlaying} = this.state;
      const {onPlayButtonClick} = this.props;

      return (
        <Component
          {...this.props}
          isPlaying={isPlaying}
          isLoading={isLoading}
          onPlayButtonClick={() => {
            this.setState({isPlaying: !isPlaying});
            onPlayButtonClick();
          }}
        >
          <audio
            ref={this._audioRef}
          />
        </Component >
      );
    }
  }

  WithAudioPlayer.propTypes = {
    isPlaying: PropTypes.bool.isRequired,
    onPlayButtonClick: PropTypes.func.isRequired,
    src: PropTypes.string.isRequired,
  };

  return WithAudioPlayer;
};

export default withAudioPlayer;