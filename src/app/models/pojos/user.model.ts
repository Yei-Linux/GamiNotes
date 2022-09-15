export class User {
  public email: string;
  public username: string;
  public _id: string;

  constructor(id: string, email: string, username: string) {
    this._id = id;
    this.email = email;
    this.username = username;
  }
}
