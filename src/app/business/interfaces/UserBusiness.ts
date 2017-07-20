import BaseBusiness = require('./base/BaseBusiness');
// BaseBusiness takes a Model (Generics) to specific entity i.e UserModel here
import IUserModel = require('../../model/interfaces/UserModel');

interface UserBusiness extends BaseBusiness<IUserModel> {

}

export = UserBusiness;