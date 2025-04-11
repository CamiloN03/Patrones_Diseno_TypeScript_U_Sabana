const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/health', (req, res) => {
  res.send('Hola mundo');
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
