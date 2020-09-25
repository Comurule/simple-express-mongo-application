const BaseRepository = require('./BaseRepository');
const taskSchema = require('../schemas/TaskSchema');

class TaskRepository extends BaseRepository {
    constructor () {
        super('Task', taskSchema)
    }
}

module.exports = new TaskRepository;