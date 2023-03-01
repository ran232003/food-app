export class User {
  fullName!: string; // the ! sign is  = require. must have this value
  email!: string;
  id!: string;
  password!: string; // the ? sign is  = optional. this value is not mandatory
  token!: string;
  constructor(user: any) {
    this.email = user.email;
    this.email = user.fullName;
    this.email = user.id;
    this.email = user.token;
  }
}
