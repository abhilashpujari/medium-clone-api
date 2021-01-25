import "reflect-metadata";
import {Connection, createConnection} from "typeorm";

async function initDB(): Promise<Connection> {
    try {
        console.log('Started creating database...');

        // @ts-ignore
        let connection = await createConnection({
            type: process.env.DATABASE_TYPE,
            url: process.env.DATABASE_URL,
            entities: [
                __dirname + "/entity/*.ts"
            ],
            synchronize: true,
            logging: false
        });

        console.log('Done creating database...');

        return connection;
    } catch (e) {
        console.log('Error while creating database connection:: ', e.message);
        process.exit(1);
    }
}

export default initDB;
