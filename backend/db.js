const mongoose = require('mongoose');
const mongourl = 'mongodb://localhost:27017/hackathon?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false';

const connectToMongo = () => {
    mongoose.connect(mongourl,() => {
        console.log('Connected to MongoDB');
    });
}

module.exports = connectToMongo;