const express = require('express');
const app = express();

// route hanlder
app.get('/', (req, res) => {
  res.send({ hi: 'there' });
});

app.listen(5000);
