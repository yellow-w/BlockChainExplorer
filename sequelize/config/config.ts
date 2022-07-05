import dotenv from 'dotenv';
dotenv.config();

const { DB_USERNAME, DB_PASSWORD, DB_HOST, DB_DATABASE } = process.env;

const config = {
    development: {
        username: DB_USERNAME || '',
        password: DB_PASSWORD || '',
        database: DB_DATABASE || '',
        options: {
            host: DB_HOST || '',
            dialect: 'mysql',
            models: [__dirname + '/**/*.models.ts'],
        },
    },
    production: {
        username: DB_USERNAME || '',
        password: DB_PASSWORD || '',
        database: DB_DATABASE || '',
        options: {
            host: DB_HOST || '',
            dialect: 'mysql',
        },
    },
};

export default config;
