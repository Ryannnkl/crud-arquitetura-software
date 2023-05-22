const express = require('express');

const { connectDB } = require('./src/infra/db/postgres');

const route = require('./src/routes');

const PORT = 3333;

const app = express();

connectDB();

app.use(express.json());
app.use(route);

app.listen(PORT, () => {
  console.log(`[App Running]: http://localhost:${PORT}`)
});
