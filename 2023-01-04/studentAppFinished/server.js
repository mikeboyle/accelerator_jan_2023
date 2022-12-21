/**
 * Goals:
 * - [x] Import an express app instance
 * - [x] App listens for incoming requests on a designated port
 * - [ ] Port number can be set by the environment
 */

const app = require('./app.js');

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

