const BankAccount = require("../src/BankAccount.js");
const Statement = require("../src/Statement");
const NewOperation = require("../src/NewOperation");

describe("BankAccount", function () {
  let bankaccountvar;

  beforeEach(function () {
    bankaccountvar = new BankAccount();
  });

  it("SpyOn", function () {
    const spy = jest.spyOn(Statement.prototype, "report");
    let o1 = new NewOperation("credit", 2000, "10/12/2019");
    bankaccountvar.addRecord(o1);
    expect(bankaccountvar.printStatament()).toContain("10/12/2019");
    //report only once
    expect(spy.mock.calls.length).toEqual(1);
    let firstCall = spy.mock.calls[0];
    //report doesn't expect any arguments
    expect(firstCall).toEqual([]);
  });

  it("addRecord", function () {
    let o1 = new NewOperation("credit", 2000, "10/12/2019");
    let o2 = new NewOperation("credit", 120, "15/12/2019");
    bankaccountvar.addRecord(o1);
    bankaccountvar.addRecord(o2);
    expect(bankaccountvar["operations"].length).toEqual(2);
  });

  it("the Statement should be able to call new() on Bankaccount", function () {
    const newStatement = new Statement();
    expect(newStatement).toBeTruthy();
  });

  it("when printStatement function is called should print the statement", function () {
    let o1 = new NewOperation("credit", 2000, "10/12/2019");
    bankaccountvar.addRecord(o1);
    expect(bankaccountvar.printStatament()).toContain("10/12/2019");
  });

  it("balance changed after a deposit and withdraw", function () {
    let o2 = new NewOperation("debit", 2000, "12/12/2019");
    bankaccountvar.addRecord(o2);
    expect(bankaccountvar.printStatament()).toContain(-2000.0);
  });

  it("should trow an error for invalid input", function () {
    let o1 = new NewOperation("wrongOpType", 2000, "12/12/2019");
    expect(() => bankaccountvar.addRecord(o1)).toThrow(
      new Error("OperationType must be deposit or debit")
    );
  });
});
