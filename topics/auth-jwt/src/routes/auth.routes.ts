import express from "express";
import {
  loginController,
  logoutController,
  refreshController,
  registerController,
} from "../controllers/jwt-auth.controller";
import { validation } from "../middlewares/validation.middleware";
import { UserSchema } from "../validators/user.schema";

export const router = express.Router();

router.post("/register", validation(UserSchema), registerController);
router.post("/login", validation(UserSchema), loginController);
router.post("/logout", logoutController);
router.post("/refresh", refreshController);
router.get("/health", (_, res) => res.send("ok"));
