export type DividendWhitelistArrayMap = {
  [chainId: number]: DividendWhitelist[];
};
export type DividendWhitelist = {
  address: string;
  token0: string;
  token1: string;
};
