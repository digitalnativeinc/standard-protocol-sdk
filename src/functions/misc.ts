import JSBI from "jsbi";
import { BigintIsh } from "../types";

export function parseBigintIsh(bigintIsh: BigintIsh | bigint): JSBI {
  return bigintIsh instanceof JSBI
    ? bigintIsh
    : typeof bigintIsh === "bigint"
    ? JSBI.BigInt(bigintIsh.toString())
    : JSBI.BigInt(bigintIsh);
}
