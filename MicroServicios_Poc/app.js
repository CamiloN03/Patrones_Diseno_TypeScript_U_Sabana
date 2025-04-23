const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/health', (req, res) => {
  res.send('Running health creacion del video test 1....');
});

app.get('/hola', (req, res) => {
  res.send('Running hola....');
});

app.get('/chao', (req, res) => {
  res.send('Running chao....');
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
