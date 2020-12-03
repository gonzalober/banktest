const TableEntry = require("../TableEntry.js");

describe("TableEntry", function () {
  let tableEntryvar;

  beforeEach(function () {
    tableEntryvar = new TableEntry();
  });

  it("printStatement", function () {
    bankaccountvar.addRecord(o1);
    bankaccountvar.addRecord(o2);
    expect(bankaccountvar.printStatament()).toContain(
      "10/12/2019" && "11/12/2019"
    );
  });
});
