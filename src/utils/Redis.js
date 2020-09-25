const autoBind = require('auto-bind');
const redis = require('redis');
const { promisifyAll } = require('bluebird');
const dotenv = require('dotenv');

const Redis = promisifyAll(redis);

dotenv.config()
const config = {
    host: process.env.REDIS_SERVER_HOST,
    port: process.env.REDIS_SERVER_PORT
};

class RedisClient {
    constructor() {
        this.client = Redis.createClient({
            host: config.host,
            port: config.port
        });
        autoBind(this);
    }

    getClient = () => this.client;

    setObject = async (hash, key, value, expiryTime) =>{
        const stringValue = typeof value === 'string'? value : JSON.stringify(value);
        const keySet = await this.client.hmsetAsync(hash, key.toString(), stringValue, 'EX', expiryTime);

        console.log('keySet:', keySet);

        if(keySet === 0) console.log(`Key: ${key} already exists in redis hash`);
        if(keySet === 1) console.log(`Key: ${key} saved to redis`);
    };

    getObject = async (hash, key) => {
        const value = await this.client.hgetAsync(hash, key);
        return value ? JSON.parse(value) : {};
    };

    deleteKey = async (key) => {
        console.log(`deleting object with key: ${key}...`);
        await this.client.delAsync(key);
        console.log(`Object with key: ${key}... deleted`);
    };

    publishTask = (queueName, taskId) => { this.client.rpush(queueName, taskId) };

    subscribeTask = (queueName) => this.client.blpopAsync(queueName, 0);

    closeInstance = async () => {
        await this.client.quit();
    };
}

module.exports = new RedisClient;