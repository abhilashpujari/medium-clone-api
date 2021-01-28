import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import express from 'express';
import initDB from "./database";

import routes from './routes/index';
import errorHandler from "./middlewares/errorHandler";

// Loads environment variables from .env file
dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();

// parse application/json
app.use(bodyParser.json());

// Initialize routes
app.use('/api', routes);

// Handle 404 - Keep this as a last route
app.use(errorHandler);

// Initialize database connection
initDB()
    .then((connection) => {
        app.listen(PORT, async () => {
            console.log(`Server listening on PORT ${PORT}`);
        });
    });
