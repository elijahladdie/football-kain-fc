import express from "express";
import {
  signup,
  testjoi,
  getAllUsers,
  signin,
} from "../controller/user.controller";
import { checkAge } from "../middleware/checkAge";
import { checkAuth } from "../middleware/checkAuth";

const userRoutes = express.Router();
userRoutes.get("/all", checkAuth ,getAllUsers);
userRoutes.post("/signup", signup);
userRoutes.post("/signin", signin);
userRoutes.post('/age',checkAge,(req,res)=> res.send({message :"Age is equal or Over 26"}));
userRoutes.get("/", (req, res) => {
  res.send({message:""})
});


export { userRoutes };
