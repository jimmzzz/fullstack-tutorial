import http from 'node:http';

const PORT = 4000;

// Create the server
const server = http.createServer((req, res) => {
  // Set the response header
  res.writeHead(200, { 'Content-Type': 'application/json' });
  
  // Send the JSON response
  res.end(JSON.stringify({ message: 'Hello from your native Node.js server!' }));
});

// Start the server
server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}/`);
});
