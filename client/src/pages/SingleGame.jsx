// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';

// const SingleGame = () => {
//   const { gameId } = useParams(); // Get the gameId parameter from the route

//   // State to store the game data
//   const [gameData, setGameData] = useState(null);

//   // Fetch the data for the specific game using the gameId
//   useEffect(() => {
//     // Make an API request to fetch the game data based on gameId
//     // Update the gameData state with the fetched data
//   }, [gameId]); // Run this effect whenever the gameId parameter changes

//   if (!gameData) {
//     // Handle loading state, e.g., show a loading spinner
//     return <div>Loading...</div>;
//   }

//   // Render the game details
//   return (
//     <div>
//       <h2>{gameData.name}</h2>
//       <p>{gameData.description}</p>
      
//       {/* Create a form for writing reviews */}
//       <form>
//         <textarea placeholder="Write your review"></textarea>
//         <button type="submit">Submit Review</button>
//       </form>

//       {/* Display reviews here */}
//     </div>
//   );
// };

// export default SingleGame;

////////////////////////////////////////////////////////////////////////////////////////////////

// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';

// const SingleGame = () => {
//   const { gameId } = useParams(); // Get the gameId parameter from the route

//   // State to store the game data
//   const [gameData, setGameData] = useState(null);

//   // Fetch the data for the specific game using the gameId
//   useEffect(() => {
//     // Make an API request to fetch the game data based on gameId
//     // Assuming you have an async function to fetch the data, you can do something like this:
//     const fetchGameData = async () => {
//       try {
//         const response = await fetch(`/api/games/${gameId}`);
//         const data = await response.json();
//         setGameData(data);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchGameData();
//   }, [gameId]); // Run this effect whenever the gameId parameter changes

//   if (!gameData) {
//     // Handle loading state, e.g., show a loading spinner
//     return <div>Loading...</div>;
//   }

//     console.log(gameData.name);

//   // Render the game details
//   return (
//     <div>
//       <h2>{gameData.name}</h2>
//       <p>{gameData.description}</p>

//       {/* Create a form for writing reviews */}
//       <form>
//         <textarea placeholder="Write your review"></textarea>
//         <button type="submit">Submit Review</button>
//       </form>

//       {/* Display reviews here */}
//     </div>
//   );
// };

// export default SingleGame;

// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import gameSeeds from './gameSeeds.json';

// const SingleGame = () => {
//   const { gameId } = useParams(); // Get the gameId parameter from the route

//   // State to store the game data
//   const [gameData, setGameData] = useState(null);

//   useEffect(() => {
//     // Find the game data with the matching gameId from the gameSeeds
//     const foundGameData = gameSeeds.find((game) => game.id === gameId);

//     if (foundGameData) {
//       setGameData(foundGameData);
//     } else {
//       console.error(`Game with ID ${gameId} not found.`);
//     }
//   }, [gameId]);

//   if (!gameData) {
//     // Handle loading state, e.g., show a loading spinner
//     return <div>Loading...</div>;
//   }

//   // Render the game details
//   return (
//     <div>
//       <h2>{gameData.name}</h2>
//       <p>{gameData.description}</p>

//       {/* Create a form for writing reviews */}
//       <form>
//         <textarea placeholder="Write your review"></textarea>
//         <button type="submit">Submit Review</button>
//       </form>

//       {/* Display reviews here */}
//     </div>
//   );
// };

// export default SingleGame;

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import gameSeeds from './gameSeeds.json';

const SingleGame = () => {
  const { gameId } = useParams(); // Get the gameId parameter from the route

  // State to store the game data
  const [gameData, setGameData] = useState(null);

  useEffect(() => {
    // Find the game data with the matching gameId from the gameSeeds
    const foundGameData = gameSeeds.find((game) => game.id === parseInt(gameId));

    if (foundGameData) {
      setGameData(foundGameData);
    } else {
      console.error(`Game with ID ${gameId} not found.`);
    }
  }, [gameId]);

  if (!gameData) {
    // Handle loading state, e.g., show a loading spinner
    return <div>Loading...</div>;
  }

  // Render the game details
  return (
    <div>
      <h2>{gameData.name}</h2>
      <p>Release Date: {gameData.released}</p>
      <p>Rating: {gameData.rating} stars</p>
      <p>{gameData.description}</p>

      {/* Create a form for writing reviews */}
      <form>
        <textarea placeholder="Write your review"></textarea>
        <button type="submit">Submit Review</button>
      </form>

      {/* Display reviews here */}
    </div>
  );
};

export default SingleGame;