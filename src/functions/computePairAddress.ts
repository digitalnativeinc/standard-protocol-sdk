import { keccak256, pack } from "@ethersproject/solidity";

import { getInitCodeHash, getFactoryAddress } from "../constants";
import { Token } from "../entities";
import { getCreate2Address } from "@ethersproject/address";
import { Contract, Protocol, ChainId } from "../enums";

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

export const computePairAddress2 = ({
  chainId,
  tokenA,
  tokenB,
  protocol
}: {
  chainId: ChainId;
  tokenA: string;
  tokenB: string;
  protocol: Protocol;
}): string => {
  const [token0, token1] =
    tokenA.toLowerCase() < tokenB.toLowerCase()
      ? [tokenA, tokenB]
      : [tokenB, tokenA]; // does safety checks
  return getCreate2Address(
    getFactoryAddress(protocol, chainId),
    keccak256(["bytes"], [pack(["address", "address"], [token0, token1])]),
    getInitCodeHash(protocol, chainId, Contract.FACTORY)
  );
};
