import { CurrencyAmount, Price, Token } from ".";

import { InsufficientInputAmountError } from "../errors";
import { Pair } from "./Pair";
import { WETH9 } from "../constants";
import { computePairAddress } from "../functions";
import { Protocol } from "..";

describe("computePairAddress", () => {
  const protocol = Protocol.SUSHISWAP;
    
  it("should correctly compute the pool address", () => {
    const tokenA = new Token(
      1,
      "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
      18,
      "USDC",
      "USD Coin"
    );
    const tokenB = new Token(
      1,
      "0x6B175474E89094C44Da98b954EedeAC495271d0F",
      18,
      "DAI",
      "DAI Stablecoin"
    );
    const result = computePairAddress({
      factoryAddress: "0x1111111111111111111111111111111111111111",
      tokenA,
      tokenB,
      protocol
    });

    expect(result).toEqual("0xbCfFCD50d09095E48CC5ea02d564CAEe61aBc004");
  });
  it("should give same result regardless of token order", () => {
    const USDC = new Token(
      1,
      "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
      18,
      "USDC",
      "USD Coin"
    );
    const DAI = new Token(
      1,
      "0x6B175474E89094C44Da98b954EedeAC495271d0F",
      18,
      "DAI",
      "DAI Stablecoin"
    );
    let tokenA = USDC;
    let tokenB = DAI;
    const resultA = computePairAddress({
      factoryAddress: "0x1111111111111111111111111111111111111111",
      tokenA,
      tokenB,
      protocol
    });

    tokenA = DAI;
    tokenB = USDC;
    const resultB = computePairAddress({
      factoryAddress: "0x1111111111111111111111111111111111111111",
      tokenA,
      tokenB,
      protocol
    });

    expect(resultA).toEqual(resultB);
  });
});

describe("Pair", () => {
  const USDC = new Token(
    1,
    "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
    18,
    "USDC",
    "USD Coin"
  );
  const DAI = new Token(
    1,
    "0x6B175474E89094C44Da98b954EedeAC495271d0F",
    18,
    "DAI",
    "DAI Stablecoin"
  );

  describe("constructor", () => {
    it("cannot be used for tokens on different chains", () => {
      expect(
        () =>
          new Pair(
            CurrencyAmount.fromRawAmount(USDC, "100"),
            CurrencyAmount.fromRawAmount(WETH9[3], "100"),
            Protocol.SUSHISWAP
          )
      ).toThrow("CHAIN_IDS");
    });
  });

  describe("#getAddress", () => {
    it("returns the correct address", () => {
      expect(Pair.getAddress(USDC, DAI, Protocol.SUSHISWAP)).toEqual(
        "0xAaF5110db6e744ff70fB339DE037B990A20bdace"
      );
    });
  });

  describe("#token0", () => {
    it("always is the token that sorts before", () => {
      expect(
        new Pair(
          CurrencyAmount.fromRawAmount(USDC, "100"),
          CurrencyAmount.fromRawAmount(DAI, "100"),
          Protocol.SUSHISWAP
        ).token0
      ).toEqual(DAI);
      expect(
        new Pair(
          CurrencyAmount.fromRawAmount(DAI, "100"),
          CurrencyAmount.fromRawAmount(USDC, "100"),
          Protocol.SUSHISWAP
        ).token0
      ).toEqual(DAI);
    });
  });
  describe("#token1", () => {
    it("always is the token that sorts after", () => {
      expect(
        new Pair(
          CurrencyAmount.fromRawAmount(USDC, "100"),
          CurrencyAmount.fromRawAmount(DAI, "100"),
          Protocol.SUSHISWAP
        ).token1
      ).toEqual(USDC);
      expect(
        new Pair(
          CurrencyAmount.fromRawAmount(DAI, "100"),
          CurrencyAmount.fromRawAmount(USDC, "100"),
          Protocol.SUSHISWAP
        ).token1
      ).toEqual(USDC);
    });
  });
  describe("#reserve0", () => {
    it("always comes from the token that sorts before", () => {
      expect(
        new Pair(
          CurrencyAmount.fromRawAmount(USDC, "100"),
          CurrencyAmount.fromRawAmount(DAI, "101"),
          Protocol.SUSHISWAP
        ).reserve0
      ).toEqual(CurrencyAmount.fromRawAmount(DAI, "101"));
      expect(
        new Pair(
          CurrencyAmount.fromRawAmount(DAI, "101"),
          CurrencyAmount.fromRawAmount(USDC, "100"),
          Protocol.SUSHISWAP
        ).reserve0
      ).toEqual(CurrencyAmount.fromRawAmount(DAI, "101"));
    });
  });
  describe("#reserve1", () => {
    it("always comes from the token that sorts after", () => {
      expect(
        new Pair(
          CurrencyAmount.fromRawAmount(USDC, "100"),
          CurrencyAmount.fromRawAmount(DAI, "101"),
          Protocol.SUSHISWAP
        ).reserve1
      ).toEqual(CurrencyAmount.fromRawAmount(USDC, "100"));
      expect(
        new Pair(
          CurrencyAmount.fromRawAmount(DAI, "101"),
          CurrencyAmount.fromRawAmount(USDC, "100"),
          Protocol.SUSHISWAP
        ).reserve1
      ).toEqual(CurrencyAmount.fromRawAmount(USDC, "100"));
    });
  });

  describe("#token0Price", () => {
    it("returns price of token0 in terms of token1", () => {
      expect(
        new Pair(
          CurrencyAmount.fromRawAmount(USDC, "101"),
          CurrencyAmount.fromRawAmount(DAI, "100"),
          Protocol.SUSHISWAP
        ).token0Price
      ).toEqual(new Price(DAI, USDC, "100", "101"));
      expect(
        new Pair(
          CurrencyAmount.fromRawAmount(DAI, "100"),
          CurrencyAmount.fromRawAmount(USDC, "101"),
          Protocol.SUSHISWAP
        ).token0Price
      ).toEqual(new Price(DAI, USDC, "100", "101"));
    });
  });

  describe("#token1Price", () => {
    it("returns price of token1 in terms of token0", () => {
      expect(
        new Pair(
          CurrencyAmount.fromRawAmount(USDC, "101"),
          CurrencyAmount.fromRawAmount(DAI, "100"),
          Protocol.SUSHISWAP
        ).token1Price
      ).toEqual(new Price(USDC, DAI, "101", "100"));
      expect(
        new Pair(
          CurrencyAmount.fromRawAmount(DAI, "100"),
          CurrencyAmount.fromRawAmount(USDC, "101"),
          Protocol.SUSHISWAP
        ).token1Price
      ).toEqual(new Price(USDC, DAI, "101", "100"));
    });
  });

  describe("#priceOf", () => {
    const pair = new Pair(
      CurrencyAmount.fromRawAmount(USDC, "101"),
      CurrencyAmount.fromRawAmount(DAI, "100"),
      Protocol.SUSHISWAP
    );
    it("returns price of token in terms of other token", () => {
      expect(pair.priceOf(DAI)).toEqual(pair.token0Price);
      expect(pair.priceOf(USDC)).toEqual(pair.token1Price);
    });

    it("throws if invalid token", () => {
      expect(() => pair.priceOf(WETH9[1])).toThrow("TOKEN");
    });
  });

  describe("#reserveOf", () => {
    it("returns reserves of the given token", () => {
      expect(
        new Pair(
          CurrencyAmount.fromRawAmount(USDC, "100"),
          CurrencyAmount.fromRawAmount(DAI, "101"),
          Protocol.SUSHISWAP
        ).reserveOf(USDC)
      ).toEqual(CurrencyAmount.fromRawAmount(USDC, "100"));
      expect(
        new Pair(
          CurrencyAmount.fromRawAmount(DAI, "101"),
          CurrencyAmount.fromRawAmount(USDC, "100"),
          Protocol.SUSHISWAP
        ).reserveOf(USDC)
      ).toEqual(CurrencyAmount.fromRawAmount(USDC, "100"));
    });

    it("throws if not in the pair", () => {
      expect(() =>
        new Pair(
          CurrencyAmount.fromRawAmount(DAI, "101"),
          CurrencyAmount.fromRawAmount(USDC, "100"),
          Protocol.SUSHISWAP
        ).reserveOf(WETH9[1])
      ).toThrow("TOKEN");
    });
  });

  describe("#chainId", () => {
    it("returns the token0 chainId", () => {
      expect(
        new Pair(
          CurrencyAmount.fromRawAmount(USDC, "100"),
          CurrencyAmount.fromRawAmount(DAI, "100"),
          Protocol.SUSHISWAP
        ).chainId
      ).toEqual(1);
      expect(
        new Pair(
          CurrencyAmount.fromRawAmount(DAI, "100"),
          CurrencyAmount.fromRawAmount(USDC, "100"),
          Protocol.SUSHISWAP
        ).chainId
      ).toEqual(1);
    });
  });
  describe("#involvesToken", () => {
    expect(
      new Pair(
        CurrencyAmount.fromRawAmount(USDC, "100"),
        CurrencyAmount.fromRawAmount(DAI, "100"),
        Protocol.SUSHISWAP
      ).involvesToken(USDC)
    ).toEqual(true);
    expect(
      new Pair(
        CurrencyAmount.fromRawAmount(USDC, "100"),
        CurrencyAmount.fromRawAmount(DAI, "100"),
        Protocol.SUSHISWAP
      ).involvesToken(DAI)
    ).toEqual(true);
    expect(
      new Pair(
        CurrencyAmount.fromRawAmount(USDC, "100"),
        CurrencyAmount.fromRawAmount(DAI, "100"),
        Protocol.SUSHISWAP
      ).involvesToken(WETH9[1])
    ).toEqual(false);
  });
  describe("miscellaneous", () => {
    it("getLiquidityMinted:0", async () => {
      const tokenA = new Token(
        3,
        "0x0000000000000000000000000000000000000001",
        18
      );
      const tokenB = new Token(
        3,
        "0x0000000000000000000000000000000000000002",
        18
      );
      const pair = new Pair(
        CurrencyAmount.fromRawAmount(tokenA, "0"),
        CurrencyAmount.fromRawAmount(tokenB, "0"),
        Protocol.SUSHISWAP
      );

      expect(() => {
        pair.getLiquidityMinted(
          CurrencyAmount.fromRawAmount(pair.liquidityToken, "0"),
          CurrencyAmount.fromRawAmount(tokenA, "1000"),
          CurrencyAmount.fromRawAmount(tokenB, "1000")
        );
      }).toThrow(InsufficientInputAmountError);

      expect(() => {
        pair.getLiquidityMinted(
          CurrencyAmount.fromRawAmount(pair.liquidityToken, "0"),
          CurrencyAmount.fromRawAmount(tokenA, "1000000"),
          CurrencyAmount.fromRawAmount(tokenB, "1")
        );
      }).toThrow(InsufficientInputAmountError);

      const liquidity = pair.getLiquidityMinted(
        CurrencyAmount.fromRawAmount(pair.liquidityToken, "0"),
        CurrencyAmount.fromRawAmount(tokenA, "1001"),
        CurrencyAmount.fromRawAmount(tokenB, "1001")
      );

      expect(liquidity.quotient.toString()).toEqual("1");
    });

    it("getLiquidityMinted:!0", async () => {
      const tokenA = new Token(
        3,
        "0x0000000000000000000000000000000000000001",
        18
      );
      const tokenB = new Token(
        3,
        "0x0000000000000000000000000000000000000002",
        18
      );
      const pair = new Pair(
        CurrencyAmount.fromRawAmount(tokenA, "10000"),
        CurrencyAmount.fromRawAmount(tokenB, "10000"),
        Protocol.SUSHISWAP
      );

      expect(
        pair
          .getLiquidityMinted(
            CurrencyAmount.fromRawAmount(pair.liquidityToken, "10000"),
            CurrencyAmount.fromRawAmount(tokenA, "2000"),
            CurrencyAmount.fromRawAmount(tokenB, "2000")
          )
          .quotient.toString()
      ).toEqual("2000");
    });

    it("getLiquidityValue:!feeOn", async () => {
      const tokenA = new Token(
        3,
        "0x0000000000000000000000000000000000000001",
        18
      );
      const tokenB = new Token(
        3,
        "0x0000000000000000000000000000000000000002",
        18
      );
      const pair = new Pair(
        CurrencyAmount.fromRawAmount(tokenA, "1000"),
        CurrencyAmount.fromRawAmount(tokenB, "1000"),
        Protocol.SUSHISWAP
      );

      {
        const liquidityValue = pair.getLiquidityValue(
          tokenA,
          CurrencyAmount.fromRawAmount(pair.liquidityToken, "1000"),
          CurrencyAmount.fromRawAmount(pair.liquidityToken, "1000"),
          false
        );
        expect(liquidityValue.currency.equals(tokenA)).toBe(true);
        expect(liquidityValue.quotient.toString()).toBe("1000");
      }

      // 500
      {
        const liquidityValue = pair.getLiquidityValue(
          tokenA,
          CurrencyAmount.fromRawAmount(pair.liquidityToken, "1000"),
          CurrencyAmount.fromRawAmount(pair.liquidityToken, "500"),
          false
        );
        expect(liquidityValue.currency.equals(tokenA)).toBe(true);
        expect(liquidityValue.quotient.toString()).toBe("500");
      }

      // tokenB
      {
        const liquidityValue = pair.getLiquidityValue(
          tokenB,
          CurrencyAmount.fromRawAmount(pair.liquidityToken, "1000"),
          CurrencyAmount.fromRawAmount(pair.liquidityToken, "1000"),
          false
        );
        expect(liquidityValue.currency.equals(tokenB)).toBe(true);
        expect(liquidityValue.quotient.toString()).toBe("1000");
      }
    });

    it("getLiquidityValue:feeOn", async () => {
      const tokenA = new Token(
        3,
        "0x0000000000000000000000000000000000000001",
        18
      );
      const tokenB = new Token(
        3,
        "0x0000000000000000000000000000000000000002",
        18
      );
      const pair = new Pair(
        CurrencyAmount.fromRawAmount(tokenA, "1000"),
        CurrencyAmount.fromRawAmount(tokenB, "1000"),
        Protocol["SUSHISWAP"]
      );

      const liquidityValue = pair.getLiquidityValue(
        tokenA,
        CurrencyAmount.fromRawAmount(pair.liquidityToken, "500"),
        CurrencyAmount.fromRawAmount(pair.liquidityToken, "500"),
        true,
        "250000" // 500 ** 2
      );
      expect(liquidityValue.currency.equals(tokenA)).toBe(true);
      expect(liquidityValue.quotient.toString()).toBe("917"); // ceiling(1000 - (500 * (1 / 6)))
    });
  });
});
