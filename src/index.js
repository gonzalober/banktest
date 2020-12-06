const BankAccount = require("./BankAccount");
const NewOperation = require("./NewOperation");

console.log("-------new BankAccount----");
let newbanckacc = new BankAccount();
console.log(newbanckacc);
console.log("-------new Oper----");
let o1 = new NewOperation("credit", 2000, "08/11/2018");
let o2 = new NewOperation("debit", 400, "11/12/2018");

console.log(o1);
console.log("----------ADDRECORD----");
let aaa = newbanckacc.addRecord(o1);
console.log(typeof aaa);
newbanckacc.addRecord(o2);

console.log(newbanckacc.printStatament());
