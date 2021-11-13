import JSBI from "jsbi";
import { validateSolidityTypeInstance } from "../functions";

import { SolidityType } from "../constants";

/**
 * A currency is any fungible financial instrument on Ethereum, including Ether and all ERC20 tokens.
 *
 * The only instance of the base class `Currency` is Ether.
 */
export class AnyswapCurrency {
  public readonly address?: string;
  public readonly decimals: number;
  public readonly symbol?: string;
  public readonly name?: string;
  public readonly underlying?: any;
  public readonly chainId?: any;

  public readonly ContractVersion?: any;
  public readonly destChains?: any;
  public readonly logoUrl?: any;
  public readonly price?: any;
  public readonly tokenid?: any;
  public readonly version?: any;
  public readonly routerToken?: any;

  /**
   * The only instance of the base class `Currency`.
   */
  public static readonly ETHER: AnyswapCurrency = new AnyswapCurrency(
    18,
    "BASECURRENCY",
    "BASECURRENCY"
  );

  /**
   * Constructs an instance of the base class `Currency`. The only instance of the base class `Currency` is `Currency.ETHER`.
   * @param decimals decimals of the currency
   * @param symbol symbol of the currency
   * @param name of the currency
   * @param underlying of is underlying
   * @param chainId of is chainId
   */
  protected constructor(
    decimals: number,
    symbol?: string,
    name?: string,
    underlying?: any,
    chainId?: any,
    ContractVersion?: any,
    destChains?: any,
    logoUrl?: any,
    price?: any,
    tokenid?: any,
    version?: any,
    routerToken?: any
  ) {
    validateSolidityTypeInstance(JSBI.BigInt(decimals), SolidityType.uint8);

    this.decimals = decimals;
    this.symbol = symbol;
    this.name = name;
    this.underlying = underlying;
    this.chainId = chainId;
    this.ContractVersion = ContractVersion;
    this.destChains = destChains;
    this.logoUrl = logoUrl;
    this.price = price;
    this.tokenid = tokenid;
    this.version = version;
    this.routerToken = routerToken;
  }
}

const ETHER = AnyswapCurrency.ETHER;
export { ETHER };
