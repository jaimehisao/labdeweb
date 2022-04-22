const mongoose = require('mongoose')

const connectDB = async (mongoVar) => {

    try {
        
        await mongoose.connect(mongoVar, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
    
        console.log('MongoDB Connected')

    } catch (err) {
        console.log('Cant connect to MongoDB')
        console.log(err)
    }
}

module.exports = connectDB