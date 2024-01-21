import express from "express";
import { userRoutes } from "./routes/user";
import { matchRoute } from "./routes/matches";
import { refereeRoute } from "./routes/referees";
import { adversaryRoute } from "./routes/adversery";
import bodyParser from "body-parser";
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/matches", matchRoute);
app.use("/api/v1/adversary", adversaryRoute);
app.use("/api/v1/referee", refereeRoute);

app.listen(3001, () => {
  console.log("Running");
});


