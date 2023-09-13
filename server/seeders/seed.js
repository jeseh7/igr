const db = require('../config/connection');
const { Game } = require('../models');
const gameSeeds = require('./gameSeeds.json');
const gameDB = require('./gameDB');

db.once('open', async () => {
  await gameDB('Game', 'games');

  await Game.create(gameSeeds);

  console.log('all done!');
  process.exit(0);
});
