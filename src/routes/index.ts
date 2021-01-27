import express from "express";
import UserController from "../controllers/UserController";
import ArticleController from "../controllers/ArticleController";

const router = express.Router();

// User Login
router.route('/users/login').post(UserController.login);

// User register
router.route('/users').post(UserController.register);

// Article create
router.route('/articles').post(ArticleController.create);

export default router;
