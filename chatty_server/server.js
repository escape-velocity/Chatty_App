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

function broadcastUsercount(){
  const message = {type: "updateUserCount", userCount: wss.clients.size}
  wss.broadcast (JSON.stringify(message))
}

// Set up a callback that will run when a client connects to the server
// When a client connects they are assigned a socket, represented by
// the ws parameter in the callback.

wss.on('connection', (ws) => {
  broadcastUsercount();

  ws.on('message', function incoming(message) {
    var newMsg = JSON.parse(message);
    newMsg.id = uuidV4();
    if (newMsg.username) {
      // console.log('incoming message')
      newMsg.type = 'incomingMessage';
    } else {
      // console.log('incoming notiication')
      newMsg.type = 'incomingNotification';
    }
    newMsg = JSON.stringify(newMsg);
    wss.clients.forEach(function broadcast (client) {
      client.send(newMsg);
    });
    // console.log('received: %s', JSON.parse(message).content);

  });

   ws.on('close', () => {
    broadcastUsercount();
   })

});


  // Set up a callback for when a client closes the socket. This usually means they closed their browser.
