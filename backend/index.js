const Express = require('express');
const cors = require('cors');
const connectToMongo = require('./db');

connectToMongo();
const app = Express();
const port = 5000;

app.use(cors());
app.use(Express.json());

app.listen(port, () => console.log(`Server started on port ${port}`));