import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Import your game data from the JSON file
import gameData from './gameSeeds.json';

function GameList() {
  const [displayedGames, setDisplayedGames] = useState([]);

  useEffect(() => {
    // Initialize the displayedGames state with the data from gameSeeds.json
    setDisplayedGames(gameData);
  }, []);

  return (
    <div>
      <h1>Games List</h1>
      <ul>
        {displayedGames.map((game) => (
          <li key={game.id}>
            <Link to={`/game/${game.id}`}>
              <img src={game.background_image} alt={game.name} />
              {game.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GameList;
