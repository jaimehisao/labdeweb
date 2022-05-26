const express = require('express')
const router = express.Router()
const { protect } = require('../middleware/protect')


// /api/documents/
const { saveDocument, byLevelAndType, documentByID } = require('../controllers/documents')

// GET
router.get('/filesByLevelAndType/:level/:type', byLevelAndType ) // missing protect
router.get('/documentByID/:id', protect, documentByID )

// POST
router.post('/saveDocument', protect, saveDocument)



//router.post('/deleteDocument', protect, delete)

module.exports = router;