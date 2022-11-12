"use strict";
// Generated by Ignite ignite.com/cli
Object.defineProperty(exports, "__esModule", { value: true });
exports.queryClient = exports.txClient = exports.registry = void 0;
const proto_signing_1 = require("@cosmjs/proto-signing");
const registry_1 = require("./registry");
const rest_1 = require("./rest");
exports.registry = new proto_signing_1.Registry(registry_1.msgTypes);
const defaultFee = {
    amount: [],
    gas: "200000",
};
const txClient = ({ signer, prefix, addr } = { addr: "http://localhost:26657", prefix: "cosmos" }) => {
    return {};
};
exports.txClient = txClient;
const queryClient = ({ addr: addr } = { addr: "http://localhost:1317" }) => {
    return new rest_1.Api({ baseURL: addr });
};
exports.queryClient = queryClient;
class SDKModule {
    constructor(client) {
        this.registry = [];
        this.query = (0, exports.queryClient)({ addr: client.env.apiURL });
        this.updateTX(client);
        client.on('signer-changed', (signer) => {
            this.updateTX(client);
        });
    }
    updateTX(client) {
        var _a;
        const methods = (0, exports.txClient)({
            signer: client.signer,
            addr: client.env.rpcURL,
            prefix: (_a = client.env.prefix) !== null && _a !== void 0 ? _a : "cosmos",
        });
        this.tx = methods;
        for (let m in methods) {
            this.tx[m] = methods[m].bind(this.tx);
        }
    }
}
;
const Module = (test) => {
    return {
        module: {
            CosmosAuthV1Beta1: new SDKModule(test)
        },
        registry: registry_1.msgTypes
    };
};
exports.default = Module;
