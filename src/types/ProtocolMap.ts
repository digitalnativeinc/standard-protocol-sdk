import { AddressMap } from "types";
import { DividendWhitelistArrayMap } from "./DividendWhitelistArrayMap";

export type ProtocolMap = {
  FACTORY_ADDRESS: AddressMap;
  ROUTER_ADDRESS: AddressMap;
  INIT_CODE_HASH: { FACTORY: AddressMap };
  DIVIDEND_POOL_ADDRESS?: AddressMap;
  MASTER_POOL_ADDRESS?: AddressMap;
  DIVIDEND_POOL_WHITELIST?: DividendWhitelistArrayMap;
};
