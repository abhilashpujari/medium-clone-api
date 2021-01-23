import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import express from 'express';
import initDB from "./database";

import routes from './routes/index';

// Loads environment variables from .env file
dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();

// parse application/json
app.use(bodyParser.json());

// Initialize routes
app.use('/api', routes);

app.listen(PORT, async () => {
   console.log(`Listening on PORT ${PORT}`);

   // initialize the database connection
   await initDB();
});
