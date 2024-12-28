const express = require('express');
const os = require('os');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`Hello, Kubernetes! Running on ${os.hostname()}`);
});

app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});