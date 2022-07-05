import { WebsocketProviderOptions } from 'web3-core-helpers';
require('dotenv').config();

const { GETH_USERNAME, GETH_PASSWORD } = process.env;
const baseAuth = Buffer.from(GETH_USERNAME + ':' + GETH_PASSWORD).toString('base64');

const options: WebsocketProviderOptions = {
    timeout: 30000, // ms
    headers: {
        authorization: `Basic ${baseAuth}`,
    },
    clientConfig: {
        maxReceivedFrameSize: 100000000, // bytes - default: 1MiB
        maxReceivedMessageSize: 100000000, // bytes - default: 8MiB

        keepalive: true,
        keepaliveInterval: 60000, // ms
    },

    reconnect: {
        auto: true,
        delay: 5000, // ms
        maxAttempts: 5,
        onTimeout: false,
    },
};

export default options;
