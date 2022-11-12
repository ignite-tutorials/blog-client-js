"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const tx_1 = require("./types/cosmos/gov/v1/tx");
const tx_2 = require("./types/cosmos/gov/v1/tx");
const tx_3 = require("./types/cosmos/gov/v1/tx");
const tx_4 = require("./types/cosmos/gov/v1/tx");
const msgTypes = [
    ["/cosmos.gov.v1.MsgDeposit", tx_1.MsgDeposit],
    ["/cosmos.gov.v1.MsgVote", tx_2.MsgVote],
    ["/cosmos.gov.v1.MsgVoteWeighted", tx_3.MsgVoteWeighted],
    ["/cosmos.gov.v1.MsgSubmitProposal", tx_4.MsgSubmitProposal],
];
exports.msgTypes = msgTypes;
