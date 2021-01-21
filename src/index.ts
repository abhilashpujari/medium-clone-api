import dotenv from 'dotenv';
import express from 'express';

// Loads environment from .env file
dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();

app.listen(PORT, () => {
   console.log("Server Started 1");
});
