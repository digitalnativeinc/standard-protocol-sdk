import { NativeCurrency, Token } from "entities";
import { ChainId } from "enums";
import { validateAndParseAddress } from "functions";
import invariant from "tiny-invariant";
import { AnyswapCurrency } from "./AnyswapCurrency";

/**
 * Represents an ERC20 token with a unique address and some metadata.
 */
export class AnyswapToken extends AnyswapCurrency {
  public readonly chainId: ChainId;
  public readonly address: string;

  public constructor(
    chainId: ChainId,
    address: string,
    decimals: number,
    symbol?: string,
    name?: string,
    underlying?: any,

    ContractVersion?: any,
    destChains?: any,
    logoUrl?: any,
    price?: any,
    tokenid?: any,
    version?: any,
    routerToken?: any
  ) {
    super(
      decimals,
      symbol,
      name,
      underlying,
      chainId,
      ContractVersion,
      destChains,
      logoUrl,
      price,
      tokenid,
      version,
      routerToken
    );
    this.chainId = chainId;
    this.address = validateAndParseAddress(address);
  }

  /**
   * Returns true if the two tokens are equivalent, i.e. have the same chainId and address.
   * @param other other token to compare
   */
  public equals(other: AnyswapToken): boolean {
    // short circuit on reference equality
    if (this === other) {
      return true;
    }
    return this.chainId === other.chainId && this.address === other.address;
  }

  public toToken(): Token {
    return new Token(
      this.chainId,
      this.address,
      this.decimals,
      this.symbol,
      this.name,
      true
    );
  }

  /**
   * Returns true if the address of this token sorts before the address of the other token
   * @param other other token to compare
   * @throws if the tokens have the same address
   * @throws if the tokens are on different chains
   */
  public sortsBefore(other: AnyswapToken): boolean {
    // console.log(other)
    // console.log(this)
    invariant(this.chainId === other.chainId, "CHAIN_IDS");
    invariant(this.address !== other.address, "ADDRESSES");
    return this.address.toLowerCase() < other.address.toLowerCase();
  }
}

/**
 * Compares two currencies for equality
 */
export function currencyEquals(
  currencyA: AnyswapCurrency,
  currencyB: AnyswapCurrency
): boolean {
  if (currencyA instanceof AnyswapToken && currencyB instanceof AnyswapToken) {
    return currencyA.equals(currencyB);
  } else if (currencyA instanceof AnyswapToken) {
    return false;
  } else if (currencyB instanceof AnyswapToken) {
    return false;
  } else {
    return currencyA === currencyB;
  }
}

export const WETH = {
  [ChainId.MAINNET]: new AnyswapToken(
    ChainId.MAINNET,
    "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
    18,
    "WETH",
    "Wrapped Ether"
  ),
  [ChainId.ROPSTEN]: new AnyswapToken(
    ChainId.ROPSTEN,
    "0xc778417E063141139Fce010982780140Aa0cD5Ab",
    18,
    "WETH",
    "Wrapped Ether"
  ),
  [ChainId.RINKEBY]: new AnyswapToken(
    ChainId.RINKEBY,
    "0xe41c4939D2CB35A4DD61e852e2aa00D493AF87A3",
    18,
    "WETH",
    "Wrapped Ether"
  ),
  [ChainId.GÖRLI]: new AnyswapToken(
    ChainId.GÖRLI,
    "0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6",
    18,
    "WETH",
    "Wrapped Ether"
  ),
  [ChainId.KOVAN]: new AnyswapToken(
    ChainId.KOVAN,
    "0xd0A1E359811322d97991E03f863a0C30C2cF029C",
    18,
    "WETH",
    "Wrapped Ether"
  ),
  //   [ChainId.HTTEST]: new AnyswapToken(
  //     ChainId.HTTEST,
  //     "0xa5a3c93776ba2e1a78c79e88a2cb5abab2a0097f",
  //     18,
  //     "WETH",
  //     "Wrapped Ether"
  //   ),
  //   [ChainId.HTMAIN]: new AnyswapToken(
  //     ChainId.HTMAIN,
  //     "0x5545153ccfca01fbd7dd11c0b23ba694d9509a6f",
  //     18,
  //     "WETH",
  //     "Wrapped Ether"
  //   ),
  [ChainId.BSC]: new AnyswapToken(
    ChainId.BSC,
    "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
    18,
    "WETH",
    "Wrapped Ether"
  ),
  [ChainId.BSC_TESTNET]: new AnyswapToken(
    ChainId.BSC_TESTNET,
    "0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd",
    18,
    "WETH",
    "Wrapped Ether"
  ),
  [ChainId.MATIC]: new AnyswapToken(
    ChainId.MATIC,
    "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
    18,
    "WETH",
    "Wrapped Ether"
  ),
  [ChainId.XDAI]: new AnyswapToken(
    ChainId.XDAI,
    "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
    18,
    "WETH",
    "Wrapped Ether"
  ),
  [ChainId.FANTOM]: new AnyswapToken(
    ChainId.FANTOM,
    "0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83",
    18,
    "WETH",
    "Wrapped Ether"
  ),
  [ChainId.OKEX]: new AnyswapToken(
    ChainId.OKEX,
    "0x8F8526dbfd6E38E3D8307702cA8469Bae6C56C15",
    18,
    "WETH",
    "Wrapped Ether"
  ),
  [ChainId.HARMONY]: new AnyswapToken(
    ChainId.HARMONY,
    "0x6983D1E6DEf3690C4d616b13597A09e6193EA013",
    18,
    "WETH",
    "Wrapped Ether"
  ),
  [ChainId.AVALANCHE]: new AnyswapToken(
    ChainId.AVALANCHE,
    "0xf20d962a6c8f70c731bd838a3a388D7d48fA6e15",
    18,
    "WETH",
    "Wrapped Ether"
  )
};
