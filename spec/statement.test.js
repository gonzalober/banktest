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
});
