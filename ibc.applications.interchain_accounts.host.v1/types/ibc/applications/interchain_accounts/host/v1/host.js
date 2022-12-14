"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Params = exports.protobufPackage = void 0;
/* eslint-disable */
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "ibc.applications.interchain_accounts.host.v1";
function createBaseParams() {
    return { hostEnabled: false, allowMessages: [] };
}
exports.Params = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.hostEnabled === true) {
            writer.uint32(8).bool(message.hostEnabled);
        }
        for (const v of message.allowMessages) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hostEnabled = reader.bool();
                    break;
                case 2:
                    message.allowMessages.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            hostEnabled: isSet(object.hostEnabled) ? Boolean(object.hostEnabled) : false,
            allowMessages: Array.isArray(object === null || object === void 0 ? void 0 : object.allowMessages) ? object.allowMessages.map((e) => String(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.hostEnabled !== undefined && (obj.hostEnabled = message.hostEnabled);
        if (message.allowMessages) {
            obj.allowMessages = message.allowMessages.map((e) => e);
        }
        else {
            obj.allowMessages = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseParams();
        message.hostEnabled = (_a = object.hostEnabled) !== null && _a !== void 0 ? _a : false;
        message.allowMessages = ((_b = object.allowMessages) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
