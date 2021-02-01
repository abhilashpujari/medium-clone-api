import {getManager} from "typeorm";
import {User} from "../entity/User";
import HttpBadRequestException from "../exceptions/HttpBadRequestException";
import Utils from "../utils/Utils";
import JWTUtils from "../utils/JWTUtils";

const register = async (data) => {
    const entityManager = getManager();
    let user = new User();
    user.email = data.email;
    user.username = data.username;
    user.password = data.password;
    return await entityManager.save(user);
}

const authenticate = async (data) => {
    const entityManager = getManager();
    const user = await entityManager.findOne(User, {where: {email: data.email}});

    if (!user) {
        throw new HttpBadRequestException('Invalid email or password');
    }

    let isValidPassword = await Utils.comparePassword(data.password, user.password);
    if (!isValidPassword) {
        throw new HttpBadRequestException('Invalid email or password');
    }

    let token = await JWTUtils.generateToken({
        id: user.id,
        username: user.username
    });

    return {
        bio: user.bio,
        email: user.email,
        id: user.id,
        image: user.image,
        token,
        username: user.username
    };
}

export default {
    authenticate,
    register
}
