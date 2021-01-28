import express from "express";
import UserController from "../controllers/UserController";
import ArticleController from "../controllers/ArticleController";
import validateData from "../middlewares/validateData";
import UserValidation from "../validations/UserValidation";

const router = express.Router();

// User Login
router.post('/users/login', UserController.login);

// User register
router.post('/users', (req, res, next) => {
    validateData(UserValidation.registerSchema, req.body.user)(req, res, next);
}, UserController.register);

// Article create
router.post('/articles', ArticleController.create);

export default router;
