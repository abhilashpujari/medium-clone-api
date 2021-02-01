import {addColors, createLogger, format} from "winston";
import DailyRotateFile from "winston-daily-rotate-file";

const transport = new DailyRotateFile({
    dirname: 'logs',
    datePattern: 'YYYY-MM-DD',
    filename: 'prod-%DATE%.log',
    maxSize: '20m',
    maxFiles: '14d',
    zippedArchive: true
});

const customLevels = {
    levels: {
        trace: 5,
        debug: 4,
        info: 3,
        warn: 2,
        error: 1,
        fatal: 0,
    },
    colors: {
        trace: 'white',
        debug: 'green',
        info: 'green',
        warn: 'yellow',
        error: 'red',
        fatal: 'red',
    },
};

const formatter = format.combine(
    format.colorize(),
    format.timestamp({format: 'YYYY-MM-DD HH:mm:ss'}),
    format.splat(),
    format.printf((info) => {
        const {timestamp, level, message, ...meta} = info;

        return `${timestamp} [${level}]: ${message} ${
            Object.keys(meta).length ? JSON.stringify(meta, null, 2) : ''
        }`;
    }),
);

class Logger {
    private logger;

    constructor() {
        this.logger = createLogger({
            level: process.env.NODE_ENV === 'production' ? 'trace' : 'error',
            levels: customLevels.levels,
            transports: [transport],
        });
        addColors(customLevels.colors);
    }

    trace(msg: any, meta?: any) {
        this.logger.log('trace', msg, meta);
    }

    debug(msg: any, meta?: any) {
        this.logger.debug(msg, meta);
    }

    info(msg: any, meta?: any) {
        this.logger.info(msg, meta);
    }

    warn(msg: any, meta?: any) {
        this.logger.warn(msg, meta);
    }

    error(msg: any, meta?: any) {
        this.logger.error(msg, meta);
    }

    fatal(msg: any, meta?: any) {
        this.logger.log('fatal', msg, meta);
    }
}

export default new Logger();
