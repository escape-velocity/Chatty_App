// server.js

const express = require('express');
const SocketServer = require('ws').Server;
const WebSocket = require('ws');
const uuidV4 = require('uuid/v4');



// Set the port to 3001
const PORT = 3001;

// Create a new express server
const server = express()
   // Make the express server serve static assets (html, javascript, css) from the /public folder
  .use(express.static('public'))
  .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${ PORT }`));

// Create the WebSockets server
const wss = new SocketServer({ server });

// Broadcast to all.
wss.broadcast = function broadcast(data) {
  wss.clients.forEach(function each(client) {
    if (client.readyState === WebSocket.OPEN) {
      client.send(data);
    }
  });
};



// Set up a callback that will run when a client connects to the server
// When a client connects they are assigned a socket, represented by
// the ws parameter in the callback.
wss.on('connection', (ws) => {
  console.log('Client connected');



  ws.send('something');

  ws.on('message', function incoming(message) {
    var incomingMsg = message;
    incomingMsg.id = uuidV4();
    var outGoingMsg = incomingMsg;
    wss.broadcast(outGoingMsg);
    console.log('received: %s', JSON.parse(message).content);

  });

   ws.on('close', () => console.log('Client disconnected'));


});


  // Set up a callback for when a client closes the socket. This usually means they closed their browser.
