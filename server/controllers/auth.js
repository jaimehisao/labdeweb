const User = require('../models/user.model')

// REGISTER
// POST
exports.register = async (req, res, next) => {

    const { name, email, password, confPassword, level } = req.body;

    if (!name || !email || !password || !confPassword || !level) {
        return res.status(400).json({
            success: false,
            message: 'Se necesita un nombre, e-mail, clave y curso para poder registrarse'
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

    if (confPassword !== password){
        return res.status(400).json({
            success: false,
            message: 'La contraseña debe ser la misma en los dos campos!'
        })
    }

    try {
        // Verificar que no exista en la base de datos
        const userSearch = await User.findOne({ email }).select("+password")

        if (!userSearch) {

            const user = await User.create({
                username: name,
                email: email,
                password: password,
                userType: "STUDENT",
                level: level,
            })

            const token = user.getSignedToken()

            res.status(201).json({
                success: true,
                token
            })

        } else {
            return res.status(404).json({
                success: false,
                message: 'Usuario ya existe! Intente hacer Log-In!'
            })
        }
    } catch (error) {
        next(error)
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