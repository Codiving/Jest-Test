const SuperMarket = require("../superMarket.js");

describe("SuperMarket", () => {
  let superMarket = null;

  beforeEach(() => {
    superMarket = new SuperMarket();
  });

  describe("초기 금액 확인", () => {
    it("초기 잔고는 5000원입니다", () => {
      expect(superMarket.balance).toBe(5000);
    });

    it("snack 금액은 2000원입니다", () => {
      expect(superMarket.snack).toBe(2000);
    });

    it("chocolate 금액은 1000원입니다", () => {
      expect(superMarket.chocolate).toBe(1000);
    });

    it("icecream 금액은 3000원입니다", () => {
      expect(superMarket.icecream).toBe(3000);
    });

    it("gum 금액은 500원입니다", () => {
      expect(superMarket.gum).toBe(500);
    });
  });

  describe("구매 확인", () => {
    it("2000원 지불 / snack 1개 구매 / 거스름돈 : 0원 / 잔고 : 5000원", () => {
      expect(superMarket.buy("snack", 1, 2000)).toBe(0);
      expect(superMarket.getItemPrice("balance")).toBe(5000);
    });

    it("2000원 지불 / chocolate 2개 구매 / 거스름돈 : 0원 / 잔고 : 5000원", () => {
      expect(superMarket.buy("chocolate", 2, 2000)).toBe(0);
      expect(superMarket.getItemPrice("balance")).toBe(5000);
    });

    it("3500원 지불 / icecream 1개 구매 / 거스름돈 : 500원 / 잔고 : 5500원", () => {
      expect(superMarket.buy("icecream", 1, 3500)).toBe(500);
      expect(superMarket.getItemPrice("balance")).toBe(5500);
    });

    it("1400원 지불 / gum 3개 구매 / 거스름돈 : -1원 / 잔고 : 5000원", () => {
      expect(() => superMarket.buy("gum", 3, 1400)).toThrow(
        "금액이 부족합니다."
      );
      expect(superMarket.getItemPrice("balance")).toBe(5000);
    });
  });
});
