import Web3 from 'web3';
import options from './options';
import dotenv from 'dotenv';
import { BlockHeader } from 'web3-eth';
import Block from './sequelize/models/block.model';
import Transaction from './sequelize/models/transaction.model';
import { Transaction as TX } from 'web3-core';
dotenv.config();

const { GETH_URL } = process.env;
const url: string = `ws://${GETH_URL}`;
const web3: Web3 = new Web3(new Web3.providers.WebsocketProvider(url, options));

const InsertTransaction = async (_txs: TX[]) => {
    try {
        _txs.map(async (tx) => {
            const txReceipt = await web3.eth.getTransactionReceipt(tx.hash);
            const row = new Transaction({
                ...tx,
                sender: tx.from,
                receiver: tx.to,
                transactionHash: tx.hash,
                gasUsed: txReceipt.gasUsed,
                status: txReceipt.status,
                contractAddress: txReceipt.contractAddress,
                transactionIndex: txReceipt.transactionIndex,
            });
            row.save();
        });
    } catch (e) {
        if (e instanceof Error) console.log(e.message);
    }
};

const InsertNewBlock = async (_newBlocks: BlockHeader[]) => {
    try {
        await _newBlocks.map((newBlock) => {
            const row = new Block(newBlock);
            row.save();
        });
        const lastBlockNumber = await web3.eth.getBlockNumber();
        const lastBlock = await web3.eth.getBlock(lastBlockNumber, true);
        const txData = lastBlock.transactions;
        InsertTransaction(txData);
    } catch (e) {
        if (e instanceof Error) console.log(e.message);
    }
};

web3.eth.subscribe('newBlockHeaders', async (err: Error, result: BlockHeader) => {
    if (!err) {
        await InsertNewBlock([result]);
    }
});
