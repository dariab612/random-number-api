const express = require('express');

const generateRouter = require('./routes/generate.router');
const retrieveRouter = require('./routes/retrieve.router');

const app = express();

app.listen(3000, () => {
  console.log(`*** Server started ***`);
});

app.use('/generate', generateRouter);
app.use('/retrieve', retrieveRouter);
