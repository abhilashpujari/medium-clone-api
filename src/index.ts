import dotenv from 'dotenv';
import express from 'express';
import initDB from "./database";

// Loads environment variables from .env file
dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();

app.listen(PORT, async () => {
   console.log(`Listening on PORT ${PORT}`);

   // initialize the database connection
   await initDB();
});
