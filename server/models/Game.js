const { Schema, model } = require('mongoose');

const gameSchema = new Schema({
  id: {
    type: Number,
    required: true,
  },
  genres: {
    type: [String],
    required: false,
  },
  name: {
    type: String,
    required: true,
  },
  platforms: {
    type: [String],
    required: false,
  },
  summary: {
    type: String,
    required: false,
  },
  url: {
    type: String,
    required: false,
  },
  storyline: {
    type: String,
    required: false,
  },
});

const Game = model('Game', gameSchema);

module.exports = Game;