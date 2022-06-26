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

export const getDividendPoolWhitelistPairs = (
  protocol: Protocol,
  chainId: number
) => {
  return PROTOCOLS[protocol]?.DIVIDEND_POOL_WHITELIST?.[chainId]?.pairs;
};

export const getDividendPoolWhitelistTokens = (
  protocol: Protocol,
  chainId: number
) => {
  return PROTOCOLS[protocol]?.DIVIDEND_POOL_WHITELIST?.[chainId]?.tokens;
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

export const getXStndAddress = (protocol: Protocol, chainId: number) => {
  return PROTOCOLS[protocol]?.XSTND_ADDRESS?.[chainId];
};

export const getMtrAddress = (protocol: Protocol, chainId: number) => {
  return PROTOCOLS[protocol]?.METER_ADDRESS?.[chainId];
};

export const getV1Address = (protocol: Protocol, chainId: number) => {
  return PROTOCOLS[protocol]?.V1_ADDRESS?.[chainId];
};

export const getVaultManagerAddress = (protocol: Protocol, chainId: number) => {
  return PROTOCOLS[protocol]?.VAULT_MANAGER_ADDRESS?.[chainId];
};

export const getDiaOracleAddress = (protocol: Protocol, chainId: number) => {
  return PROTOCOLS[protocol]?.VAULT_ORACLE_ADDRESS?.[chainId];
};

export const getInitCodeHash = (
  protocol: Protocol,
  chainId: number,
  contract: Contract
) => {
  return PROTOCOLS[protocol].INIT_CODE_HASH[contract][chainId];
};
