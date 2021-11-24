import { ProtocolMap } from "types/ProtocolMap";
import { ChainId } from "../../enums";

export const STANDARD_PROTOCOL: ProtocolMap = {
  XSTND_ADDRESS: {
    [ChainId.MAINNET]: "0xAd41F311C835224447c54C98fADf5E0AD9Eff077",
    [ChainId.SHIDEN]: "0xfC76114C5AdeBfa257153eA82b8594C3B25baebe",
    [ChainId.METIS]: "0xbf4Dd73c9f90E9F2dDBa56933cEd7EafdF56a8A9"
  },
  FACTORY_ADDRESS: {
    [ChainId.MAINNET]: "0x53AC1d1FA4F9F6c604B8B198cE29A50d28cbA893",
    [ChainId.RINKEBY]: "0xF659492744608B595670c1508aa0F5b92B84B94d",
    [ChainId.ROPSTEN]: "0xa41A122F29ebfB4c36C8D8B3C008C8C71102Ade0",
    [ChainId.GÖRLI]: "0xc35DADB65012eC5796536bD9864eD8773aBc74C4",
    [ChainId.KOVAN]: "0x414e4EDB62e8C95BA4E10703c49AC20533E6CcCe",
    [ChainId.SHIBUYA]: "0x0E60C35FCf3184dcE5CF04D4b736e56F2DE7CaF7",
    [ChainId.SHIDEN]: "0x073386AE3292299a5814B00bC1ceB8f2bfC92c51",
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
    [ChainId.MOONRIVER]: "0xc35DADB65012eC5796536bD9864eD8773aBc74C4",
    [ChainId.METIS]: "0xFA68bAAdBDCf014fA20bD1A4542967AE40Ddca53"
  },
  ROUTER_ADDRESS: {
    [ChainId.MAINNET]: "0x6C78D71ce7300343e3633E0c45D6c7A79fEe4650",
    [ChainId.RINKEBY]: "0x744E0aD1484044d505d18Fc9A2285766978B63Ed",
    [ChainId.ROPSTEN]: "0x264df23E4E62BB0d47473e853ab3f0E1e6193425",
    [ChainId.GÖRLI]: "0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506",
    [ChainId.KOVAN]: "0xDC4E3be13CD73BAC3C22489D224726d1Aa1B714e",
    [ChainId.SHIBUYA]: "0xF8D9C5094e96ccf7BA52BAbBc366f62569dFfB32",
    [ChainId.SHIDEN]: "0x3B3A270104390dCdbB0a51E5b80a73a7b5E9f0d4",
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
    [ChainId.MOONRIVER]: "0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506",
    [ChainId.METIS]: "0x722377A047e89CA735f09Eb7CccAb780943c4CB4",
  },
  INIT_CODE_HASH: {
    FACTORY: {
      [ChainId.MAINNET]:
        "0x914b7167277393b1c321f92b1b4746aaee9273174bc623118623f8dc4ba6c2d4",
      [ChainId.RINKEBY]:
        "0x58b6b98149f255c091cb484ebd5bb0ed5aff4516a67cf1551ce2ba53d69e7a8c",
      [ChainId.SHIBUYA]:
        "0x324d7ced3a19bff8f7a62f474e7d22b44450225b20944731595e8e252d3784bd",
      [ChainId.SHIDEN]:
        "0xc36a317d9baf1012b39130a243b15514920fc5cd09455f3de79de6d42243ec61"
    }
  },
  DIVIDEND_POOL_WHITELIST: {
    [ChainId.MAINNET]: {
      pairs: [],
      tokens: []
    },
    [ChainId.RINKEBY]: {
      pairs: [
        {
          address: "0x5ea23619fe6d692963e86574d9d1c798f4fc1626",
          token0: "0xc778417e063141139fce010982780140aa0cd5ab",
          token1: "0xc7ad46e0b8a400bb3c915120d284aafba8fc4735",
          symbol: "LTR",
          name: "Standard LTR Token"
        }
      ],
      tokens: []
    },
    [ChainId.SHIBUYA]: {
      pairs: [
        {
          address: "0x7c0D5aEDFA1AF74C75362CcA3608159A61A4d80c",
          token0: "0x321F318e7C276c93Cf3094fd3a9d7c4362fd19FB",
          token1: "0xB0a1AA4CB76c0e35d9Ac9eba422bF76534Bf155A",
          symbol: "LTR",
          name: "Standard LTR Token"
        }
      ],
      tokens: []
    },
    [ChainId.SHIDEN]: {
      pairs: [
        {
          address: "0x9B2814756fb9D9aB1E60324baD4686Fdd66d93fd",
          token0: "0x0f933Dc137D21cA519ae4C7E93f87a4C8EF365Ef",
          token1: "0x332730a4F6E03D9C55829435f10360E13cfA41Ff",
          symbol: "WSDN/BNB",
          name: "WSDN-BNB LTR Token"
        },
        {
          address: "0x1EaB04c15dca24bEa6c29f545D630Ce9392C0d3d",
          token0: "0x0f933Dc137D21cA519ae4C7E93f87a4C8EF365Ef",
          token1: "0x65e66a61D0a8F1e686C2D6083ad611a10D84D97A",
          symbol: "WSDN/BUSD",
          name: "WSDN-BUSD LTR Token"
        },
        {
          address: "0xBc14873c7daeB1887950083030AFd2FF9C9B20a0",
          token0: "0x0f933Dc137D21cA519ae4C7E93f87a4C8EF365Ef",
          token1: "0x722377A047e89CA735f09Eb7CccAb780943c4CB4",
          symbol: "WSDN/STND",
          name: "WSDN-STND LTR Token"
        },
        {
          address: "0xa6f213f63973c2815fa9C8079965f933694a3251",
          token0: "0x722377A047e89CA735f09Eb7CccAb780943c4CB4",
          token1: "0xfA9343C3897324496A05fC75abeD6bAC29f8A40f",
          symbol: "STND/USDC",
          name: "STND-USDC LTR Token"
        },
        {
          address: "0x1A313816bFEbe895C92514f3049f82166B723003",
          token0: "0x0f933Dc137D21cA519ae4C7E93f87a4C8EF365Ef",
          token1: "0xfA9343C3897324496A05fC75abeD6bAC29f8A40f",
          symbol: "WSDN/USDC",
          name: "WSDN-USDC LTR Token"
        },
        {
          address: "0x0B754a6E8213410E702fFd49f3cd4e812E09058f",
          token0: "0x0f933Dc137D21cA519ae4C7E93f87a4C8EF365Ef",
          token1: "0x818ec0A7Fe18Ff94269904fCED6AE3DaE6d6dC0b",
          symbol: "WSDN/USDT",
          name: "WSDN-USDT LTR Token"
        },
        {
          address: "0xCFd26d28d13B201f8431a9511AEE790B6800559D",
          token0: "0x0f933Dc137D21cA519ae4C7E93f87a4C8EF365Ef",
          token1: "0x922D641a426DcFFaeF11680e5358F34d97d112E1",
          symbol: "WSDN/WBTC",
          name: "WSDN-WBTC LTR Token"
        }
      ],
      tokens: [
        {
          address: "0x0f933Dc137D21cA519ae4C7E93f87a4C8EF365Ef",
          decimals: 18,
          symbol: "WSDN",
          name: "Wrapped Shiden"
        }
      ]
    }
  },
  DIVIDEND_POOL_ADDRESS: {
    [ChainId.MAINNET]: "0xd40a4D4a073322dfBc30e93578370a211291ae82",
    [ChainId.RINKEBY]: "0x45Fa9F11B06dfF3f4B04746629523c21FB2caDb9",
    [ChainId.ROPSTEN]: "",
    [ChainId.GÖRLI]: "",
    [ChainId.KOVAN]: "",
    [ChainId.SHIBUYA]: "0x368ea929c4B871BF68678cDF07ABB7e4bC9e59c3",
    [ChainId.SHIDEN]: "0x670Cf2628816d95b36B1A4Db2dfba80eaEBd7b78",
    [ChainId.FANTOM]: "",
    [ChainId.FANTOM_TESTNET]: "",
    [ChainId.MATIC]: "",
    [ChainId.MATIC_TESTNET]: "",
    [ChainId.XDAI]: "",
    [ChainId.BSC]: "",
    [ChainId.BSC_TESTNET]: "",
    [ChainId.ARBITRUM]: "",
    [ChainId.ARBITRUM_TESTNET]: "",
    [ChainId.MOONBEAM_TESTNET]: "",
    [ChainId.AVALANCHE]: "",
    [ChainId.AVALANCHE_TESTNET]: "",
    [ChainId.HECO]: "",
    [ChainId.HECO_TESTNET]: "",
    [ChainId.HARMONY]: "",
    [ChainId.HARMONY_TESTNET]: "",
    [ChainId.OKEX]: "",
    [ChainId.OKEX_TESTNET]: "",
    [ChainId.CELO]: "",
    [ChainId.PALM]: "",
    [ChainId.PALM_TESTNET]: "",
    [ChainId.MOONRIVER]: ""
  }
};
