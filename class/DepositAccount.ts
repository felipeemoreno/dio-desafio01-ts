import { DioAccount } from "./DioAccount";

export class DepositAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  deposit = (): void => {
    if (this.validateStatus()) {
      this.setBalance(10);
      console.log("Você depositou");
    }
  };
}
