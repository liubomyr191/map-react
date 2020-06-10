const googleMapsAPIKey = process.env.GOOGLE_MAPS_API_KEY || 'AIzaSyBNf4_S9tTiAgNXwUEDLgmSo6nbJ06NG7A';
const baseUrl = process.env.BASE_URL || "http://localhost:8080/";
const spotifyClientSecret = process.env.SPOTIFY_CLIENT_SECRET || 'f4ce69d1692e4d34916e61df91de7c8a';
const spotifyClientId = process.env.SPOTIFY_CLIENT_ID || 'c4c8c9065ae849b39e9490c4e47b7fcc';
const myEnv = {
  googleMapsAPIKey,
  baseUrl,
  spotifyClientSecret,
  spotifyClientId,
};

module.exports = myEnv;
