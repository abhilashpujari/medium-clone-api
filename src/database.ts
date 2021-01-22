import "reflect-metadata";
import {createConnection} from "typeorm";

async function initDB() {
    try {
        console.log('Started creating database...');

        // @ts-ignore
        await createConnection({
            type: process.env.DATABASE_DRIVER,
            url: process.env.DATABASE_URL,
            entities: [
                __dirname + "/entity/*.ts"
            ],
            synchronize: true,
            logging: false
        });

        console.log('Done creating database...');
    } catch (e) {
        console.log(e.message);
    }
}

export default initDB;
