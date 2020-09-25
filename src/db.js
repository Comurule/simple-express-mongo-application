const mongoose = require('mongoose');


exports.connectToDB = (databaseUrl)=> {
    const defaultOptions = {
        useNewUrlParser: true,
        useCreateIndex: true,
        // useFindAndModify: true,
        useUnifiedTopology: true,
    };
    
    return mongoose.connect(databaseUrl, defaultOptions);        
}