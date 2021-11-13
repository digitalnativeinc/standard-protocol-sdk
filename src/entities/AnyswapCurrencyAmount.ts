import { anyswapCurrencyEquals } from "./AnyswapToken";
import { AnyswapCurrency, ETHER } from "./AnyswapCurrency";
import invariant from "tiny-invariant";
import JSBI from "jsbi";
import _Big from "big.js";
import toFormat from "toformat";
import { BigintIsh } from "../types";
import { Rounding } from "../enums";
import { TEN, SolidityType } from "../constants";
import { parseBigintIsh, validateSolidityTypeInstance } from "../functions";
import { Fraction } from "./fraction";

const Big = toFormat(_Big);

export class AnyswapCurrencyAmount extends Fraction {
  public readonly currency: AnyswapCurrency;

  /**
   * Helper that calls the constructor with the ETHER currency
   * @param amount ether amount in wei
   */
  public static ether(amount: BigintIsh | bigint): AnyswapCurrencyAmount {
    return new AnyswapCurrencyAmount(ETHER, amount);
  }

  // amount _must_ be raw, i.e. in the native representation
  protected constructor(currency: AnyswapCurrency, amount: BigintIsh | bigint) {
    const parsedAmount = parseBigintIsh(amount);
    validateSolidityTypeInstance(parsedAmount, SolidityType.uint256);

    super(parsedAmount, JSBI.exponentiate(TEN, JSBI.BigInt(currency.decimals)));
    this.currency = currency;
  }

  public get raw(): JSBI {
    return this.numerator;
  }

  public add(other: AnyswapCurrencyAmount): AnyswapCurrencyAmount {
    invariant(anyswapCurrencyEquals(this.currency, other.currency), "TOKEN");
    return new AnyswapCurrencyAmount(
      this.currency,
      JSBI.add(this.raw, other.raw)
    );
  }

  public subtract(other: AnyswapCurrencyAmount): AnyswapCurrencyAmount {
    invariant(anyswapCurrencyEquals(this.currency, other.currency), "TOKEN");
    return new AnyswapCurrencyAmount(
      this.currency,
      JSBI.subtract(this.raw, other.raw)
    );
  }

  public toSignificant(
    significantDigits: number = 6,
    format?: object,
    rounding: Rounding = Rounding.ROUND_DOWN
  ): string {
    return super.toSignificant(significantDigits, format, rounding);
  }

  public toFixed(
    decimalPlaces: number = this.currency.decimals,
    format?: object,
    rounding: Rounding = Rounding.ROUND_DOWN
  ): string {
    invariant(decimalPlaces <= this.currency.decimals, "DECIMALS");
    return super.toFixed(decimalPlaces, format, rounding);
  }

  public toExact(format: object = { groupSeparator: "" }): string {
    Big.DP = this.currency.decimals;
    return new Big(this.numerator.toString())
      .div(this.denominator.toString())
      .toFormat(format);
  }
}
