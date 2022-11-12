"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const tx_1 = require("./types/cosmos/distribution/v1beta1/tx");
const tx_2 = require("./types/cosmos/distribution/v1beta1/tx");
const tx_3 = require("./types/cosmos/distribution/v1beta1/tx");
const tx_4 = require("./types/cosmos/distribution/v1beta1/tx");
const msgTypes = [
    ["/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission", tx_1.MsgWithdrawValidatorCommission],
    ["/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward", tx_2.MsgWithdrawDelegatorReward],
    ["/cosmos.distribution.v1beta1.MsgSetWithdrawAddress", tx_3.MsgSetWithdrawAddress],
    ["/cosmos.distribution.v1beta1.MsgFundCommunityPool", tx_4.MsgFundCommunityPool],
];
exports.msgTypes = msgTypes;
