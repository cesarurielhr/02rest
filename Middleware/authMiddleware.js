const jwt = require('jsonwebtoken');
const JWT_SECRET = require('../controllers/authController').JWT_SECRET;

function authenticateToken(req, res, next) {
    const  authHeader = req.headers['authorization'];
    console.log(authHeader);
    token = authHeader && authHeader.split(' ')[1]
    if(!token)
        return res.status(403).json({code:403, message:'token invalido'});
    jwt.verify(token, JWT_SECRET,(err, user) => {
        if(err)
            switch(err.name){
                case 'JsonWebTokenError':
                    return res.status(403).json({code:403, message:'Token invalido'});
                case 'TokenExpiredError':
                    return res.status(403).json({code:403, message:'Token expirado'});
                default:
                    return res.status(400).json({code:400, message:'Error interno'});
            }
            req.user = user;
            next();
    });
}
module.exports = authenticateToken
