import express from "express";
import UserController from "../controllers/UserController";
import ArticleController from "../controllers/ArticleController";
import authenticate from "../middlewares/authenticate";
import validateData from "../middlewares/validateData";
import UserValidation from "../validations/UserValidation";

const router = express.Router();

// User Login
router.post('/users/login', validateData(UserValidation.loginSchema), UserController.login);

// User register
router.post('/users', validateData(UserValidation.registerSchema), UserController.register);

// Article create
router.post('/articles', authenticate(), ArticleController.create);

export default router;
