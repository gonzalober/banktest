class Statement {
  constructor(tableEntries) {
    this.tableEntries = tableEntries;
    this.header = "date || credit || debit || balance";
  }
  report() {
    let transaction = "";
    this.tableEntries.forEach((element) => {
      transaction += `\n ${element.date} || ${element.credit} || ${element.debit} || ${element.balance}`;
    });
    return this.header + transaction;
  }
}
module.exports = Statement;
