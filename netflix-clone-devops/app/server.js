const http = require('http');
const port = 3000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.end('��� Welcome to Netflix Clone DevOps!');
});
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
