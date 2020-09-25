const BaseSchema = require('./BaseSchema');

/**
 * UserSchema:
 * a new instance of the BaseSchema
 */
const userSchema = new BaseSchema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});
module.exports = userSchema;