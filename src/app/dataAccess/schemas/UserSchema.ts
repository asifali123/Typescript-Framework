import DataAccess = require("./../../dataAccess/DataAccess");
import IUserModel = require("./../../model/interfaces/UserModel");

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

class UserSchema {
   
  static get schema () {
       var schema =  mongoose.Schema({
           name : {
               type: String,
               required: true
           },
           age: {
               type: Number,
               required: true
           },
            address: {
               type: String,
               required: true
           }
       });
       
       return schema;
   }
   
}
var schema = mongooseConnection.model<IUserModel>("Users", UserSchema.schema);
export = schema;