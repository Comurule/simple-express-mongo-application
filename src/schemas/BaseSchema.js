const {Schema} = require('mongoose');

/**
 * Base Model wrapper for all schema
 * @param {object} definitions 
 * @param {string} schemaOptions 
 */
class BaseSchema extends Schema {
    constructor(definitions, schemaOptions) {
        super(
            {...definitions},
            {timestamps:true, ...schemaOptions}
        )
    };
};

module.exports = BaseSchema;