const BankAccount = require("./BankAccount");
const NewOperation = require("./NewOperation");

console.log("-------new BankAccount----");
let newbanckacc = new BankAccount();
console.log(newbanckacc);
console.log("-------new Oper----");
let o1 = new NewOperation("deposit", 2000, "10/12/2019");
let o2 = new NewOperation("debit", 400, "11/12/2019");
let o3 = new NewOperation("debit", 2000, "14/12/2019");
console.log(o1);
console.log("----------ADDRECORD----");
console.log(newbanckacc.addRecord(o1));
newbanckacc.addRecord(o2);
newbanckacc.addRecord(o3);
console.log(newbanckacc);
console.log(newbanckacc.printStatament());
