import Web3 from "web3";
// import Web3WsProvider from "web3-providers-ws";
import { WebsocketProviderBase } from "web3-core-helpers";
import options from "./options";
import * as Web3Types from "./node_modules/web3-core/types";
require("dotenv").config();
// import { WebsocketProvider } from "web3-providers-ws";

const { GETH_URL, GETH_USERNAME, GETH_PASSWORD } = process.env;
const url: string = `ws://${GETH_USERNAME}:${GETH_PASSWORD}@${GETH_URL}`;

const web3: Web3 = new Web3(new Web3.providers.WebsocketProvider(url, options));

const getBalance = async () => {
  console.log(web3);
  const a = await web3.eth.getBalance(
    "0x6a3d1a1ce405beeae94d03dd1fe4c2d04b68b23b"
  );
  return a;
};
getBalance();

web3.eth.subscribe("syncing", (err, result) => {
  console.log(err);
  if (!err) {
    console.log(result, "syncing");
  }
});

web3.eth.subscribe("newBlockHeaders", (err, result) => {
  if (!err) {
    console.log(result, "newBlockHeaders");
  }
});
