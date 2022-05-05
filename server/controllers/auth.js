const User = require('../models/user.model')

// REGISTER
// POST
exports.register = async (req, res, next) => {
    //TODO llamara la base

    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({
            success: false,
            message: 'Se necesita un nombre, e-mail y clave'
        })
    }



    // Revision de la seguridad de la password (mayusculas, simbolos)

    // Verificar que no exista en la base de datos

    //

    // DATA FROM REQ



}

// LOGIN
// POST
exports.login = async (req, res, next) => {

    const { email, password } = req.body;

    if (!email || !password) {

        return res.status(400).json({
            success: false,
            message: 'Se necesita un e-mail y clave'
        })

    }

    try {

        // GET user from MongoDB 
        const user = await User.findOne({ email }).select("+password")

        if (!user) {

            return res.status(404).json({
                success: false,
                message: 'Credenciales invalidaas'
            })

        } else {

            // Uses function in User Schema to match req.password to user's password
            const isMatch = await user.matchPasswords(password)

            if (!isMatch) {

                return res.status(401).json({
                    success: false,
                    message: 'Correo o clave incorrecto'
                })

            } else if (isMatch) {

                // SIGN token using User Schema's Function "getSignedToken"
                const signedToken = user.getSignedToken()

                // Returns signed Token 
                res.status(200).json({
                    success: true,
                    token: signedToken,
                })

            }
        }

    } catch (error) {
        next(error)
    }
    
}