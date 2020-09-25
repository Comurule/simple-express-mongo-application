const autoBind = require('auto-bind');
const userService = require('../services/UserService');
const { successResWithData, errorRes } = require('../utils/apiResponse');

class UserController {
    constructor() {
        this.userService = userService;
        autoBind(this);
    }

    register = async (req, res) => {
        const { email, password } = req.body;
        try {
            const user = await this.userService.createAUser({ email, password });
            if(!user) return errorRes(res, 400, `${email} exists in the database`)
            return successResWithData(
                res, 
                'Registered successfully',
                user
            );            
        } catch (error) {
            console.log(error);
            return res.status(500)
                .json({
                    status: false,
                    message: error.message
                })
        }
    };

    login = async(req, res) => {
        try {
            const user = await this.userService.loginAUser(req.body);
            if(!user) return typeof user == 'undefined' ?
                errorRes(res, 204, 'Invalid Password') :
                errorRes(res, 400, 'User does not exist')
            return successResWithData(
                res,
                `Welcome ${user.email}`,
                user
            );
            
        } catch (error) {
            console.log(error)
            return res.status(400)
                .json({
                    status: false,
                    message: error.message
            })
        }
    };

    dashboard = async(req, res) => {
        try {
            const user = await this.userService.getAUserDetail(req);
            if(!user) return errorRes(res, 400, 'User does not exist');
            return successResWithData(
                res,
                'User Dashboard details',
                user
            );
        } catch (error) {
            console.log(error)
        }
    };
};

module.exports = new UserController;