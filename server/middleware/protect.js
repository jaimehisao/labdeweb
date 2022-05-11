const jwt = require('jsonwebtoken')
const User = require('../models/user.model')

exports.protect = async (req, res, next) => {
    let token

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        // Bearer bdashkbdahdasdasdasdasdvqwrefasd
        token = req.headers.authorization.split(' ')[1]
    }

    if (!token) {
        return res.status(401).json({
            success: false,
            message: 'Sin permiso para esta ruta', 
        })
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        const user = await User.findById(decoded.id)

        if (!user) {
            return res.status(401).json({
                success: false,
                message: 'No existe usuario con este ID', 
            })
            
        } else if (user) {
            req.user = user
            next()
        }

    } catch (error) {
        return res.status(401).json({
            success: false,
            message: 'Sin permiso para esta ruta', 
        })
    }
}