"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryClientImpl = exports.QueryEscrowAddressResponse = exports.QueryEscrowAddressRequest = exports.QueryDenomHashResponse = exports.QueryDenomHashRequest = exports.QueryParamsResponse = exports.QueryParamsRequest = exports.QueryDenomTracesResponse = exports.QueryDenomTracesRequest = exports.QueryDenomTraceResponse = exports.QueryDenomTraceRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const pagination_1 = require("../../../../cosmos/base/query/v1beta1/pagination");
const transfer_1 = require("./transfer");
exports.protobufPackage = "ibc.applications.transfer.v1";
function createBaseQueryDenomTraceRequest() {
    return { hash: "" };
}
exports.QueryDenomTraceRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.hash !== "") {
            writer.uint32(10).string(message.hash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDenomTraceRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hash = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { hash: isSet(object.hash) ? String(object.hash) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.hash !== undefined && (obj.hash = message.hash);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryDenomTraceRequest();
        message.hash = (_a = object.hash) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQueryDenomTraceResponse() {
    return { denomTrace: undefined };
}
exports.QueryDenomTraceResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.denomTrace !== undefined) {
            transfer_1.DenomTrace.encode(message.denomTrace, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDenomTraceResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denomTrace = transfer_1.DenomTrace.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { denomTrace: isSet(object.denomTrace) ? transfer_1.DenomTrace.fromJSON(object.denomTrace) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.denomTrace !== undefined
            && (obj.denomTrace = message.denomTrace ? transfer_1.DenomTrace.toJSON(message.denomTrace) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryDenomTraceResponse();
        message.denomTrace = (object.denomTrace !== undefined && object.denomTrace !== null)
            ? transfer_1.DenomTrace.fromPartial(object.denomTrace)
            : undefined;
        return message;
    },
};
function createBaseQueryDenomTracesRequest() {
    return { pagination: undefined };
}
exports.QueryDenomTracesRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDenomTracesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { pagination: isSet(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined
            && (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryDenomTracesRequest();
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageRequest.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQueryDenomTracesResponse() {
    return { denomTraces: [], pagination: undefined };
}
exports.QueryDenomTracesResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.denomTraces) {
            transfer_1.DenomTrace.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDenomTracesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denomTraces.push(transfer_1.DenomTrace.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
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
            denomTraces: Array.isArray(object === null || object === void 0 ? void 0 : object.denomTraces) ? object.denomTraces.map((e) => transfer_1.DenomTrace.fromJSON(e)) : [],
            pagination: isSet(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.denomTraces) {
            obj.denomTraces = message.denomTraces.map((e) => e ? transfer_1.DenomTrace.toJSON(e) : undefined);
        }
        else {
            obj.denomTraces = [];
        }
        message.pagination !== undefined
            && (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryDenomTracesResponse();
        message.denomTraces = ((_a = object.denomTraces) === null || _a === void 0 ? void 0 : _a.map((e) => transfer_1.DenomTrace.fromPartial(e))) || [];
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageResponse.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQueryParamsRequest() {
    return {};
}
exports.QueryParamsRequest = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseQueryParamsRequest();
        return message;
    },
};
function createBaseQueryParamsResponse() {
    return { params: undefined };
}
exports.QueryParamsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.params !== undefined) {
            transfer_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = transfer_1.Params.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { params: isSet(object.params) ? transfer_1.Params.fromJSON(object.params) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? transfer_1.Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryParamsResponse();
        message.params = (object.params !== undefined && object.params !== null)
            ? transfer_1.Params.fromPartial(object.params)
            : undefined;
        return message;
    },
};
function createBaseQueryDenomHashRequest() {
    return { trace: "" };
}
exports.QueryDenomHashRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.trace !== "") {
            writer.uint32(10).string(message.trace);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDenomHashRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.trace = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { trace: isSet(object.trace) ? String(object.trace) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.trace !== undefined && (obj.trace = message.trace);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryDenomHashRequest();
        message.trace = (_a = object.trace) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQueryDenomHashResponse() {
    return { hash: "" };
}
exports.QueryDenomHashResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.hash !== "") {
            writer.uint32(10).string(message.hash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDenomHashResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hash = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { hash: isSet(object.hash) ? String(object.hash) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.hash !== undefined && (obj.hash = message.hash);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryDenomHashResponse();
        message.hash = (_a = object.hash) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQueryEscrowAddressRequest() {
    return { portId: "", channelId: "" };
}
exports.QueryEscrowAddressRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.portId !== "") {
            writer.uint32(10).string(message.portId);
        }
        if (message.channelId !== "") {
            writer.uint32(18).string(message.channelId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryEscrowAddressRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.portId = reader.string();
                    break;
                case 2:
                    message.channelId = reader.string();
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
            portId: isSet(object.portId) ? String(object.portId) : "",
            channelId: isSet(object.channelId) ? String(object.channelId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.portId !== undefined && (obj.portId = message.portId);
        message.channelId !== undefined && (obj.channelId = message.channelId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseQueryEscrowAddressRequest();
        message.portId = (_a = object.portId) !== null && _a !== void 0 ? _a : "";
        message.channelId = (_b = object.channelId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseQueryEscrowAddressResponse() {
    return { escrowAddress: "" };
}
exports.QueryEscrowAddressResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.escrowAddress !== "") {
            writer.uint32(10).string(message.escrowAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryEscrowAddressResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.escrowAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { escrowAddress: isSet(object.escrowAddress) ? String(object.escrowAddress) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.escrowAddress !== undefined && (obj.escrowAddress = message.escrowAddress);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryEscrowAddressResponse();
        message.escrowAddress = (_a = object.escrowAddress) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.DenomTrace = this.DenomTrace.bind(this);
        this.DenomTraces = this.DenomTraces.bind(this);
        this.Params = this.Params.bind(this);
        this.DenomHash = this.DenomHash.bind(this);
        this.EscrowAddress = this.EscrowAddress.bind(this);
    }
    DenomTrace(request) {
        const data = exports.QueryDenomTraceRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.applications.transfer.v1.Query", "DenomTrace", data);
        return promise.then((data) => exports.QueryDenomTraceResponse.decode(new minimal_1.default.Reader(data)));
    }
    DenomTraces(request) {
        const data = exports.QueryDenomTracesRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.applications.transfer.v1.Query", "DenomTraces", data);
        return promise.then((data) => exports.QueryDenomTracesResponse.decode(new minimal_1.default.Reader(data)));
    }
    Params(request) {
        const data = exports.QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.applications.transfer.v1.Query", "Params", data);
        return promise.then((data) => exports.QueryParamsResponse.decode(new minimal_1.default.Reader(data)));
    }
    DenomHash(request) {
        const data = exports.QueryDenomHashRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.applications.transfer.v1.Query", "DenomHash", data);
        return promise.then((data) => exports.QueryDenomHashResponse.decode(new minimal_1.default.Reader(data)));
    }
    EscrowAddress(request) {
        const data = exports.QueryEscrowAddressRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.applications.transfer.v1.Query", "EscrowAddress", data);
        return promise.then((data) => exports.QueryEscrowAddressResponse.decode(new minimal_1.default.Reader(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
function isSet(value) {
    return value !== null && value !== undefined;
}
