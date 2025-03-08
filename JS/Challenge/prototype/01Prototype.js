// You need to implement the BankAccount constructor function and its prototype methods

function BankAccount(balance) {
  this.balance = 0;
  this.transactions = [];
}

BankAccount.prototype.deposit = function (amount) {
  this.balance += amount;
  this.transactions.push(`Deposited ${amount}`);
};

BankAccount.prototype.withdraw = function (amount) {
  if (this.balance > amount) {
    this.balance -= amount;
    this.transactions.push(`Withdrew ${amount}`);
  } else {
    this.transactions.push("Insufficient balance");
  }
};

BankAccount.prototype.getTransactionHistory = function () {
  return this.transactions;
};
