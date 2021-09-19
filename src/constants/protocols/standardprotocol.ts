import { ProtocolMap } from "types/ProtocolMap";
import { ChainId } from "../../enums";

export const STANDARD_PROTOCOL: ProtocolMap = {
  FACTORY_ADDRESS: {
    [ChainId.MAINNET]: "0xC0AEe478e3658e2610c5F7A4A2E1777cE9e4f2Ac",
    [ChainId.RINKEBY]: "0xb10db5fc1c2ca4d72e6ebe1a9494b61fa3b71385",
    [ChainId.ROPSTEN]: "0xa41A122F29ebfB4c36C8D8B3C008C8C71102Ade0",
    [ChainId.GÖRLI]: "0xc35DADB65012eC5796536bD9864eD8773aBc74C4",
    [ChainId.KOVAN]: "0x414e4EDB62e8C95BA4E10703c49AC20533E6CcCe",
    [ChainId.SHIBUYA]: "0x1310A6c52132b6C8a74373b6ed5b77404921e26A",
    [ChainId.FANTOM]: "0xc35DADB65012eC5796536bD9864eD8773aBc74C4",
    [ChainId.FANTOM_TESTNET]: "",
    [ChainId.MATIC]: "0xc35DADB65012eC5796536bD9864eD8773aBc74C4",
    [ChainId.MATIC_TESTNET]: "0xc35DADB65012eC5796536bD9864eD8773aBc74C4",
    [ChainId.XDAI]: "0xc35DADB65012eC5796536bD9864eD8773aBc74C4",
    [ChainId.BSC]: "0xc35DADB65012eC5796536bD9864eD8773aBc74C4",
    [ChainId.BSC_TESTNET]: "0xc35DADB65012eC5796536bD9864eD8773aBc74C4",
    [ChainId.ARBITRUM]: "0xc35DADB65012eC5796536bD9864eD8773aBc74C4",
    [ChainId.ARBITRUM_TESTNET]: "",
    [ChainId.MOONBEAM_TESTNET]: "0x2Ce3F07dD4c62b56a502E223A7cBE38b1d77A1b5",
    [ChainId.AVALANCHE]: "0xc35DADB65012eC5796536bD9864eD8773aBc74C4",
    [ChainId.AVALANCHE_TESTNET]: "0xd00ae08403B9bbb9124bB305C09058E32C39A48c",
    [ChainId.HECO]: "0xc35DADB65012eC5796536bD9864eD8773aBc74C4",
    [ChainId.HECO_TESTNET]: "0xc35DADB65012eC5796536bD9864eD8773aBc74C4",
    [ChainId.HARMONY]: "0xc35DADB65012eC5796536bD9864eD8773aBc74C4",
    [ChainId.HARMONY_TESTNET]: "0xc35DADB65012eC5796536bD9864eD8773aBc74C4",
    [ChainId.OKEX]: "0xc35DADB65012eC5796536bD9864eD8773aBc74C4",
    [ChainId.OKEX_TESTNET]: "0xc35DADB65012eC5796536bD9864eD8773aBc74C4",
    [ChainId.CELO]: "0xc35DADB65012eC5796536bD9864eD8773aBc74C4",
    [ChainId.PALM]: "0xc35DADB65012eC5796536bD9864eD8773aBc74C4",
    [ChainId.PALM_TESTNET]: "",
    [ChainId.MOONRIVER]: "0xc35DADB65012eC5796536bD9864eD8773aBc74C4"
  },
  ROUTER_ADDRESS: {
    [ChainId.MAINNET]: "0xd9e1cE17f2641f24aE83637ab66a2cca9C378B9F",
    [ChainId.RINKEBY]: "0x349617EF2db3D862815Dc1F35C44Eb3F32a3d3dD",
    [ChainId.ROPSTEN]: "0x264df23E4E62BB0d47473e853ab3f0E1e6193425",
    [ChainId.GÖRLI]: "0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506",
    [ChainId.KOVAN]: "0xDC4E3be13CD73BAC3C22489D224726d1Aa1B714e",
    [ChainId.SHIBUYA]: "0x5d079f9f247F2A22fF8326C2EAb38609E54a865a",
    [ChainId.FANTOM]: "0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506",
    [ChainId.FANTOM_TESTNET]: "",
    [ChainId.MATIC]: "0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506",
    [ChainId.MATIC_TESTNET]: "0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506",
    [ChainId.XDAI]: "0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506",
    [ChainId.BSC]: "0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506",
    [ChainId.BSC_TESTNET]: "0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506",
    [ChainId.ARBITRUM]: "0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506",
    [ChainId.ARBITRUM_TESTNET]: "",
    [ChainId.MOONBEAM_TESTNET]: "0xeB5c2BB5E83B51d83F3534Ae21E84336B8B376ef",
    [ChainId.AVALANCHE]: "0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506",
    [ChainId.AVALANCHE_TESTNET]: "0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506",
    [ChainId.HECO]: "0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506",
    [ChainId.HECO_TESTNET]: "0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506",
    [ChainId.HARMONY]: "0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506",
    [ChainId.HARMONY_TESTNET]: "0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506",
    [ChainId.OKEX]: "0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506",
    [ChainId.OKEX_TESTNET]: "0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506",
    [ChainId.CELO]: "0x1421bDe4B10e8dd459b3BCb598810B1337D56842",
    [ChainId.PALM]: "0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506",
    [ChainId.PALM_TESTNET]: "",
    [ChainId.MOONRIVER]: "0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506"
  },
  INIT_CODE_HASH:
    "0x9dde38437f264879cef59ac43dd3fac60bdd0fc6ce5e858c2c5c5ac949161bb3"
};
