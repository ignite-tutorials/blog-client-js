"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const tx_1 = require("./types/cosmos/bank/v1beta1/tx");
const tx_2 = require("./types/cosmos/bank/v1beta1/tx");
const msgTypes = [
    ["/cosmos.bank.v1beta1.MsgMultiSend", tx_1.MsgMultiSend],
    ["/cosmos.bank.v1beta1.MsgSend", tx_2.MsgSend],
];
exports.msgTypes = msgTypes;
