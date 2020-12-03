# Bank tech test

Objectives:

- Practising a tech test.

- Practising OO design and TDD skills.

- Reflecting on and improving your own work.

## Specification

### Requirements

- You should be able to interact with your code via a REPL like IRB or the JavaScript console.
- Deposits, withdrawal.
- Account statement (date, amount, balance) printing.
- Data can be kept in memory (it doesn't need to be stored to a database or anything).

### Acceptance criteria

**Given** a client makes a deposit of 1000 on 10-01-2012  
**And** a deposit of 2000 on 13-01-2012  
**And** a withdrawal of 500 on 14-01-2012  
**When** she prints her bank statement  
**Then** she would see

```
date || credit || debit || balance
14/01/2012 || || 500.00 || 2500.00
13/01/2012 || 2000.00 || || 3000.00
10/01/2012 || 1000.00 || || 1000.00
```

## Self-assessment

Once you have completed the challenge and feel happy with your solution, here's a form to help you reflect on the quality of your code: https://docs.google.com/forms/d/1Q-NnqVObbGLDHxlvbUfeAC7yBCf3eCjTmz6GOqC9Aeo/edit

### Solution design:

- The way that the solution was structured is the following:
  - The problem needed the creation of new operations that can be stored in an array with its variables (operationType(debit/credit), amount, day).
  - Each of the operation have to follow a TableEntry format and in order to do that the problem needed the creation of a class.
  - Finally, the information stored needs to be print out. Following that logic, and Statement class object was added.
- In the BankAccount class the code has two dependencies TableEntry and Statement. I thought that was reduntant running tests over the TableEntry class as I am already testing that in the bankaccount tests.

### How to install and run code and tests:

- test framework used: npm install --save-dev jest
  - test coverage: jest --coverage --coverageDirectory=output/coverage/jest
  - to run the tests => npm test
- npm install
- repl node
