import {getManager} from "typeorm";
import {User} from "../entity/User";
import HttpBadRequestException from "../exceptions/HttpBadRequestException";

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

    return user;
}

export default {
    authenticate,
    register
}
