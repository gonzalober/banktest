class TableEntry {
  constructor(date, credit, debit, balance) {
    this.date = this.formatDate(date);
    this.credit = this.formatAmount(credit);
    this.debit = this.formatAmount(debit);
    this.balance = this.formatAmount(balance);
  }
  formatDate(dateinput) {
    let dateParts = dateinput.split("/");
    let inputDate = new Date(+dateParts[2], +dateParts[1] - 1, +dateParts[0]);
    return (
      ("0" + inputDate.getDate()).slice(-2) +
      "/" +
      ("0" + (inputDate.getMonth() + 1)).slice(-2) +
      "/" +
      inputDate.getFullYear()
    );
  }
  formatAmount(n) {
    return "" + (n === 0 || n === "" ? "" : Number(n).toFixed(2));
  }
}
module.exports = TableEntry;
