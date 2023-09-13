const API_KEY = 'aizmyvnf0909v4c68xncoi1dvhnvt9';
const SEARCH_QUERY = 'Super Mario Bros'; // Replace with your search query

const IGDB_ENDPOINT = 'https://api.igdb.com/v4/games';

// Define the fields you want to retrieve (e.g., name, platforms)
const FIELDS = 'name,platforms';

// Construct the request headers with your API key
const headers = {
  'Client-ID': API_KEY,
  'Authorization': `Bearer ${API_KEY}`,
  'Content-Type': 'application/json',
};

// Construct the request body as a JSON object
const requestBody = JSON.stringify({
  search: SEARCH_QUERY,
  fields: FIELDS,
});

// Make the API request using the fetch API
fetch(IGDB_ENDPOINT, {
  method: 'POST',
  headers: headers,
  body: requestBody,
})
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    // Process and print the response data
    data.forEach((game) => {
      console.log(`Name: ${game.name}`);
      console.log(`Platforms: ${game.platforms}`);
      console.log('\n');
    });
  })
  .catch((error) => {
    console.error('Error:', error);
  });
