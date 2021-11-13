import { AnyswapToken } from "./AnyswapToken";
import invariant from "tiny-invariant";
import JSBI from "jsbi";

import { BigintIsh } from "../types";
import { AnyswapCurrencyAmount } from "./AnyswapCurrencyAmount";

export class AnyswapTokenAmount extends AnyswapCurrencyAmount {
  public readonly token: AnyswapToken;

  // amount _must_ be raw, i.e. in the native representation
  public constructor(token: AnyswapToken, amount: BigintIsh | bigint) {
    super(token, amount);
    this.token = token;
  }

  public add(other: AnyswapTokenAmount): AnyswapTokenAmount {
    invariant(this.token.equals(other.token), "TOKEN");
    return new AnyswapTokenAmount(this.token, JSBI.add(this.raw, other.raw));
  }

  public subtract(other: AnyswapTokenAmount): AnyswapTokenAmount {
    invariant(this.token.equals(other.token), "TOKEN");
    return new AnyswapTokenAmount(
      this.token,
      JSBI.subtract(this.raw, other.raw)
    );
  }
}
