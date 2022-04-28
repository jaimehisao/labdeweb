const mongoose = require('mongoose')
const { Schema } = mongoose

const DocumentsSchema = new Schema({
    fileName: {
        type: String,
        required: [true, 'Please provide a name for the file']
    },
    file: {
        type: Buffer, 
        required: true
    },
    activityType: {
        type: String, 
        enum : ['RETO', 'ACTIVIDAD', 'PRESENTACION'],
    },
    level: {
        type: String, 
        enum : ['VIDEO JUEGOS', 'PYTHON BASICO', 'PYTHON INTERMEDIO'],
        required: true, 
    },
})

const Document = mongoose.model('Document', DocumentsSchema)

module.exports = Document