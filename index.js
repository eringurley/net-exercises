const { createServer } = require('net');

const server = createServer(sock => {

  console.log('client connected')
  sock.write('Hello client');

  // sock.end();

  sock.on('data', data => {
    console.log('from client', data.toString())
  });
});

server.listen(3000)