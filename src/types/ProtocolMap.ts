import { AddressMap } from "types";

export type ProtocolMap = {
  FACTORY_ADDRESS: AddressMap;
  ROUTER_ADDRESS: AddressMap;
  MASTER_POOL_ADDRESS?: AddressMap;
  INIT_CODE_HASH: { FACTORY: AddressMap };
  DIVIDEND_ADDRESS?: AddressMap;
};
