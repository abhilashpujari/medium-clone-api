import {createLogger} from "winston";
import DailyRotateFile from "winston-daily-rotate-file";

const transport = new DailyRotateFile({
    dirname: 'logs',
    datePattern: 'YYYY-MM-DD',
    filename: 'prod-%DATE%.log',
    maxSize: '20m',
    maxFiles: '14d',
    zippedArchive: true
});

const logger = createLogger({
    transports: [
        transport
    ]
});

export default logger;
