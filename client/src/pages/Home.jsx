import { useQuery } from '@apollo/client';

import ReviewList from '../components/ReviewList';

import { QUERY_REVIEWS } from '../utils/queries';

import gameData from './gameSeeds.json'
import React, { useState, useEffect } from 'react';
import './GameList.css'; // Import your CSS file
import { Link } from 'react-router-dom';

const gamesPerPage = 30;

function GameList() {
  const [gameData, setGameData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState(''); // State for the search query
  const [displayedGames, setDisplayedGames] = useState([]); // State for the displayed games

  useEffect(() => {
    // Load data from your JSON file or API
    import('./gameSeeds.json')
      .then((data) => setGameData(data.default))
      .catch((error) => console.error('Error loading data:', error));
  }, []);

  // Calculate the total number of pages
  const totalPages = Math.ceil(gameData.length / gamesPerPage);
  const startIndex = (currentPage - 1) * gamesPerPage;
  const endIndex = startIndex + gamesPerPage;

  // Handle next page
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Handle previous page
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Handle search input change
  const handleSearch = (e) => {
    const searchQuery = e.target.value; // Get the search query
    setSearchQuery(searchQuery); // Update the search query state
  
    // Create a case-insensitive regular expression from the search query
    const regex = new RegExp(searchQuery, 'i');
  
    // Filter games based on the regular expression
    const filteredGames = gameData.filter((game) => regex.test(game.name));
  
    // Update the displayed games based on the filtered results
    setDisplayedGames(filteredGames);
  };
  

  return (
    <div className="game-list">
      <h1 className='games-sanction'>Games Sanction</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for a game..."
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>
      <div className="game-grid">
        {searchQuery ? (
          displayedGames.map((game) => (
            <div key={game.id} className="game-item">
              <Link to={`/game/${game.id}`}> {/* Navigate to the single game page */}
                <img src={game.background_image} alt={game.name} />
                <h2>{game.name}</h2>
                <p>Rating: {game.rating} / {game.rating_top}</p>
              </Link>
            </div>
          ))
        ) : (
          gameData.slice(startIndex, endIndex).map((game) => (
            <div key={game.id} className="game-item">
              <Link to={`/game/${game.id}`}> {/* Navigate to the single game page */}
                <img src={game.background_image} alt={game.name} />
                <h2>{game.name}</h2>
                <p>Rating: {game.rating} / {game.rating_top}</p>
              </Link>
            </div>
          ))
        )}
      </div>
      <div>
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Previous Page
        </button>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next Page
        </button>
      </div>
    </div>
  );
}

export default GameList;
