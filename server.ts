import express from 'express';
import dotenv from 'dotenv';
import { sequelize } from './sequelize/models/index';
dotenv.config();

const { PORT } = process.env;
const app = express();

app.get('/', (req, res) => {
    res.send('hey');
});

app.listen(PORT, async () => {
    try {
        await sequelize.sync({});
        console.log('connected!');
    } catch (e) {
        if (e instanceof Error) console.log(e.message);
    }

    console.log(`server running on ${PORT}`);
});
