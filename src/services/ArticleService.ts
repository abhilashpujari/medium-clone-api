import {getManager} from "typeorm";
import {Article} from "../entity/Article";
import Utils from "../utils/Utils";
import ApiException from "../exceptions/ApiException";
import {Tag} from "../entity/Tag";
import HttpUnauthorizedException from "../exceptions/HttpUnauthorizedException";

const checkIfArticleExists = async (title) => {
    const entityManager = getManager();
    return await entityManager.findOne(Article, {where: {title}});
}

const create = async (data) => {
    let article = new Article();
    article.author = data.user;
    return update(article, data);
}

const update = async (article: Article, data) => {
    console.log(article.author);
    if (!article.author || (article.author.id !== data.user.id)) {
        throw new HttpUnauthorizedException();
    }

    let tags = [];
    const {body, description, title, tagList = []} = data.body;

    const entityManager = getManager();

    article.body = body;
    article.description = description;
    article.slug = Utils.slugify(title);

    if (article.title !== title && (await checkIfArticleExists(article.title))) {
        throw new ApiException('Article with same title exists, please choose the different title for your article', 400);
    }

    article.title = title;

    if (tagList) {
        for (let tag in tagList) {
            let tagFound = await entityManager.findOne(Tag, {where: {name: tag}});
            if (tagFound) {
                // @ts-ignore
                tags.push(tagFound);
            }
        }
    }

    article.tagList = tags;
    return await entityManager.save(article);
}

export default {
    create,
    update
}
