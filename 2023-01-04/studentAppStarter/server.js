/**
 * This file represents our API server. It does the following:
 * - import an Express application
 * - start the server by listening on a particular port
 * 
 * TODOS:
 * - [] Port should be configurable by an environment variable
 *      (This is required by most deploy services.)
 */

const app = require('./app.js');

const port = 9000; // the port we listen on

app.listen(port, () => {
  console.log(`🎧 Listening on port ${port}!`);
});
