var WebSocketServer = require('ws').Server
  , wss = new WebSocketServer({ port: 8080 });

var spawn = require('child_process').spawn;

var net = require('net');

var clients = [];

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
  });

  ws.send('default');

  clients.push(ws);
});

console.log('WSS started on 8080');

// Start a TCP Server
net.createServer(function (socket) {

  console.log('Java client connected!');

  // Handle incoming messages from clients.
  var chunk = "";
  socket.on('data', function (data) {

    chunk += data.toString(); // Add string on the end of the variable 'chunk'
    d_index = chunk.indexOf(';'); // Find the delimiter

    // While loop to keep going until no delimiter can be found
    while (d_index > -1) {
        try {
            string = chunk.substring(0,d_index); // Create string up until the delimiter
            console.log(string);
            clients[0].send(string);
        } catch (err) {

        }
        chunk = chunk.substring(d_index+1); // Cuts off the processed chunk
        d_index = chunk.indexOf(';'); // Find the new delimiter
    }
  }.bind(chunk));

  // Remove the client from the list when it leaves
  socket.on('end', function () {
  });

}).listen(8081);

console.log('TCP server started on 8081');
