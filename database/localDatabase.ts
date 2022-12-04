import { UserProps } from "../global/context/userContext";

export class LocalDatabase {
  private _userTable: UserProps[] = [];

  constructor() {}

  get userTable() {
    return this._userTable;
  }

  addUser(userInfo: UserProps) {
    this._userTable.push(userInfo);
  }
}
