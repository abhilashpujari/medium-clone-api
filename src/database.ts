import "reflect-metadata";
import {Connection, createConnection} from "typeorm";
import logger from "./logger";

async function initDB(): Promise<Connection> {
    try {
        console.log('Connecting to database...');

        // @ts-ignore
        let connection = await createConnection({
            type: process.env.DATABASE_TYPE,
            url: process.env.DATABASE_URL,
            entities: [
                __dirname + "/entity/*.ts"
            ],
            synchronize: process.env.NODE_ENV === 'development',
            logging: false
        });

        console.log('Database connected successfully...');

        return connection;
    } catch (e) {
        console.log('Error while creating database connection');
        logger.error(JSON.stringify(e));
        process.exit(1);
    }
}

export default initDB;
