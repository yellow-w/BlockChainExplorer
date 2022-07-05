import express from 'express';
import dotenv from 'dotenv';
import { sequelize } from './sequelize/models/index';
import Block from './sequelize/models/block.model';
import Transaction from './sequelize/models/transaction.model';

dotenv.config();

const { PORT } = process.env;
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('hey');
});

//blockList를 20개씩 보여줌
app.post('/blocks', async (req, res) => {
    const blocks = await Block.findAll();
    res.json(blocks);
});

app.post('/transaction', async (req, res) => {
    const txs = await Transaction.findAll();
    res.json({});
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
