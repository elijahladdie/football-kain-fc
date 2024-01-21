import { DataTypes } from "sequelize";
import sequelize from "./db";
import { Matches } from "./matches.model";


const User = sequelize.define(
  "Users",
  {
    user_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },  
    u_Name: {
      type: DataTypes.STRING,
    },
    u_password: {
      type: DataTypes.STRING,
    },
    userType:{type: DataTypes.STRING,
      defaultValue: "Admin",}
  },
  {
    sequelize,
  }
);
sequelize
  .sync()
  .then(() => console.log(" User "))
  .catch((error) => console.log(error.message));

User.hasMany(Matches,{as: 'user', foreignKey: 'user_id'})

export { User };

