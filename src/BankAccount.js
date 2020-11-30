class BankAccount {
  constructor() {
    this._balance = 0;
    this.record = [];
  }
  balance() {
    return this._balance;
  }
  addBalance(balance) {
    return (this._balance = this._balance + balance);
  }
  //entries quantity
  addRecord(record) {
    return this.record.push(record);
  }
}

module.exports = BankAccount;
