const Statement = require("./Statement");
const TableEntry = require("./TableEntry");
class BankAccount {
  constructor() {
    this.operations = [];
  }

  addRecord(operation) {
    if (
      operation["operationType"] !== "credit" &&
      operation["operationType"] !== "debit"
    ) {
      throw new Error("OperationType must be deposit or debit");
    }
    this.operations.push(operation);
    this.operations.sort(function (a, b) {
      let datePartsA = a["day"].split("/");
      let inputDateA = new Date(
        +datePartsA[2],
        +datePartsA[1] - 1,
        +datePartsA[0]
      );
      let datePartsB = b["day"].split("/");
      let inputDateB = new Date(
        +datePartsB[2],
        +datePartsB[1] - 1,
        +datePartsB[0]
      );
      return inputDateA - inputDateB;
    });
  }

  printStatament() {
    let resultStatement = [];
    let balance = 0;
    this.operations.forEach(function (operation) {
      let date = operation["day"];
      let credit =
        operation["operationType"] === "credit" ? operation["amount"] : 0;
      let debit =
        operation["operationType"] === "debit" ? operation["amount"] : 0;
      balance =
        (operation["operationType"] === "debit"
          ? -operation["amount"]
          : operation["amount"]) + balance;
      let operationTable = new TableEntry(date, credit, debit, balance);
      resultStatement.push(operationTable);
    });
    let statement = new Statement(resultStatement.reverse());
    return statement.report();
  }
}
module.exports = BankAccount;
