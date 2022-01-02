import JSBI from "jsbi";

export * from "./addresses";
export * from "./natives";
export * from "./numbers";
export * from "./tokens";
export * from "./protocols";

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000);

export enum SolidityType {
  uint8 = "uint8",
  uint256 = "uint256"
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt("0xff"),
  [SolidityType.uint256]: JSBI.BigInt(
    "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
  )
};
