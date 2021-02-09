import express from "express";
import UserController from "../controllers/UserController";
import ArticleController from "../controllers/ArticleController";
import authenticate from "../middlewares/authenticate";
import validateData from "../middlewares/validateData";
import UserValidation from "../validations/UserValidation";
import ArticleValidation from "../validations/ArticleValidation";

const router = express.Router();

// User Login
router.post('/users/login', validateData(UserValidation.loginSchema), UserController.login);

// User register
router.post('/users', validateData(UserValidation.registerSchema), UserController.register);

// Article create
router.post('/articles', authenticate(), validateData(ArticleValidation.createSchema), ArticleController.create);

// Article update
router.put('/articles/:id', authenticate(), validateData(ArticleValidation.updateSchema), ArticleController.update);

// Article view
router.get('/articles/:id', ArticleController.view);

export default router;
