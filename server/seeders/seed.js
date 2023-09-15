const db = require("../config/connection");
const { Game, Review, User } = require("../models");
const gameSeeds = require("./gameSeeds.json");
const userSeeds = require('./userSeeds.json');
const reviewSeeds = require("./reviewSeeds.json");
const gameDB = require("./cleanDB");

db.once("open", async () => {
  try {
    await gameDB("Game", "games");
    await gameDB("User", "users");

    await User.create(userSeeds);
    await Game.create(gameSeeds);

    for (let i = 0; i < reviewSeeds.length; i++) {
      const { _id, reviewAuthor } = await Review.create(reviewSeeds[i]);
      const user = await User.findOneAndUpdate(
        { username: reviewAuthor },
        {
          $addToSet: {
            reviews: _id,
          },
        }
      );
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log("all done!");
  process.exit(0);
});
