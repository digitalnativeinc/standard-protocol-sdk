import { Protocol } from "enums/Protocol";
import { STANDARD_PROTOCOL } from "./standardprotocol";
import { SUSHISWAP } from "./sushiswap";

const protocols = {
  STANDARD_PROTOCOL,
  SUSHISWAP
};

export const getFactoryAddresses = (protocol: Protocol, chainId: number) => {
  return protocols[protocol].FACTORY_ADDRESS[chainId];
};

export const getRouterAddress = (protocol: Protocol, chainId: number) => {
  return protocols[protocol].ROUTER_ADDRESS[chainId];
};

export const getInitCodeHash = (protocol: Protocol) => {
  return protocols[protocol].INIT_CODE_HASH;
};
