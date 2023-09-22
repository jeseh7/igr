import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Modal from '../components/Modal/loginModal';  // Import the Modal component
import gameSeeds from './gameSeeds.json';
import AuthService from '../utils/auth';
import './SingleGame.css';  // Import CSS for styling

const SingleGame = () => {
  const { gameId } = useParams();
  const [gameData, setGameData] = useState(null);
  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    const foundGameData = gameSeeds.find((game) => game.id === parseInt(gameId));
    if (foundGameData) {
      setGameData(foundGameData);
    } else {
      console.error(`Game with ID ${gameId} not found.`);
    }
  }, [gameId]);

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    // Add logic to submit a review
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  if (!AuthService.loggedIn()) {
    return (
      <div>
        <Modal showModal={showModal} onClose={handleModalClose} />
      </div>
    );
  }

  if (!gameData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{gameData.name}</h2>
      <p>Release Date: {gameData.released}</p>
      <p>Rating: {gameData.rating} stars</p>
      <p>{gameData.description}</p>

      <form onSubmit={handleReviewSubmit}>
        <textarea placeholder="Write your review"></textarea>
        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
};

export default SingleGame;