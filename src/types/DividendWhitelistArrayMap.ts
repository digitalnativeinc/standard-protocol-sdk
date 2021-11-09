export type DividendWhitelistArrayMap = {
  [chainId: number]: {
    pairs: DividendWhitelistPair[];
    tokens: DividendWhitelistToken[];
  };
};

export type DividendWhitelistPair = {
  address: string;
  token0: string;
  token1: string;
  symbol: string;
  name: string;
};

export type DividendWhitelistToken = {
  address: string;
  decimals: number;
  symbol: string;
  name: string;
};
