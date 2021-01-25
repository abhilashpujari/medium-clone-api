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

// Handle 404 - Keep this as a last route
app.use(function(req, res, next) {
    res.status(404);
    res.json('404: Route Not Found');
});

// Initialize database connection
initDB()
    .then((connection) => {
        app.listen(PORT, async () => {
            console.log(`Server listening on PORT ${PORT}`);
        });
    });
