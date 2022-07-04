"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var web3_1 = __importDefault(require("web3"));
var web3 = new web3_1.default(new web3_1.default.providers.WebsocketProvider("ws://127.0.0.1:9156"));
var balance = web3.eth.getBalance("0x6a3d1a1ce405beeae94d03dd1fe4c2d04b68b23b");
console.log(balance);
