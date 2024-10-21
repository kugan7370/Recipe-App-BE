import express from "express";
import userController from "../controllers/userController.js";
import { validate } from "../validation/index.js";
import { createUserValidationRules, updateUserValidationRules } from "../validation/userValidation.js";
import verifyUserToken from "../middleware/verifyUserToken.js";
const router = express.Router();

router.post(
  "/register",
  validate(createUserValidationRules),
  userController.createUserController
);
router.post("/login", userController.loginUserController);
router.get("/", userController.getAllUserController);
router.get("/:id", userController.getUserByIdController);
router.put("/:id", verifyUserToken, validate(updateUserValidationRules), userController.updateUserController);
router.delete("/:id", verifyUserToken, userController.deleteUserController);

export default router;
