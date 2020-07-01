import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import AudioPlayer from '../audio-player/audio-player.jsx';

export default class QuestionArtist extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      playerId: 0
    };
  }

  render() {
    const {questions, onAnswer} = this.props;
    const {track, answers} = questions;
    const {playerId} = this.state;
    const src = track.src;
    return (
      <section className="game game--artist">
        <header className="game__header">
          <a className="game__back" href="#">
            <span className="visually-hidden">Сыграть ещё раз</span>
            <img className="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию" />
          </a>

          <svg xmlns="http://www.w3.org/2000/svg" className="timer" viewBox="0 0 780 780">
            <circle className="timer__line" cx="390" cy="390" r="370" style={{filter: `url(#blur)`, transform: `rotate(-90deg) scaleY(-1)`, transformOrigin: `center`}}
            />
          </svg>

          <div className="game__mistakes">
            <div className="wrong"></div>
            <div className="wrong"></div>
            <div className="wrong"></div>
          </div>
        </header>

        <section className="game__screen">
          <h2 className="game__title">Кто исполняет эту песню?</h2>
          <div className="game__track">
            <div className="track">
              <AudioPlayer
                isPlaying={playerId === 0}
                src={src}
                onPlayButtonClick={() => {
                  this.setState({playerId: playerId === 0 ? -1 : 0});
                }}
              />
            </div>
          </div>

          <form className="game__artist">
            {answers.map((el, i) => {
              return (
                <div className="artist" key={el.artist}>
                  <input className="artist__input visually-hidden" type="radio" name="answer" value={`artist-${i}`} id={`answer-${i}`}
                    onChange={(evt) => {
                      evt.preventDefault();
                      onAnswer(questions, el);
                    }}
                  />
                  <label className="artist__name" htmlFor={`answer-${i}`} >
                    <img className="artist__picture" src={el.picture} alt={el.artist} />
                    {el.artist}
                  </label>
                </div>);
            })}

          </form>
        </section>
      </section>
    );
  }
}

QuestionArtist.propTypes = {
  questions: PropTypes.shape({
    answers: PropTypes.arrayOf(PropTypes.shape({
      picture: PropTypes.string.isRequired,
      artist: PropTypes.string.isRequired
    })).isRequired,
    track: PropTypes.shape({
      src: PropTypes.string.isRequired,
      artist: PropTypes.string.isRequired
    }),
    type: PropTypes.string.isRequired
  }),
  onAnswer: PropTypes.func.isRequired
};
