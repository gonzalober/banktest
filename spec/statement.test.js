const Statement = require("../src/Statement.js");

describe("Statement", function () {
  let statementvar;

  beforeEach(function () {
    statementvar = new Statement();
  });

  it("statement", function () {
    expect(statementvar["header"]).toEqual(
      "date || credit || debit || balance"
    );
  });

  it("stores the transaction in a string", function () {
    let tableWithEntry = new Statement([
      {
        date: "10/12/2019",
        credit: "2000.00",
        debit: "",
        balance: "2000.00",
      },
    ]);
    expect(tableWithEntry.report()).toEqual(
      "date || credit || debit || balance\n 10/12/2019 || 2000.00 ||  || 2000.00"
    );
  });
});
