import { WebsocketProviderOptions } from "web3-core-helpers";

require("dotenv").config();

const { GETH_URL, GETH_USERNAME, GETH_PASSWORD } = process.env;

const options: WebsocketProviderOptions = {
  timeout: 30000, // ms
  headers: {
    authorization: `Basic ${GETH_USERNAME}:${GETH_PASSWORD}`,
  },
  clientConfig: {
    // Useful if requests are large
    maxReceivedFrameSize: 100000000, // bytes - default: 1MiB
    maxReceivedMessageSize: 100000000, // bytes - default: 8MiB

    // Useful to keep a connection alive
    keepalive: true,
    keepaliveInterval: 60000, // ms
  },

  // Enable auto reconnection
  reconnect: {
    auto: true,
    delay: 5000, // ms
    maxAttempts: 5,
    onTimeout: false,
  },
};

export default options;
