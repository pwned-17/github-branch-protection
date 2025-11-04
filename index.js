// index.js - stock-service entrypoint
const { createServer } = require('./src/app');

const server = createServer();

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`stock-xxxsernnvice lisdddtening on port ${port}`);
});
