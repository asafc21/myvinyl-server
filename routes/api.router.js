import express from "express";
import usersRouter from "./api/users.router.js";
import vinylRouter from "./api/vinyl.router.js";
import handleError from "../utils/handleError.js";

const router = express.Router();

router.use("/users", usersRouter);

router.use("/vinyl", vinylRouter);

router.use((req, res) => {
  handleError(res, 404, "not found");
});

export default router;
