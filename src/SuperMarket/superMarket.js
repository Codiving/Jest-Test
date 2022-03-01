class SuperMarket {
  constructor() {
    this.balance = 5000;

    this.snack = 2000;
    this.chocolate = 1000;
    this.icecream = 3000;
    this.gum = 500;
  }

  // 잔돈 및 item 금액 확인
  getItemPrice(item) {
    return this[item];
  }

  // 구매할 수 있는 경우 return 잔돈
  // 구매할 돈이 부족하여 구매할 수 없는 경우 return -1
  buy(item, count, paidAmount) {
    const totalPrice = this.getItemPrice(item) * count;

    if (paidAmount >= totalPrice) {
      this.balance += paidAmount - totalPrice;
      return paidAmount - totalPrice;
    } else {
      return -1;
    }
  }
}

module.exports = SuperMarket;
