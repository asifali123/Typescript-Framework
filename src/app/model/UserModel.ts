import IUserModel = require('./interfaces/UserModel');

class UserModel {
    private _userModel : IUserModel;

    constructor(userModel: UserModel){
        this._userModel = userModel;
    }

    get name(): string {
        return this._userModel.name;
    }

    get age(): number {
        return this._userModel.age;
    }

    get address(): string {
        return this._userModel.address;
    }
}

Object.seal(UserModel);
export = UserModel;