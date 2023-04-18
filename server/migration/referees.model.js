import { DataTypes } from "sequelize";
import sequelize from "./db";
import { Matches } from "./matches.model";

// Table Referees
 const Referees = sequelize.define(
  "Referees",
  {
    Ref_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    F_Name: {
      type: DataTypes.STRING,
    },
    L_Name: {
      type: DataTypes.STRING,
    },
    Age: {
      type: DataTypes.STRING,
    },
    Sex: {
      type: DataTypes.STRING,
    },
    Telephone: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
  }
);

sequelize
  .sync()
  .then(() => console.log("Referee "))
  .catch((error) => console.log(error.message));

Referees.hasMany(Matches,{as: 'match', foreignKey: 'Ref_id'})
export  {Referees}
