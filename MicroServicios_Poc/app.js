const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/health', (req, res) => {
  res.send('OK GitHub Actions');
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
