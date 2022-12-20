/**
 * A very dumb server that does the following:
 * - listens to requests on a port
 * - prints the data that it receives from a client
 * - tries to send a response back to the client
 * 
 * Notice what this DOESN'T do!
 * - Format the raw bytes of data into an http request object we can use and understand
 * - Format the response into an http response object our client can understand
 */
const net = require('net'); // built-in module of Node.js

const port = 3003; // the port we listen on

const server = net.createServer((socket) => {
  console.log('Client connected');

  // Event listener that is fired every time the server receives data
  socket.on('data', (data) => {
    console.log('got a chunk of data!');
    console.log(data);
    socket.write("Got your data, thank you!");
  });
});


server.listen(port, () => {
  console.log(`TCP socket server is running on port: ${port}`);
});