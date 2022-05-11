const mongoose = require('mongoose')

const connectDB = async (mongoVar) => {

    options = {
        useUnifiedTopology: true,
        dbName: 'CodekraftCluster',
        serverSelectionTimeoutMS: 5000,
    }

    try {

        await mongoose.connect(mongoVar, options);
    
        console.log('MongoDB Connected')

    } catch (err) {
        if (err.name === 'MongooseServerSelectionError') {
            // console.log(err.reason)
            // console.log(err.reason.servers);
        } else {
            // console.log(err)
        }
        console.log(err)
        console.log('Cant connect to MongoDB')
    }
}

module.exports = connectDB