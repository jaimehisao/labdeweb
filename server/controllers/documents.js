const Document = require('../models/documents.model')

// TYPES : RETO, ACTIVIDAD, PRESENTACION
// LEVEL: VIDEOJUEGOS(1), PYTHON BASICO (2), PYTHON INTERMEDIO (3)

const levels = {
    "1": "VIDEO JUEGOS",
    "2": "PYTHON BASICO",
    "3": "PYTHON INTERMEDIO"
}

const types = {
    "1": "RETO",
    "2": "PRESENTACION",
    "3": "ACTIVIDAD"
}

// POST NEW DOCUMENT
// POST
exports.saveDocument = async(req, res, next) => {

    const {fileName, activityType, level, file} = req.body

    try {

        const doc  = await Document.create({
            fileName,
            file,
            activityType: types[activityType],
            level: levels[level],
        })

        res.status(201).json({
            success: true,
            document: doc,
        })

    } catch (error) {
        next(error)
    }

}


// DOCUMENT BY TYPE AND LEVEL
// GET
exports.byLevelAndType = async (req, res, next) => {

    // LEVEL: VIDEO JUEGOS(1), PYTHON BASICO (2), PYTHON INTERMEDIO (3)
    // LEVEL: RETO(1), ACTIVIDAD(2), PRESENTACION(3)

    try {
        const level = req.params.level
        const type = req.params.type

        const docs = await Document.find({ level: levels[level], activityType: types[type]})

        return res.status(200).json({
            success: true,
            documents: docs
        })

    } catch (error) {
        return res.status(200).json({
            success: false,
            documents: {}
        })
    }
}

// DOCUMENT BY _id
// GET
exports.documentByID = async (req, res, next) => {

    try {
        const id = req.params.id

        await Document.findOne({ _id: id });

        return res.status(200).json({
            success: true,
            document: doc
        })

    } catch (error) {
        return res.status(200).json({
            success: false,
            documents: {}
        })
    }
}

// DELETE DOCUMENT BY _id
// Delete
exports.deleteDocumentByID = async (req, res, next) => {

    try {
        const id = req.params.id

        const doc = await Document.deleteOne({ _id: id })

        return res.status(200).json({
            success: true,
        })

    } catch (error) {
        return res.status(200).json({
            success: false,
        })
    }
}