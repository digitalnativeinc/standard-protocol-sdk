import { Protocol } from "enums/Protocol";
import { STANDARD_PROTOCOL } from "./standardprotocol";
import { SUSHISWAP } from "./sushiswap";

export const PROTOCOLS = {
  STANDARD_PROTOCOL,
  SUSHISWAP
};

export const getFactoryAddresses = (protocol: Protocol, chainId: number) => {
  return PROTOCOLS[protocol].FACTORY_ADDRESS[chainId];
};

export const getRouterAddresses = (protocol: Protocol, chainId: number) => {
  return PROTOCOLS[protocol].ROUTER_ADDRESS[chainId];
};

export const getInitCodeHash = (protocol: Protocol) => {
  return PROTOCOLS[protocol].INIT_CODE_HASH;
};
