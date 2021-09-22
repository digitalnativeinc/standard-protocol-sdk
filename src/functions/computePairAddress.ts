import { keccak256, pack } from "@ethersproject/solidity";

import { getInitCodeHash } from "../constants";
import { Token } from "../entities";
import { getCreate2Address } from "@ethersproject/address";
import { Contract, Protocol } from "../enums";

export const computePairAddress = ({
  factoryAddress,
  tokenA,
  tokenB,
  protocol
}: {
  factoryAddress: string;
  tokenA: Token;
  tokenB: Token;
  protocol: Protocol;
}): string => {
  const [token0, token1] = tokenA.sortsBefore(tokenB)
    ? [tokenA, tokenB]
    : [tokenB, tokenA]; // does safety checks
  return getCreate2Address(
    factoryAddress,
    keccak256(
      ["bytes"],
      [pack(["address", "address"], [token0.address, token1.address])]
    ),
    getInitCodeHash(protocol, tokenA.chainId, Contract.FACTORY)
  );
};
