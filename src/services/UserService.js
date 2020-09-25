const autoBind = require('auto-bind');
const cache = require('../utils/Redis');
const userRepository = require('../repositories/UserRepository');
const { encrypt, verifyCrypt } = require('../utils/passwordCrypt');
const { jwtSign, jwtVerify } = require('../utils/authToken');

class UserService {
    constructor() {
        this.userRepository = userRepository;
        this.cache = cache;
        autoBind(this);
    }

    createAUser = async (data) => {
        let { email, password } = data;
        const checkUser = await this.userRepository.getOne({ email });
        if (checkUser) return null;

        password = await encrypt(password);

        const newUser = await this.userRepository.createModel({ email, password });
        await this.cache.setObject('user', newUser._id, newUser, 86400);
        return newUser;
    };

    loginAUser = async (data) => {
        const { email, password } = data;
        let user = await this.userRepository.getOne({ email });
        if (!user) return null;

        const validPassword = await verifyCrypt(password, user.password);
        if (!validPassword) return undefined;

        const token = await jwtSign({ _id: user._id });
        user = {
            _id: user.id,
            email: user.email,
        };

        await this.cache.setObject('user', user._id, user, 86400);
        return { ...user, token };
    };

    getAUserDetail = async (req) => {
        console.log(req.headers.authorization);
        const token = req.headers.authorization.replace('Bearer ', '');
        const {_id} = await jwtVerify(token);
        console.log(_id);

        const user = await this.userRepository.getById(_id);
        return user;
    }
};

module.exports = new UserService;