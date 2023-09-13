const { Schema, model } = require('mongoose');

const gameSchema = new Schema({
  id: {
    type: Number,
    required: true,
  },
  genres: {
    type: [String],
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  platforms: {
    type: [String],
    required: true,
  },
  summary: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  storyline: {
    type: String,
    required: true,
  },
});

const Game = model('Game', gameSchema);

module.exports = Game;