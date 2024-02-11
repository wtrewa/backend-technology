
# Chess Website Backend Documentation
Welcome to the documentation for the backend of our chess website. This document provides an overview of the endpoints available for authentication and player-related functionality. The backend is built using Node.js and utilizes a MongoDB database.

# Authentication
<h2>Signup</h2>
Endpoint: /user/register
Method: POST
Description: Allows users to register for an account on the website.
<h2>Login</h2>
Endpoint: /user/login
Method: POST
Description: Allows users to log in to their account.

# Player Data

<h2>Retrieve Top Players</h2>
Endpoint: GET /top-players
Description: Retrieves a list of the top 50 classical chess players.
<h2>Retrieve Rating History for a Player</h2>
Endpoint: GET /player/{username}/rating-history
Description: Retrieves the 30-day rating history for a specified player.
<h2>Generate CSV of Rating History for Top Players</h2>
Endpoint: GET /players/rating-history-csv
Description: Generates and provides a CSV file with the rating history for the top 50 players. Each row contains the player’s username, their rating from 30 days ago, and their rating for each subsequent day up to today.

# Tech Stack
Node.js
MongoDB

# Getting Started
Clone this repository.
Install dependencies using npm install.
Set up your MongoDB database and configure the connection string in the .env file.
Start the server using npm start.
Contributing
We welcome contributions from the community. If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.
