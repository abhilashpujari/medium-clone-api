import UserValidation from "../validations/UserValidation";

const register = async (data) => {
    try {
        await UserValidation.register(data).validate();
        return true;
    } catch (e) {
        throw new Error(e.message);
    }
}

export default {
    register
}
