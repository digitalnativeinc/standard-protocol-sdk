import { Protocol } from "enums/Protocol";
import { STANDARD_PROTOCOL } from "./standardprotocol";
import { SUSHISWAP } from "./sushiswap";

export const PROTOCOLS = {
  STANDARD_PROTOCOL,
  SUSHISWAP
};

export const getFactoryAddress = (protocol: Protocol, chainId: number) => {
  return PROTOCOLS[protocol].FACTORY_ADDRESS[chainId];
};

export const getRouterAddress = (protocol: Protocol, chainId: number) => {
  return PROTOCOLS[protocol].ROUTER_ADDRESS[chainId];
};

export const getMasterPoolAddress = (protocol: Protocol, chainId: number) => {
  return PROTOCOLS[protocol].MASTER_POOL_ADDRESS?.[chainId];
};

export const getInitCodeHash = (protocol: Protocol) => {
  return PROTOCOLS[protocol].INIT_CODE_HASH;
};
