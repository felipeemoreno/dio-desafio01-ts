"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DioAccount = void 0;
class DioAccount {
    constructor(name, accountNumber) {
        this.balance = 0;
        this.status = true;
        this.setName = (name) => {
            this.name = name;
            console.log('Nome alterado com sucesso!');
        };
        this.getName = () => {
            return this.name;
        };
        this.deposit = () => {
            if (this.validateStatus()) {
                console.log('Voce depositou');
            }
        };
        this.withdraw = () => {
            console.log('Voce sacou');
        };
        this.getBalance = () => {
            console.log(this.balance);
        };
        this.validateStatus = () => {
            if (this.status) {
                return this.status;
            }
            throw new Error('Conta inválida');
        };
        this.name = name;
        this.accountNumber = accountNumber;
    }
}
exports.DioAccount = DioAccount;
