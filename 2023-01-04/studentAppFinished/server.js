/**
 * Goals:
 * - [x] Import an express app instance
 * - [x] App listens for incoming requests on a designated port
 * - [x] Port number can be set by the environment
 */

const app = require('./app.js');
require('dotenv').config(); // add any envvars from .env file to the server environment

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

