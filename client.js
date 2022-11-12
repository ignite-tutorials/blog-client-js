"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IgniteClient = void 0;
const proto_signing_1 = require("@cosmjs/proto-signing");
const stargate_1 = require("@cosmjs/stargate");
const events_1 = require("events");
const defaultFee = {
    amount: [],
    gas: "200000",
};
class IgniteClient extends events_1.EventEmitter {
    constructor(env, signer) {
        super();
        this.registry = [];
        this.env = env;
        this.setMaxListeners(0);
        this.signer = signer;
        const classConstructor = this.constructor;
        classConstructor.plugins.forEach(plugin => {
            const pluginInstance = plugin(this);
            Object.assign(this, pluginInstance.module);
            if (this.registry) {
                this.registry = this.registry.concat(pluginInstance.registry);
            }
        });
    }
    static plugin(plugin) {
        const currentPlugins = this.plugins;
        class AugmentedClient extends this {
        }
        AugmentedClient.plugins = currentPlugins.concat(plugin);
        if (Array.isArray(plugin)) {
            return AugmentedClient;
        }
        return AugmentedClient;
    }
    async signAndBroadcast(msgs, fee, memo) {
        if (this.signer) {
            const { address } = (await this.signer.getAccounts())[0];
            const signingClient = await stargate_1.SigningStargateClient.connectWithSigner(this.env.rpcURL, this.signer, { registry: new proto_signing_1.Registry(this.registry), prefix: this.env.prefix });
            return await signingClient.signAndBroadcast(address, msgs, fee ? fee : defaultFee, memo);
        }
        else {
            throw new Error(" Signer is not present.");
        }
    }
    async useSigner(signer) {
        this.signer = signer;
        this.emit("signer-changed", this.signer);
    }
    async useKeplr(keplrChainInfo = {}) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        // Using queryClients directly because BaseClient has no knowledge of the modules at this stage
        try {
            const queryClient = (await Promise.resolve().then(() => __importStar(require("./cosmos.base.tendermint.v1beta1/module")))).queryClient;
            const stakingQueryClient = (await Promise.resolve().then(() => __importStar(require("./cosmos.staking.v1beta1/module")))).queryClient;
            const bankQueryClient = (await Promise.resolve().then(() => __importStar(require("./cosmos.bank.v1beta1/module"))))
                .queryClient;
            const stakingqc = stakingQueryClient({ addr: this.env.apiURL });
            const qc = queryClient({ addr: this.env.apiURL });
            const node_info = await (await qc.serviceGetNodeInfo()).data;
            const chainId = (_b = (_a = node_info.default_node_info) === null || _a === void 0 ? void 0 : _a.network) !== null && _b !== void 0 ? _b : "";
            const chainName = (chainId === null || chainId === void 0 ? void 0 : chainId.toUpperCase()) + " Network";
            const staking = await (await stakingqc.queryParams()).data;
            const bankqc = bankQueryClient({ addr: this.env.apiURL });
            const tokens = await (await bankqc.queryTotalSupply()).data;
            const addrPrefix = (_c = this.env.prefix) !== null && _c !== void 0 ? _c : "cosmos";
            const rpc = this.env.rpcURL;
            const rest = this.env.apiURL;
            let stakeCurrency = {
                coinDenom: (_f = (_e = (_d = staking.params) === null || _d === void 0 ? void 0 : _d.bond_denom) === null || _e === void 0 ? void 0 : _e.toUpperCase()) !== null && _f !== void 0 ? _f : "",
                coinMinimalDenom: (_h = (_g = staking.params) === null || _g === void 0 ? void 0 : _g.bond_denom) !== null && _h !== void 0 ? _h : "",
                coinDecimals: 0,
            };
            let bip44 = {
                coinType: 118,
            };
            let bech32Config = {
                bech32PrefixAccAddr: addrPrefix,
                bech32PrefixAccPub: addrPrefix + "pub",
                bech32PrefixValAddr: addrPrefix + "valoper",
                bech32PrefixValPub: addrPrefix + "valoperpub",
                bech32PrefixConsAddr: addrPrefix + "valcons",
                bech32PrefixConsPub: addrPrefix + "valconspub",
            };
            let currencies = (_k = (_j = tokens.supply) === null || _j === void 0 ? void 0 : _j.map((x) => {
                var _a, _b, _c;
                const y = {
                    coinDenom: (_b = (_a = x.denom) === null || _a === void 0 ? void 0 : _a.toUpperCase()) !== null && _b !== void 0 ? _b : "",
                    coinMinimalDenom: (_c = x.denom) !== null && _c !== void 0 ? _c : "",
                    coinDecimals: 0,
                };
                return y;
            })) !== null && _k !== void 0 ? _k : [];
            let feeCurrencies = (_m = (_l = tokens.supply) === null || _l === void 0 ? void 0 : _l.map((x) => {
                var _a, _b, _c;
                const y = {
                    coinDenom: (_b = (_a = x.denom) === null || _a === void 0 ? void 0 : _a.toUpperCase()) !== null && _b !== void 0 ? _b : "",
                    coinMinimalDenom: (_c = x.denom) !== null && _c !== void 0 ? _c : "",
                    coinDecimals: 0,
                };
                return y;
            })) !== null && _m !== void 0 ? _m : [];
            let coinType = 118;
            if (chainId) {
                const suggestOptions = {
                    chainId,
                    chainName,
                    rpc,
                    rest,
                    stakeCurrency,
                    bip44,
                    bech32Config,
                    currencies,
                    feeCurrencies,
                    coinType,
                    ...keplrChainInfo,
                };
                await window.keplr.experimentalSuggestChain(suggestOptions);
                window.keplr.defaultOptions = {
                    sign: {
                        preferNoSetFee: true,
                        preferNoSetMemo: true,
                    },
                };
            }
            await window.keplr.enable(chainId);
            this.signer = window.keplr.getOfflineSigner(chainId);
            this.emit("signer-changed", this.signer);
        }
        catch (e) {
            throw new Error("Could not load tendermint, staking and bank modules. Please ensure your client loads them to use useKeplr()");
        }
    }
}
exports.IgniteClient = IgniteClient;
IgniteClient.plugins = [];
