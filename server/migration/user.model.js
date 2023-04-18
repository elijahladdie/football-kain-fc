import { DataTypes } from "sequelize";
import sequelize from "./db";
import { Matches } from "./matches.model";
import { Adversary } from "./adversary.model";
import {Referees} from "./referees.model"

const User = sequelize.define(
  "Users",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    Name: {
      type: DataTypes.STRING,
    },
    u_Name: {
      type: DataTypes.STRING,
    },
    u_Password: {
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

