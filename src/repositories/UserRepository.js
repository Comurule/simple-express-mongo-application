const BaseRepository = require('./BaseRepository');
const userSchema = require('../schemas/UserSchema');

class UserRepository extends BaseRepository {
    constructor () {
        super('User', userSchema)
    }
}

module.exports = new UserRepository;