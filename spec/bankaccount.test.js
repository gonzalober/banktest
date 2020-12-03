const BankAccount = require("../src/BankAccount.js");
const NewOperation = require("../src/NewOperation");

describe("BankAccount", function () {
  let bankaccountvar;
  let o1;
  let o2;
  let o3;
  beforeEach(function () {
    bankaccountvar = new BankAccount();
    o1 = new NewOperation("deposit", 2000, "10/12/2019");
    o2 = new NewOperation("debit", 400, "11/12/2019");
    o3 = new NewOperation("debit", 2100, "14/12/2019");
  });

  it("printStatement", function () {
    bankaccountvar.addRecord(o1);
    bankaccountvar.addRecord(o2);
    expect(bankaccountvar.printStatament()).toContain(
      "10/12/2019" && "11/12/2019"
    );
  });

  it("balance changed after a deposit and withdraw", function () {
    bankaccountvar.addRecord(o1);
    expect(bankaccountvar.printStatament()).toContain(2000);
  });
});
