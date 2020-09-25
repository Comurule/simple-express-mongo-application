const autoBind = require('auto-bind');
const cache = require('../utils/Redis');
const taskRepository = require('../repositories/TaskRepository');
const { encrypt, verifyCrypt } = require('../utils/passwordCrypt');
const { jwtSign } = require('../utils/authToken');

class TaskService {
    constructor() {
        this.taskRepository = taskRepository;
        this.cache = cache;
        autoBind(this);
    }

    createATask = (data) =>{
        const { message, contactList } = data;
        const task = await this.taskRepository.createModel({
            status: 'started', message, contactList
        });

        const taskId = task.id;
        const queueName = `consumer_${data.userId}_${taskId}`;
        await this.cache.publishTask(queueName, taskId);
    };

    manageTask = async (handleTask, queueName) => {
        while(true) {
            this.cache.subscribeTask(queueName)
                .then(task=>{ 
                    handleTask(task).then().catch(error=>{
                        //handle task failed.
                    })
                })
                .catch(error=> {
                    //handle Redis connection issues
                    process.exit(1);
                })
        }
    };

    handleTask = (task)=> {
        console.log(task);
    };
};

module.exports = new TaskService;