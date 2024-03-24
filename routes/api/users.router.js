import express from "express";
import {
  deleteUserController,
  getAllUsersController,
  getUserController,
  loginController,
  registerController,
  updateUserController,
} from "../../controllers/users.controller.js";
import bodyValidationMiddleware from "../../middlewares/bodyValidation.mw.js";
import {
  editUserValidation,
  loginValidation,
  registerValidation,
} from "../../validation/validationAdapter.js";
import authMiddleware from "../../middlewares/auth.mw.js";
import adminOnlyMiddleware from "../../middlewares/adminOnly.mw.js";
import objectIdParamsValidationMiddleware from "../../middlewares/objectIdParamsValidationMiddleware.js";
import adminOrOwnMiddleware from "../../middlewares/adminOrOwn.mw.js";

const router = express.Router();

router.get("/", authMiddleware, adminOnlyMiddleware, getAllUsersController);

router.post(
  "/register",
  bodyValidationMiddleware(registerValidation),
  registerController
);

router.post(
  "/login",
  bodyValidationMiddleware(loginValidation),
  loginController
);

router.get(
  "/:id",
  authMiddleware,
  objectIdParamsValidationMiddleware,
  adminOrOwnMiddleware,
  getUserController
);

router.put(
  "/:id",
  authMiddleware,
  objectIdParamsValidationMiddleware,
  adminOrOwnMiddleware,
  bodyValidationMiddleware(editUserValidation),
  updateUserController
);

router.delete(
  "/:id",
  authMiddleware,
  objectIdParamsValidationMiddleware,
  adminOrOwnMiddleware,
  deleteUserController
);

export default router;
