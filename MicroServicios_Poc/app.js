const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/health', (req, res) => {
  res.send('Hola desde health 3 replicas');
});

app.get('/hola', (req, res) => {
  res.send('CI- CD argo poc');
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
