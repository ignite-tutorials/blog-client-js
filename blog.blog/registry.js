"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgTypes = void 0;
const tx_1 = require("./types/blog/tx");
const tx_2 = require("./types/blog/tx");
const tx_3 = require("./types/blog/tx");
const msgTypes = [
    ["/blog.blog.MsgDeleteComment", tx_1.MsgDeleteComment],
    ["/blog.blog.MsgCreatePost", tx_2.MsgCreatePost],
    ["/blog.blog.MsgCreateComment", tx_3.MsgCreateComment],
];
exports.msgTypes = msgTypes;
