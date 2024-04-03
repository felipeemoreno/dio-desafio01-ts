import { CompanyAccount } from "./class/CompanyAccount";
import { DepositAccount } from "./class/DepositAccount";
import { PeopleAccount } from "./class/PeopleAccount";

const depositAccount: DepositAccount = new DepositAccount("Nath", 10);
depositAccount.deposit();
console.log(depositAccount.getBalance());
depositAccount.withdraw(9);
console.log(depositAccount.getBalance());

const peopleAccount: PeopleAccount = new PeopleAccount(454, "Felipe", 11);
peopleAccount.deposit(500);
console.log(peopleAccount.getBalance());
peopleAccount.withdraw(299);
console.log(peopleAccount.getBalance());

const companyAccount: CompanyAccount = new CompanyAccount("Dio", 12);
companyAccount.getLoan(1000);
console.log(companyAccount.getBalance());
companyAccount.withdraw(100);
console.log(companyAccount.getBalance());
companyAccount.deposit(100);
console.log(companyAccount.getBalance());
