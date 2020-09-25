const BaseSchema = require('./BaseSchema');

/**
 * UserSchema:
 * a new instance of the BaseSchema
 */
const taskSchema = new BaseSchema({
    status: {
        type: String,
        enum: ['started', 'cancelled', 'done'],
        required: true
    },
    message: {
        type: String,
        required: true
    },
    contactList: {
        type: String,
        required: true
    }
});
module.exports = taskSchema;