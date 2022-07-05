import { Sequelize } from 'sequelize-typescript';
import Block from './block.model';
import configuration from '../config/config';

const fs = require('fs');
const path = require('path');

const db = {};

const mode = process.env.NODE_ENV === 'production' ? process.env.NODE_ENV : 'development';
const config = configuration[mode];

export const sequelize = new Sequelize(config.database, config.username, config.password, {
    host: 'localhost',
    dialect: 'mysql',
    models: [__dirname + '/*.model.ts'],
});
