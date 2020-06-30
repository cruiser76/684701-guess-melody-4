const AVATAR_URL = `https://api.adorable.io/avatars/128`;

export default [
  {
    type: `artist`,
    track: {
      src: `https://upload.wikimedia.org/wikipedia/commons/6/66/Bach_-_cantata_140._4._chorale.ogg`,
      artist: `MIT Concert Choir`
    },
    answers: [{
      picture: `${AVATAR_URL}/${Math.random()}`,
      artist: `MIT Concert Choir`,
    }, {
      picture: `${AVATAR_URL}/${Math.random()}`,
      artist: `er tert ert ert `,
    }, {
      picture: `${AVATAR_URL}/${Math.random()}`,
      artist: `er wrt ertewrt dfg`,
    }]
  },
  {
    type: `genre`,
    genre: `disco`,
    answers: [{
      src: `https://upload.wikimedia.org/wikipedia/commons/1/14/WAMozartContredanseKV609N2.OGG`,
      genre: `classic`,
    }, {
      src: `https://upload.wikimedia.org/wikipedia/commons/5/5d/Music_Note_Emoticon.ogg`,
      genre: `disco`,
    }, {
      src: `https://upload.wikimedia.org/wikipedia/commons/6/64/Amidst_the_Raindrops_clip.ogg`,
      genre: `electro`,
    }, {
      src: `https://upload.wikimedia.org/wikipedia/commons/6/60/Song.ogg`,
      genre: `rock`
    }]
  }
];
