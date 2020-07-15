export class User {
  id: number;
  name: string;
  cardNumber: string;
  pinCode: string;
  balance: number;

  constructor(user: User) {
    this.id = user.id;
    this.name = user.name;
    this.cardNumber = user.cardNumber;
    this.pinCode = user.pinCode;
    this.balance = user.balance;
  }
}
