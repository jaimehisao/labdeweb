const User = require('../models/user.model')
// TRUENA LA CONEXION DE MONGO (NOSE PORQUE)
// const regex = require("regex")

// REGISTER
// POST
exports.register = async (req, res, next) => {
    //TO-DO llamara la base

    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({
            success: false,
            message: 'Se necesita un nombre, e-mail y clave para poder registrarse'
        })
    }

    // Revisamos que la contraseña cumpla con los estandares de seguridad.
    const re = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/

    if (!re){
        return res.status(400).json({
            success: false,
            message: 'La contraseña debe ser de 6-16 caracteres y con minimo un caracter especial y un numero.'
        })
    }

    // Verificar que no exista en la base de datos
    const user = await User.findOne({ email }).select("+password")
    //
    if (!user) {



    } else {
        return res.status(404).json({
            success: false,
            message: 'Usuario ya existe! Intente hacer Log-In!'
        })
    }
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