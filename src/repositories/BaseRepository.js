const mongoose = require('mongoose');

class BaseRepository {
    constructor(modelName, modelSchema) {
        this.name = modelName;
        this.model = mongoose.model(this.name, modelSchema);
    };

    createModel = (data) => this.model.create(data);

    update = (id, data) => this.model.findOneAndUpdate({_id: id}, data, {new: true});

    getById = (id) => this.model.findById(id);

    getOne = (query) => this.model.findOne(query);

    getAll = () => this.model.find({});

    delete = (id) => this.model.deleteOne({_id: id})
};

module.exports = BaseRepository;