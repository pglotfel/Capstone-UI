var WebSocketServer = require('ws').Server
  , wss = new WebSocketServer({ port: 8080 });

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
  });

  ws.send('loading');

  setTimeout(function() {
    ws.send("did you get this?");
  }, 5000);
});

console.log('server started');
