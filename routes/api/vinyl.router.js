import express from "express";
import {
  createNewVinylController,
  deleteVinylController,
  getAllMyVinylsController,
  getAllVinylsController,
  getVinylByIdController,
  likeVinylController,
  updateVinylController,
} from "../../controllers/vinyl.controller.js";
import objectIdParamsValidationMiddleware from "../../middlewares/objectIdParamsValidationMiddleware.js";
import authMiddleware from "../../middlewares/auth.mw.js";
import bodyValidationMiddleware from "../../middlewares/bodyValidation.mw.js";
import { newVinylValidation } from "../../validation/validationAdapter.js";

const router = express.Router();

router.get("/", getAllVinylsController);

router.get("/my-vinyls", authMiddleware, getAllMyVinylsController);

router.get("/:id", objectIdParamsValidationMiddleware, getVinylByIdController);

router.post(
  "/",
  authMiddleware,
  bodyValidationMiddleware(newVinylValidation),
  createNewVinylController
);

router.put(
  "/:id",
  authMiddleware,
  objectIdParamsValidationMiddleware,
  bodyValidationMiddleware(newVinylValidation),
  updateVinylController
);

router.patch(
  "/:id",
  authMiddleware,
  objectIdParamsValidationMiddleware,
  likeVinylController
);

router.delete(
  "/:id",
  authMiddleware,
  objectIdParamsValidationMiddleware,
  deleteVinylController
);

export default router;
