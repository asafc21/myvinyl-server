import express from "express";
import env from "dotenv";
env.config();
import logger from "./loggers/loggerAdapter.js";
import cors from "cors";
import errorMiddleware from "./middlewares/error.mw.js";
import apiRouter from "./routes/api.router.js";
import connectToDb from "./model/dbAdapter.js";
import {
  initialUsers,
  initialVinyls,
} from "./initialData/initialDataService.js";
let app = express();
const port = 3000;

app.use(cors());
app.use(logger());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api", apiRouter);
app.use(errorMiddleware);
app.listen(port, () => {
  connectToDb().then(async () => {
    let userId = await initialUsers();
    if (userId) await initialVinyls(userId);
  });
});

export default app;
