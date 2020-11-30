const BankAccount = require("../src/BankAccount.js");

describe("BankAccount", function () {
  let bankaccountvar;
  beforeEach(function () {
    bankaccountvar = new BankAccount();
  });

  it("balance", function () {
    expect(bankaccountvar.balance()).toEqual(0);
  });
  it("addBalance", function () {
    expect(bankaccountvar.addBalance(1)).toEqual(1);
  });
  it("addRecord", function () {
    expect(bankaccountvar.addRecord()).toEqual(1);
  });
});
