import {NextFunction, Request, Response} from "express";
import ArticleService from "../services/ArticleService";
import {getManager} from "typeorm";
import {Article} from "../entity/Article";
import HttpNotFoundException from "../exceptions/HttpNotFoundException";

const create = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const responseData = await ArticleService.create(req);
        res.status(201).json(responseData);
    } catch (error) {
        next(error);
    }
}

const update = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const entityManager = getManager();
        const article = await entityManager.getRepository(Article).findOne(req.params.id, {relations: ["author"]});
        if (article) {
            const responseData = await ArticleService.update(article, req);
            res.status(201).json(responseData);
        } else {
            throw new HttpNotFoundException(`Article not found with id ${req.params.id}`);
        }

    } catch (error) {
        next(error);
    }
}

const view = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const entityManager = getManager();
        const article = await entityManager.getRepository(Article).findOne({
            where: {id: req.params.id},
            relations: ["author"]
        });

        if (article) {
            res.status(201).json(article);
        } else {
            throw new HttpNotFoundException(`Article not found with id ${req.params.id}`);
        }

    } catch (error) {
        next(error);
    }
}

export default {
    create,
    update,
    view
};
