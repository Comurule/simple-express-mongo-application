const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const dotenv = require('dotenv');
const routes = require('./routes');
const { connectToDB } = require('./db');

dotenv.config();
const app = express();
const port = process.env.port || 8080;
const databaseUrl = process.env.DATABASE_URL

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Base Routes
app.use('/', routes);

//DB connect
connectToDB(databaseUrl)
    .then(()=>{ console.log('Connected to Database...'); })
    .catch(error=>{ console.log(error); });



app.listen(port, ()=>{
    console.log(`App is running and listening on Port: ${port}`);
});