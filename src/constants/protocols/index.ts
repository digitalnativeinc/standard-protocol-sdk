import { Protocol, Contract } from "../../enums";
import { STANDARD_PROTOCOL } from "./standardprotocol";
import { SUSHISWAP } from "./sushiswap";

export const PROTOCOLS = {
  STANDARD_PROTOCOL,
  SUSHISWAP
};
export const getDividendPoolWhitelist = (
  protocol: Protocol,
  chainId: number
) => {
  return PROTOCOLS[protocol]?.DIVIDEND_POOL_WHITELIST?.[chainId];
};
export const getDividendPoolAddress = (protocol: Protocol, chainId: number) => {
  return PROTOCOLS[protocol]?.DIVIDEND_POOL_ADDRESS?.[chainId];
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

export const getInitCodeHash = (
  protocol: Protocol,
  chainId: number,
  contract: Contract
) => {
  return PROTOCOLS[protocol].INIT_CODE_HASH[contract][chainId];
};
