"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Params = exports.protobufPackage = void 0;
/* eslint-disable */
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "ibc.applications.interchain_accounts.controller.v1";
function createBaseParams() {
    return { controllerEnabled: false };
}
exports.Params = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.controllerEnabled === true) {
            writer.uint32(8).bool(message.controllerEnabled);
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
                    message.controllerEnabled = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { controllerEnabled: isSet(object.controllerEnabled) ? Boolean(object.controllerEnabled) : false };
    },
    toJSON(message) {
        const obj = {};
        message.controllerEnabled !== undefined && (obj.controllerEnabled = message.controllerEnabled);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseParams();
        message.controllerEnabled = (_a = object.controllerEnabled) !== null && _a !== void 0 ? _a : false;
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
