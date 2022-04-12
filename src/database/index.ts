import { Client } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const client = new Client({
    user: process.env.DB_USERNAME,
    host: process.env.APP_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: 5432 || process.env.DB_PORT
});

client.connect();

export default client;
